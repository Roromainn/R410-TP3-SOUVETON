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
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(people, ["name", "phone"])
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json();
      return People.fromRaw(data);
    } catch (error) {
      let message: string;
      if (error instanceof Error) {
        message = error.message;
      } else {
        message = "Unknown error adding person";
      }
      throw new DaoError(message);
    }
  }

  public async remove(people: People): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}?id=${people.idpeople}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      let message: string;
      if (error instanceof Error) {
        message = error.message;
      } else {
        message = "Unknown error removing person";
      }
      throw new DaoError(message);
    }
  }
}
