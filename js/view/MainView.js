var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class MainView {
    constructor(ctrl) {
        this.controller = ctrl;
        this.list = document.getElementById("list");
        this.controller.register(this);
        this.init();
    }
    error(message) {
        alert(message);
    }
    peopleAdded(people) {
        const li = document.createElement("li");
        li.innerText = people.name;
        const idSpan = document.createElement("span");
        idSpan.classList.add("id", "hidden");
        idSpan.innerText = people.idpeople.toString();
        li.appendChild(idSpan);
        const phoneSpan = document.createElement("span");
        phoneSpan.classList.add("phone", "hidden");
        phoneSpan.innerText = people.phone;
        li.appendChild(phoneSpan);
        li.addEventListener("click", () => this.select(li));
        this.list.appendChild(li);
    }
    peopleRemoved(people) {
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.controller.list();
        });
    }
    select(element) {
        const allItems = this.list.querySelectorAll("li");
        for (let item of allItems) {
            item.classList.remove("selected");
        }
        element.classList.add("selected");
    }
}
//# sourceMappingURL=MainView.js.map