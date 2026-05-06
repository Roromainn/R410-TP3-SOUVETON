import { People } from "./People";
import { DaoError } from "./DaoError";

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
