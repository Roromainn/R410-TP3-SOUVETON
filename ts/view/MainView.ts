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
  }

  error(message: string): void {
    alert(message);
  }

  peopleAdded(people: People): void {
    // Implement in next steps
  }

  peopleRemoved(people: People): void {
    // Implement in next steps
  }

  async init(): Promise<void> {
    // Implement in next steps
  }
}
