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
  }

  async init(): Promise<void> {
    await this.controller.list();
  }

  select(element : HTMLLIElement):void{
    const allItems = this.list.querySelectorAll("li");
    for (let item of allItems) {
      item.classList.remove("selected");
    }

    element.classList.add("selected");
  }

}
