export interface KanjiDetailApi {
    _id:                    string;
    _rev:                   string;
    rad_name_ja:            string;
    grade:                  number;
    hint_group:             number;
    kunyomi:                string;
    meaning:                string;
    kstroke:                number;
    examples:               Example[];
    kunyomi_ja:             string;
    ka_utf:                 string;
    luminous:               string;
    rad_name_search:        string[];
    rad_order:              number;
    txt_books:              TxtBook[];
    kname:                  string;
    rad_utf:                string;
    stroketimes:            number[];
    kunyomi_ka_display:     string;
    dick:                   string;
    rad_name:               string;
    dicn:                   string;
    mn_hint:                string;
    rad_stroke:             number;
    onyomi_ja:              string;
    rad_meaning:            string;
    onyomi:                 string;
    ka_id:                  string;
    onyomi_search:          string[];
    kunyomi_search:         string[];
    meaning_search:         string[];
    onyomi_ja_search:       string[];
    kunyomi_ja_search:      string[];
    rad_meaning_search:     string[];
    rad_name_ja_search:     string[];
    rad_position_ja:        string;
    rad_position:           string;
    rad_position_search:    string[];
    rad_position_ja_search: string[];
    textbook_search:        string[];
    rad_name_file:          string;
    kanji:                  Kanji;
    radical:                Radical;
    references:             References;
}

export interface Example {
    japanese: string;
    meaning:  Meaning;
    audio:    Audio;
}

export interface Audio {
    opus: string;
    aac:  string;
    ogg:  string;
    mp3:  string;
}

export interface Meaning {
    english: string;
}

export interface Kanji {
    character: string;
    meaning:   Meaning;
    strokes:   Strokes;
    onyomi:    Onyomi;
    kunyomi:   Kunyomi;
    video:     Video;
}

interface Kunyomi {
    romaji:   string;
    hiragana: string;
}

interface Onyomi {
    romaji:   string;
    katakana: string;
}

export interface Strokes {
    count:   number;
    timings: number[];
    images:  string[];
}

export interface Video {
    poster: string;
    mp4:    string;
    webm:   string;
}

export interface Radical {
    character: string;
    strokes:   number;
    image:     string;
    position:  Position;
    name:      Kunyomi;
    meaning:   Meaning;
    animation: string[];
}

export interface Position {
    hiragana: string;
    romaji:   string;
    icon:     string;
}

export interface References {
    grade:          number;
    kodansha:       string;
    classic_nelson: string;
}

export interface TxtBook {
    chapter: string;
    txt_bk:  string;
}