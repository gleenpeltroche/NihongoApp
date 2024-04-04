import { Meaning, Strokes, Video } from "../../infrastructure/interfaces/kanjiDetail";

export interface KanjiDetail {
    character: string;
    meaning:   Meaning;
    strokes:   Strokes;
    onyomiList:    Onyomi[];
    kunyomiList:   Kunyomi[];
    video:     Video;
    exampleList:   Example[];
}

export interface Kunyomi {
    romaji:   string;
    hiragana: string;
}

export interface Onyomi {
    romaji:   string;
    katakana: string;
}

export interface Example {
    japanese: string;
    hiragana: string;
    meaning:  Meaning;
}

export interface KanjiLookAndLearn {
    number:   string,
    kanji:    string,
    meaning:  string,
    parts:    string,
    similars: string,
}

export type JapenseTextOptions = "hiragana" | "katakana";