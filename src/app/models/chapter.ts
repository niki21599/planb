import { SubChapter } from "./supChapter";

export class Chapter{
    id: number;
    title: string;  
    userId: number;

    constructor(title: string, id: number, userId: number){
        this.title = title;
        this.id = id;
        this.userId = userId;
    }

    
}
