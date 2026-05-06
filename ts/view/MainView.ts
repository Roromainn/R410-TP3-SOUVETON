import { Observer } from "./Observer";
import { Observable } from "./Observable";
import { People } from "../model/People";
import { PeopleController } from "../controller/PeopleController";

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
