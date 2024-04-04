import { KanjiDetail } from "../../domain/entities/kanjiDetail";
import { Utils } from "../../presentation/utils/utils";
import { KanjiDetailApi } from "../interfaces/kanjiDetail";

export class KanjiMapper {

    static kanjiDetailApiToEntity( kanjiDetail: KanjiDetailApi ): KanjiDetail {
      return {
        character: kanjiDetail.kanji.character,
        meaning: kanjiDetail.kanji.meaning,
        strokes: kanjiDetail.kanji.strokes,
        onyomiList: Utils.getOnyomis(kanjiDetail.kanji.onyomi.katakana, kanjiDetail.kanji.onyomi.romaji),
        kunyomiList: Utils.getKunyomis(kanjiDetail.kanji.kunyomi.hiragana, kanjiDetail.kanji.kunyomi.romaji),
        video: kanjiDetail.kanji.video,
        exampleList: Utils.getExamples(kanjiDetail.examples),
      }
    }
}

