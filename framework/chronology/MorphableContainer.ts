//TODO id recycling
class MorphableContainer<T extends Morphable<T>> implements Morphable<MorphableContainer<T>>, Iterable<T> {
  public add(object: T): number {
    let id = ++this._maxId
    this._ids.add(this._maxId)
    this._objects.set(this._maxId, object)

    return id
  }
  
  public delete(id: number) {
    this._ids.delete(id)
    this._objects.delete(id)
  }
  
  public interpolate(other: MorphableContainer<T>, t: number): MorphableContainer<T> {
    throw new Error("//TODO Method not implemented.");
  }

  public extrapolate(t: number): MorphableContainer<T> {
    throw new Error("//TODO Method not implemented.");
  }
  
  public *[Symbol.iterator](): Iterator<T> {
    for (let id of this._ids)
      yield this._objects.get(id) as T
  }
  
  
  
  private _maxId = 0
  private _ids: Set<number> = new Set<number>()
  private _objects: Map<number, T> = new Map<number, T>()
}