export interface VocabullaryList {
    symbol: string;
    meaning:  string;
    isYouon?: boolean,
}

export interface VocabullaryRowList {
    row: number;
    list:  VocabullaryList[];
    isMain?: boolean;
}
