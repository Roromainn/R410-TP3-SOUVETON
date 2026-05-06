import { People } from "./People.js";
import { DaoError } from "./DaoError.js";

export class PeopleDao {
  private readonly apiUrl = "https://iutdijon.u-bourgogne.fr/intra/iq/webservices/annuaire/api.php";

  public async loadAll(): Promise<People[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json();
      return data.map((obj: any) => People.fromRaw(obj));
    } catch (error) {
      let message: string;
      if (error instanceof Error) {
        message = error.message;
      } else {
        message = "Unknown error loading people";
      }
      throw new DaoError(message);
    }
  }

  public async add(people: People): Promise<People> {
    return people;
  }

  public async remove(people: People): Promise<void> {
    return;
  }
}
