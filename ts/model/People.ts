export class People {
  private _idpeople: number = 0;
  private _name: string = "";
  private _phone: string = "";

  get idpeople(): number {
    return this._idpeople;
  }

  set idpeople(value: number) {
    this._idpeople = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  public static fromRaw(obj: any): People {
    let people = new People();
    if (obj.idpeople) people._idpeople = obj.idpeople;
    if (obj.name) people._name = obj.name;
    if (obj.phone) people._phone = obj.phone;
    return people;
  }
}
