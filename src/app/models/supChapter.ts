export class SubChapter{
    id: number;
    subHeading: string;
    text: string;
    isComplete: boolean;
    chapterId: number;

    constructor(subHeading: string, text: string, isComplete: boolean, id: number, chapterId: number){
        this.id = id;
        this.subHeading = subHeading;
        this.text = text;
        this.isComplete = isComplete;
        this.chapterId = chapterId;
    }
}