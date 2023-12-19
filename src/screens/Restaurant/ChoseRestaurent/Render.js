import { Image, TouchableOpacity } from "react-native";
import CustomText from "../../../Components/CustomText";
import { styles } from "./styles";


export const renderItem = ({ navigation }, item) => {
    const data = item?.item
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Selected_Restaurant')} style={styles.renderItemContainer}>
            <Image source={data?.img} style={styles.flatImage} />
            <CustomText customStyle={styles.Restaurant_Name_Flat} title={data?.Restaurant_Name} />
            <CustomText customStyle={styles.about} title={data?.about} />
        </TouchableOpacity>
    );
};
export const HeaderItem = ({ item }) => {
    return (
        <CustomText customStyle={styles.heading} title={"Choose a restaurant you want to order from"} />
    );
};