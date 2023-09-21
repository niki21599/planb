import { SubChapter } from "./supChapter";

export class Chapter{
    id: string;
    title: string 
    subChapters: SubChapter[];

    constructor(title: string, subChapters: SubChapter[]){
        this.title = title;
        this.subChapters = subChapters;
    }

    isComplete(): boolean{
        return this.subChapters.length == this.getNumberOfCompleted();
    }

    getNumberOfCompleted(): number{
        let count =  0;

        for (const subChapter of this.subChapters) {
        if (subChapter.isComplete) {
            count++;
        }
        }
        return count;
    }
}
