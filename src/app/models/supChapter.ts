export class SubChapter{
    id: string;
    subHeading: string;
    text: string;
    isComplete: boolean;
    idOfMilestone: string;

    constructor(subHeading: string, text: string, isComplete: boolean = false){
        this.subHeading = subHeading;
        this.text = text;
        this.isComplete = isComplete;
    }
}