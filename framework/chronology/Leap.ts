import { Morphable } from "../morphable/Morphable";
import { Snapshot } from "./Snapshot";

export abstract class Leap<T extends Morphable<T>> {
  public abstract apply(snapshot: Snapshot<T>): Snapshot<T>
}