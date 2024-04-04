import { StyleSheet } from "react-native";
import GlobalColors from "./global.colors";

const GlobalStyles = StyleSheet.create({
    columnContainer: {
        flex: 1,
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    horizontalDivider: {
        backgroundColor: GlobalColors.grey,
        width: 2,
        height: 'auto'
    },
    onkunLabel: {
        fontSize: 18
    },

})

export default GlobalStyles;