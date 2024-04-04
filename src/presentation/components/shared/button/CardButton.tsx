import { PropsWithChildren } from 'react';
import { Text } from "@ui-kitten/components";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

interface Props extends PropsWithChildren {
    title: string;
    titleSize?: number;
    onPressFunction?: () => void;
    styleProps?: Object;
}

const CardButton = ({children, title, titleSize, onPressFunction, styleProps = {}}: Props) => {
  return (
    <Pressable style={{
      ...styles.item, 
      borderWidth: title.length === 0 ? 0 : 2,
      ...styleProps
    }}
        onPress={onPressFunction}
    >
        <Text style={{...styles.title, fontSize: titleSize ? titleSize : 42}}>{title}</Text>
        {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
    item: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: 4,
      paddingVertical: 10,
      position: 'relative',
    },
    title: {
      marginBottom: 10,
    },
});

export default CardButton;