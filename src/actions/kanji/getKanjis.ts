import { kanjiAliveApi } from "../../config/api/kanjiAlive";
import { KanjiDetail } from "../../domain/entities/kanjiDetail";
import { KanjiDetailApi } from "../../infrastructure/interfaces/kanjiDetail";
import { KanjiMapper } from "../../infrastructure/mappers/kanjiDetail.mapper";


export const getKanjiDetail = async (character: string):Promise<KanjiDetail | null> => {

  try {
    
    const { data } = await kanjiAliveApi.get<KanjiDetailApi>(`/kanji/${character}`);
    return KanjiMapper.kanjiDetailApiToEntity(data);

  } catch (error) {

    console.log(error);
    return null
    
  }

}
