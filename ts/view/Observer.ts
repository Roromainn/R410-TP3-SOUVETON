import { People } from "../model/People";

export interface Observer {
  error(message: string): void;
  peopleAdded(people: People): void;
  peopleRemoved(people: People): void;
}
