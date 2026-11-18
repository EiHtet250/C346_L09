import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert,Text, View ,SectionList, FlatList,TouchableOpacity} from 'react-native';
const datasource = [
{data:[
{key: 'a'},
{key: 'e'},
{key:'i'},
{key:'o'},
{key:'u'},

],
title:"Vowels",bgcolor:"skyblue"},
{data:[
{key: 'b'},
    {key: 'c'},
    {key: 'd'},

    {key: 'f'},
    {key: 'g'},
    {key: 'h'},

    {key: 'j'},
    {key: 'k'},
    {key: 'l'},
    {key: 'm'},
    {key: 'n'},

    {key: 'p'},
    {key: 'q'},
    {key: 'r'},
    {key: 's'},
    {key: 't'},

    {key: 'v'},
    {key: 'w'},
    {key: 'x'},
    {key:'y'},
    {key: 'z'},
],
title:"Consonants",bgcolor:"khaki"}
];

const renderItem = ({item,index,section}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}
        onPress={()=>Alert.alert(item.key+ "  is selected!")}>
        <Text style={styles.textStyle}>{index+1}.{item.key}</Text>
      </TouchableOpacity>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>L09 Exercise 1</Text>

      <SectionList
        sections={datasource}
        renderItem={renderItem}
        contentContainerStyle={{padding:10}}
        renderSectionHeader={({ section }) => (
          <Text
            style={[styles.headerText, { backgroundColor: section.bgcolor }]}
          >
            {section.title}
          </Text>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop :20,
    marginBottom: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  opacityStyle: {
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 15,
    margin:10,
    textAlign: 'left',
  },
  headerText:{
  fontSize:20,
  margin:10,
  textAlign:'center',
  fontWeight: 'bold',
  }
});
