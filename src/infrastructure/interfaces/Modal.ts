import { Dispatch, SetStateAction } from "react";

export interface ModalInterface {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}
  