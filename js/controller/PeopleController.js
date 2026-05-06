var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class PeopleController {
    constructor(dao) {
        this.observers = [];
        this.dao = dao;
    }
    register(obs) {
        this.observers.push(obs);
    }
    notifyError(message) {
        for (let obs of this.observers) {
            obs.error(message);
        }
    }
    notifyPeopleAdded(people) {
        for (let obs of this.observers) {
            obs.peopleAdded(people);
        }
    }
    notifyPeopleRemoved(people) {
        for (let obs of this.observers) {
            obs.peopleRemoved(people);
        }
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const people = yield this.dao.loadAll();
                for (let p of people) {
                    this.notifyPeopleAdded(p);
                }
                return people;
            }
            catch (error) {
                const message = error instanceof Error ? error.message : "Error loading people";
                this.notifyError(message);
                return [];
            }
        });
    }
    add(people) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implement in next steps
        });
    }
    remove(people) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implement in next steps
        });
    }
}
//# sourceMappingURL=PeopleController.js.map