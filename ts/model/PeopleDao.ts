import { People } from "./People.js";
import { DaoError } from "./DaoError.js";

export class PeopleDao {
  public async loadAll(): Promise<People[]> {
    return [];
  }

  public async add(people: People): Promise<People> {
    return people;
  }

  public async remove(people: People): Promise<void> {
    return;
  }
}
