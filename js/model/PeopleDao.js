var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { People } from "./People.js";
import { DaoError } from "./DaoError.js";
export class PeopleDao {
    constructor() {
        this.apiUrl = "https://iutdijon.u-bourgogne.fr/intra/iq/webservices/annuaire/api.php";
    }
    loadAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(this.apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const data = yield response.json();
                return data.map((obj) => People.fromRaw(obj));
            }
            catch (error) {
                let message;
                if (error instanceof Error) {
                    message = error.message;
                }
                else {
                    message = "Unknown error loading people";
                }
                throw new DaoError(message);
            }
        });
    }
    add(people) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(this.apiUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(people, ["name", "phone"])
                });
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const data = yield response.json();
                return People.fromRaw(data);
            }
            catch (error) {
                let message;
                if (error instanceof Error) {
                    message = error.message;
                }
                else {
                    message = "Unknown error adding person";
                }
                throw new DaoError(message);
            }
        });
    }
    remove(people) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.apiUrl}?id=${people.idpeople}`, {
                    method: "DELETE"
                });
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
            }
            catch (error) {
                let message;
                if (error instanceof Error) {
                    message = error.message;
                }
                else {
                    message = "Unknown error removing person";
                }
                throw new DaoError(message);
            }
        });
    }
}
//# sourceMappingURL=PeopleDao.js.map