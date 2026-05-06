import { PeopleDao } from "./model/PeopleDao";
import { PeopleController } from "./controller/PeopleController";
import { MainView } from "./view/MainView";

window.onload = () => {
  let dao = new PeopleDao();
  let ctrl = new PeopleController(dao);
  let view = new MainView(ctrl);
};
