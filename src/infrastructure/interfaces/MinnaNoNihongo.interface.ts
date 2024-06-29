export interface GrammarLesson {
    title:   Parts[];
    examples: Array<Parts[]>;
}

export interface Parts {
    text:       string;
    highlight?: boolean;
}