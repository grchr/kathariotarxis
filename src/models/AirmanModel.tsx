export class AirmanModel {
    public key: number | null;
    public id: number | null;
    public name: string;
    public surname: string;

    constructor(key:  number | null, id:  number | null, name: string, surname: string) {
        this.key = key;
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    public static clone(e: any): AirmanModel {
        return new AirmanModel(e.key, e.id, e.name, e.surname);
    }
}