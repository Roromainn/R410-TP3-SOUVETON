import { Observer } from "../view/Observer.js";
import { Observable } from "../view/Observable.js";
import { PeopleDao } from "../model/PeopleDao.js";
import { People } from "../model/People.js";

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
    try {
      const people = await this.dao.loadAll();
      for (let p of people) {
        this.notifyPeopleAdded(p);
      }
      return people;
    } catch (error) {
      let message: string;
      if (error instanceof Error) {
        message = error.message;
      } else {
        message = "Error loading people";
      }
      this.notifyError(message);
      return [];
    }
  }

  async add(people: People): Promise<void> {
    // Implement in next steps
  }

  async remove(people: People): Promise<void> {
    try {
      await this.dao.remove(people);
      this.notifyPeopleRemoved(people);
    } catch (error) {
      let message: string;
      if (error instanceof Error) {
        message = error.message;
      } else {
        message = "Error removing person";
      }
      this.notifyError(message);
    }
  }
}
