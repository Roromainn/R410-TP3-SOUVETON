import { Observer } from "./Observer";

export interface Observable {
  register(obs: Observer): void;
}
