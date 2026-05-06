import { Observer } from "./Observer.js";

export interface Observable {
  register(obs: Observer): void;
}
