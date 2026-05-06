import { Observer } from "../view/Observer";
import { Observable } from "../view/Observable";
import { PeopleDao } from "../model/PeopleDao";
import { People } from "../model/People";

export class PeopleController implements Observable {
  private dao: PeopleDao;
  private observers: Observer[] = [];

  constructor(dao: PeopleDao) {
    this.dao = dao;
  }

  register(obs: Observer): void {
    this.observers.push(obs);
  }

  protected notifyError(message: string): void {
    for (let obs of this.observers) {
      obs.error(message);
    }
  }

  protected notifyPeopleAdded(people: People): void {
    for (let obs of this.observers) {
      obs.peopleAdded(people);
    }
  }

  protected notifyPeopleRemoved(people: People): void {
    for (let obs of this.observers) {
      obs.peopleRemoved(people);
    }
  }

  async list(): Promise<People[]> {
    return [];
  }

  async add(people: People): Promise<void> {
    // Implement in next steps
  }

  async remove(people: People): Promise<void> {
    // Implement in next steps
  }
}
