export class ChoreModel {
    public key: number;
    public id: number;
    public name: string;

    constructor(key: number, id: number, name: string) {
        this.key = key;
        this.id = id;
        this.name = name;
    }
}