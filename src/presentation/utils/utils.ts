import { JapenseTextOptions } from "../../domain/entities/kanjiDetail";
import { Example } from "../../infrastructure/interfaces/kanjiDetail";

export class Utils {

    static splitJapaneseCommasAndGetArray( stringWhitJapaneseCommas: string ): string[] {
        return stringWhitJapaneseCommas.split("、");
    }

    static splitCommasAndGetArray( stringWhitCommas: string ): string[] {
        return stringWhitCommas.split(", ");
    }
    
    static splitCommasAndGetOnyomiKunyomiArray( stringWhitJapaneseCommas: string, stringWhitCommas: string, key: JapenseTextOptions): any {
        const japaneseStringArray = Utils.splitJapaneseCommasAndGetArray(stringWhitJapaneseCommas);
        const stringArray = Utils.splitCommasAndGetArray(stringWhitCommas);
        return japaneseStringArray.map((japaneseString, index) => ({
            [key]: japaneseString,
            romaji: stringArray[index]
        }))
    }

    static getOnyomis(stringWhitJapaneseCommas: string, stringWhitCommas: string): any{
        return Utils.splitCommasAndGetOnyomiKunyomiArray(stringWhitJapaneseCommas, stringWhitCommas, "katakana");
    }

    static getKunyomis(stringWhitJapaneseCommas: string, stringWhitCommas: string): any{
        return Utils.splitCommasAndGetOnyomiKunyomiArray(stringWhitJapaneseCommas, stringWhitCommas, "hiragana");
    }

    static getExamples(examples: Example[]): any[]{
        return examples.map(example => {
            const exampleSplited = example.japanese.split("（");
            return {
                japanese: exampleSplited[0] || "",
                hiragana: exampleSplited[1].slice(0, -1) || "",
                meaning:  example.meaning,
            }
        })
        
    }
}