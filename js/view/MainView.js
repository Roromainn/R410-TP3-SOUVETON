var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { People } from "../model/People.js";
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
        const items = document.querySelectorAll("span.id");
        for (let node of items) {
            if (node.innerHTML == people.idpeople.toString()) {
                let parent = node.parentNode;
                this.list.removeChild(parent);
                break;
            }
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            yield this.controller.list();
            (_a = document.getElementById("remove")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.removePeople());
            (_b = document.getElementById("tel")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => this.showphone());
            (_c = document.getElementById("add")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => this.addPeople());
            (_d = document.getElementById("validate")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => this.validate());
        });
    }
    removePeople() {
        return __awaiter(this, void 0, void 0, function* () {
            const selected = this.list.querySelector("li.selected");
            if (!selected)
                return;
            const idSpan = selected.querySelector("span.id");
            if (!idSpan)
                return;
            const people = People.fromRaw({ idpeople: parseInt(idSpan.innerHTML) });
            yield this.controller.remove(people);
        });
    }
    addPeople() {
        var _a;
        (_a = document.querySelector(".add")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const nameInput = document.getElementById("name");
            const phoneInput = document.getElementById("phone");
            const people = new People();
            people.name = nameInput.value;
            people.phone = phoneInput.value;
            yield this.controller.add(people);
            (_a = document.querySelector(".add")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
        });
    }
    select(element) {
        const allItems = this.list.querySelectorAll("li");
        for (let item of allItems) {
            item.classList.remove("selected");
        }
        element.classList.add("selected");
    }
    showphone() {
        const tel = document.querySelector(".selected .phone");
        const txt = tel === null || tel === void 0 ? void 0 : tel.innerHTML;
        alert(txt);
    }
}
//# sourceMappingURL=MainView.js.map