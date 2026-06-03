import { Observer } from "./Observer.js";
import { Observable } from "./Observable.js";
import { People } from "../model/People.js";
import { PeopleController } from "../controller/PeopleController.js";

export class MainView implements Observer {
  private controller: PeopleController;
  private list: HTMLUListElement;

  constructor(ctrl: PeopleController) {
    this.controller = ctrl;
    this.list = document.getElementById("list") as HTMLUListElement;
    this.controller.register(this);
    this.init();
  }

  error(message: string): void {
    alert(message);
  }

  peopleAdded(people: People): void {
    const li = document.createElement("li");
    li.innerText = people.name;

    const idSpan = document.createElement("span");
    idSpan.classList.add("id", "hidden");
    idSpan.innerText = people.idpeople.toString();
    li.appendChild(idSpan);

    const phoneSpan = document.createElement("span");
    phoneSpan.classList.add("phone", "hidden");
    phoneSpan.innerText = people.phone;
    li.appendChild(phoneSpan);

    li.addEventListener("click", () => this.select(li));
    this.list.appendChild(li);

  }

  peopleRemoved(people: People): void {
    const items = document.querySelectorAll("span.id");
    for (let node of items) {
      if (node.innerHTML == people.idpeople.toString()) {
        let parent = node.parentNode;
        this.list.removeChild(parent as Node);
        break;
      }
    }
  }

  async init(): Promise<void> {
    await this.controller.list();
    const removeBtn = document.getElementById("remove");
    removeBtn?.addEventListener("click", () => this.removePeople());
  }

  async removePeople(): Promise<void> {
    const selected = this.list.querySelector("li.selected");
    if (!selected) return;
    const idSpan = selected.querySelector("span.id");
    if (!idSpan) return;
    const people = People.fromRaw({ idpeople: parseInt(idSpan.innerHTML) });
    await this.controller.remove(people);
    const tel = document.getElementById("tel");
    tel?.addEventListener("click", () => this.showphone())
  }

  select(element : HTMLLIElement):void{
    const allItems = this.list.querySelectorAll("li");
    for (let item of allItems) {
      item.classList.remove("selected");
    }

    element.classList.add("selected");
  }

  showphone(){
    const tel = document.querySelector(".selected .phone",);
    const txt = tel?.innerHTML;
    alert(txt);
  }

}
