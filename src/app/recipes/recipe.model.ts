export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public id: number = 0;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.id = this.setAndIncrementId();
    }

    incrementId() {this.id++};

    setAndIncrementId(): number {
        const idToReturn = +this.id;
        this.incrementId();
        return idToReturn;
    }
}