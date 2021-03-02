export class AirmanModel {
    public key: number;
    public id: number;
    public name: string;
    public surname: string;

    constructor(key: number, id: number, name: string, surname: string) {
        this.key = key;
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}