import { FlatList, Image, View, TouchableOpacity, ScrollView, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { Container } from '../../../Utils/ContainerStyle'
import Header from '../../../Components/Header'
import CustomText from '../../../Components/CustomText'
import CustomButton from '../../../Components/CustomButton'
import { Restaurant_menu_List, manuItem } from '../../../Components/Dummy/Chose_Resturent'
import { Colors } from '../../../Utils/Colors'
import { styles } from './styles'
import BottomSheet from 'react-native-simple-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Dimensions_Height, Dimensions_Widht } from '../../../Utils/Dimensions'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Fonts } from '../../../Components/fonts'
import Ingerdients from './Ingerdients'



const Index = () => {
    const panelRef = useRef(null);
    const [selected_Item, setSelected_item] = useState()
    const handleSheet = (item) => {
        setSelected_item(item)
        panelRef.current.togglePanel()
    }
    return (
        <View style={Container.container}>
            <Header />
            <View style={{ marginBottom: 20, marginTop: 30 }}>
                <FlatList
                    data={manuItem}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.menuItemContainer}>
                            <View style={styles.menuItemContent}>
                                <Image source={item?.image} style={styles.menuItemImage} />
                                <CustomText title={item?.title} customStyle={styles.manuItem_name} />
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item?.id?.toString()}
                />
            </View>
            <FlatList
                data={Restaurant_menu_List}
                contentContainerStyle={{}}
                renderItem={({ item }) =>
                    <View style={styles.restaurantItemContainer}>
                        <View style={styles.restaurantItemContent}>
                            <View style={styles.itemTextContainer}>
                                <CustomText customStyle={styles.second_flat_title} title={item?.title} />
                                <CustomText customStyle={styles.second_flat_about} title={"Tomato sauce, Cheese, Pepperoni sausage, Jalapeno pepper, Green Gringo sauce"} />
                            </View>
                            <View>
                                <Image source={item.image} style={styles.itemImage} />
                            </View>
                        </View>
                        <View style={styles.itemDetailsContainer}>
                            <View style={styles.itemLevelContainer}>
                                <Image source={item.image1} style={styles.itemLevelImage} />
                                <CustomText title={item.level} customStyle={[styles.second_flat_status, { color: item?.level === "spicy" ? Colors.brown : Colors.green, }]} />
                            </View>
                            <CustomButton onPress={() => handleSheet(item)} cart title={"36.90 $"} containerStyle={styles.itemPriceContainer} />
                        </View>
                    </View>
                }
                keyExtractor={item => item?.id?.toString()}
            />
            <BottomSheet sliderMaxHeight={Dimensions_Height / 1.5} sliderMinHeight={0} ref={ref => panelRef.current = ref}>
                <ScrollView>
                    <Fontisto name="angle-down" style={{ fontSize: 18, color: Colors.white }} />
                    <Image source={selected_Item?.image} style={{ height: 170, width: 170, alignSelf: 'center' }} />


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <CustomText customStyle={{ fontSize: 20, fontFamily: Fonts.SemiBold, color: Colors.black }} title={'Hot Tony Pepperoni'} />
                        <TouchableOpacity style={{ backgroundColor: Colors.light_pink, padding: 10, borderRadius: 20 }}>
                            <AntDesign name='sharealt' style={{ color: Colors.Pink, fontSize: 20, }} />
                        </TouchableOpacity>
                    </View>
                    <CustomText customStyle={{ fontSize: 16, fontFamily: Fonts.SemiBold, color: Colors.yellow }} title={"3.90 $"} />
                    <CustomText customStyle={{ fontSize: 13, fontFamily: Fonts.regular, color: Colors.Ligt_black, width: Dimensions_Widht / 1.3, paddingVertical: 5, }} title={"Sos pomidorowy, Ser, Kiełbasa pepperoni, Papryka jalapeno, Sos Green Gringo."} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={selected_Item?.image1} style={styles.itemLevelImage} />
                        <CustomText title={selected_Item?.level} customStyle={[styles.second_flat_status,
                        { color: selected_Item?.level === "spicy" ? Colors.brown : Colors.green, }
                        ]} />
                    </View>

                    <View style={{ backgroundColor: Colors.light_pink, marginVertical: 20, borderRadius: 15, padding: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <CustomText customStyle={{ fontSize: 14, fontFamily: Fonts.SemiBold, color: Colors.black }} title={"Choose a cake"} />
                                <CustomText customStyle={{ fontSize: 12, fontFamily: Fonts.regular, color: Colors.Ligt_black }} title={"Select 1"} />
                            </View>
                            <View style={{ backgroundColor: Colors.gray, borderRadius: 10, padding: 5, height: 38, paddingTop: 6, paddingHorizontal: 10 }}>
                                <CustomText customStyle={{ fontSize: 14, color: Colors.white, fontFamily: Fonts.regular }} title={"Required"} />
                            </View>

                        </View>

                        <Ingerdients title={'Homemade'} status={"Free"} />
                        <Ingerdients title={'New Yark'} status={"Free"} />


                    </View>
                </ScrollView>
            </BottomSheet>
        </View >
    )
}

export default Index;
