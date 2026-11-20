import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert,Text, View ,SectionList,TouchableOpacity,Image, Button} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
const datasource = [
    {
        title: "Supercars",
        icon: "car",
        bgColor: "gold",
        textColor: "white",
        data: [
            { name: "Ferrari 296 GTB",
                brand: "Ferrari",
                price: "$320,000",
                image: "https://images.unsplash.com/photo-1608566540175-fa6a87babc04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
                image2:"https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},

            {   name: "Lamborghini Revuelto",
                brand: "Lamborghini",
                price: "$600,000",
                image: "https://images.unsplash.com/photo-1630312465536-5c6b1f76dc3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
                image2:"https://images.unsplash.com/photo-1625811354078-1e6a34132752?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},

        ],
    },
    {
        title: "Luxury Sedans",
        icon: "diamond",
        bgColor: "gold",
        textColor: "white",
        data: [
            { name: "Rolls-Royce Phantom",
                brand: "Rolls-Royce",
                price: "$470,000",
                image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
                image2:"https://images.unsplash.com/photo-1557081384-461cf563cd65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
            { name: "Bentley Flying Spur",
                brand: "Bentley",
                price: "$230,000",
                image: "https://images.unsplash.com/photo-1712275771076-1671ad03f110?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
                image2:"https://images.unsplash.com/photo-1621252792374-2b79e3fcf295?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},

        ],
    },
];

export { datasource };
const renderItem = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => Alert.alert(item.name, `Brand: ${item.brand}\nPrice: ${item.price}`)}
        >
            <View style={styles.imageRow}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <Image source={{ uri: item.image2 }} style={styles.cardImage} />
            </View>

            <Text style={styles.textStyle}>{item.name}</Text>
            <Text style={styles.brandText}>{item.brand}</Text>
            <Text style={styles.priceText}>{item.price}</Text>
        </TouchableOpacity>
    );
};
export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Add Your Cars</Text>
            <Button title="Add Car"
                    onPress={()=>Alert.alert('Collect more')}/>

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                renderSectionHeader={({ section }) => (
                    <View
                        style={[
                            styles.sectionHeader,
                            { backgroundColor: section.bgColor },
                        ]}
                    >
                        <Ionicons
                            name={section.icon}
                            size={22}
                            color={section.textColor}
                        />
                        <Text style={[styles.headerText, { color: section.textColor }]}>
                            {section.title}
                        </Text>
                    </View>
                )}
            />

            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'brown',
        paddingTop: 48,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 12,

    },
    listContent: {
        paddingTop: 12,
        paddingBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 8,


    },
    opacityStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: 'khaki',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
    },
    textStyle: {

        flex: 1,
        fontSize: 30,
        fontWeight: '600',
        marginRight: 12,
        fontStyle: 'italic',
        color: 'brown',
    },
    cardImage: {
        width: 180,
        height: 130,
        borderRadius:8,
    },
    brandText: {
        fontSize: 14,
        color: 'gray',        // brand color
    },
    priceText: {
        fontSize: 15,
        color: 'green',       // price color
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
});