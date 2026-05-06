import { People } from "../model/People.js";

export interface Observer {
  error(message: string): void;
  peopleAdded(people: People): void;
  peopleRemoved(people: People): void;
}
