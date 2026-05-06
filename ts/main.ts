import { PeopleDao } from "./model/PeopleDao.js";
import { PeopleController } from "./controller/PeopleController.js";
import { MainView } from "./view/MainView.js";

window.onload = () => {
  let dao = new PeopleDao();
  let ctrl = new PeopleController(dao);
  let view = new MainView(ctrl);
};
