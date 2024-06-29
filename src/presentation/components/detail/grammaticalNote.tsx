import { StyleSheet } from "react-native";
import { Divider, Layout, Text } from "@ui-kitten/components"
import GlobalColors from "../../styles/global.colors";
import { GrammarLesson } from "../../../infrastructure/interfaces/MinnaNoNihongo.interface";

interface Prop {
    note: GrammarLesson;
    id: number;
}

const GrammaticalNote = ({note, id}: Prop) => {
    return (
        <>
        <Divider />
        <Layout style={styles.layout}>
            <Text category='h5'>
                { note.title.map((element, key) => {
                    if(element.highlight) return <Text style={styles.grammaticRuleTitleStyle} category='h5' key={key}> {element.text} </Text>;
                    return element.text
                }) }
            </Text>
            
            { note.examples.map((example, key) => ( 
                <Text key={key} style={styles.grammaticRuleExampleStyle}>
                    <>
                        {example.map((element, id) => {
                            if(element.highlight) return <Text style={{...styles.grammaticRuleExampleStyle, backgroundColor: 'yellow'}} key={id}> {element.text} </Text>;
                            return element.text
                        })}
                        <Text>。</Text>
                    </>
                </Text>
            )) }
            
        </Layout>
        </>
        
    )
}

const styles = StyleSheet.create({
    layout: {
        alignSelf: 'flex-start',
        gap: 4,
        marginBottom: 12
    },
    grammaticRuleExampleStyle: {
        fontSize: 18,
    },
    grammaticRuleTitleStyle: {
        backgroundColor: GlobalColors.grey,
        color: 'white'
    },
});

export default GrammaticalNote