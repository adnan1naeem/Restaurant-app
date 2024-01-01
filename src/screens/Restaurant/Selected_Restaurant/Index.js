import { FlatList, Image, View, TouchableOpacity, ScrollView, Text, Platform } from 'react-native'
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
import { Dimensions_Height } from '../../../Utils/Dimensions'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ingerdients from './Ingerdients'
import IncrementDecrement from './IncrementDecrement'
import { Fonts } from '../../../Components/fonts'


const Index = ({ navigation }) => {
    const panelRef = useRef(null);
    const [selected_Item, setSelected_item] = useState()
    const [checkoutItems, setCheckout] = useState()

    const handleSheet = (item) => {
        setSelected_item(item)
        panelRef.current.togglePanel()
    }
    const checkOut = (item) => {
        setCheckout(item)
    }

    return (
        <>
            <View style={Container.container}>
                <Header />
                <View style={{ marginBottom: 20, marginTop: Platform.OS === 'ios' ? 30 : 15 }}>
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
                                <CustomButton onPress={() => handleSheet(item)} cart title={"36.90 $"} paddingVertical={13} containerStyle={styles.itemPriceContainer} />
                            </View>
                        </View>
                    }
                    keyExtractor={item => item?.id?.toString()}
                />

                <BottomSheet isOpen={false} sliderMaxHeight={Dimensions_Height / 1.5} sliderMinHeight={0} ref={ref => panelRef.current = ref}>
                    <ScrollView>
                        <Fontisto name="angle-down" style={styles.downIcon} />
                        <Image source={selected_Item?.image} style={styles.sheetImage} />
                        <View style={styles.sheetHeader}>
                            <CustomText customStyle={styles.sheetHeaderText} title={'Hot Tony Pepperoni'} />
                            <TouchableOpacity style={styles.shareIcon}>
                                <AntDesign name='sharealt' style={styles.share} />
                            </TouchableOpacity>
                        </View>
                        <CustomText customStyle={styles.currentPrice} title={"3.90 $"} />
                        <CustomText customStyle={styles.discription} title={"Sos pomidorowy, Ser, Kiełbasa pepperoni, Papryka jalapeno, Sos Green Gringo."} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={selected_Item?.image1} style={styles.itemLevelImage} />
                            <CustomText title={selected_Item?.level} customStyle={[styles.second_flat_status,
                            { color: selected_Item?.level === "spicy" ? Colors.brown : Colors.green, }
                            ]} />
                        </View>

                        <View style={styles.boxContaienr}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20 }}>
                                <View>
                                    <CustomText customStyle={styles.boxtitle} title={"Choose a cake"} />
                                    <CustomText customStyle={styles.boxsubHeading} title={"Select 1"} />
                                </View>
                                <TouchableOpacity style={styles.boxRequierdbtn}>
                                    <CustomText customStyle={styles.requiredText} title={"Required"} />
                                </TouchableOpacity>
                            </View>
                            <Ingerdients title={'Homemade'} status={"Free"} />
                            <Ingerdients title={'New Yark'} status={"Free"} />
                            <Ingerdients title={'Italian'} status={"+2,00"} />
                        </View>

                        <View style={[styles.boxContaienr, { marginTop: 5, padding: 0 }]}>
                            <View style={styles.ingredientsContainer}>
                                <View>
                                    <CustomText customStyle={styles.boxtitle} title={"Select ingredients"} />
                                    <CustomText customStyle={styles.boxsubHeading} title={"Select"} />
                                </View>
                                <TouchableOpacity style={styles.adition}>
                                    <CustomText customStyle={styles.additionalTitle} title={"Additional"} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.additionView}>
                                <IncrementDecrement />
                                <TouchableOpacity onPress={() => checkOut(selected_Item)} style={styles.additionBtn}>
                                    <CustomText customStyle={styles.additionTitle} title={'Add to order \n 38.90 $'} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.additionIngredients}>
                                <Ingerdients title={'Onion'} status={"+2,00"} />
                            </View>
                        </View>

                        <View style={styles.boxContaienr}>
                            <View style={styles.requiredContainer}>
                                <View>
                                    <CustomText customStyle={styles.boxtitle} title={"Choose sauces"} />
                                    <CustomText customStyle={styles.subHeadingChose} title={"Choose"} />
                                </View>
                                <TouchableOpacity style={styles.boxRequierdbtn}>
                                    <CustomText customStyle={styles.requiredText} title={"Required"} />
                                </TouchableOpacity>
                            </View>
                            <Ingerdients title={'Garlic'} status={"+2,00"} />
                            <Ingerdients title={'Tomato'} status={"Free"} />
                            <Ingerdients title={'NYPD Super Duper Sauce'} status={"+2,00"} />
                        </View>

                    </ScrollView>
                </BottomSheet>
            </View >
            {checkoutItems &&
                <View style={{ backgroundColor: Colors.white, justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
                    <View>
                        <CustomText customStyle={{ fontFamily: Fonts.regular, fontSize: 14, color: Colors.Ligt_black, paddingTop: 20, }} title={"Cart Total"} />
                        <CustomText customStyle={{ fontSize: 20 }} title={"36,90 $"} />
                    </View>
                    <CustomButton onPress={() => navigation.navigate('OrderDetails')} title={'View Cart'} paddingVertical={15} containerStyle={{ width: 180, borderRadius: 25 }} />
                </View>
            }

        </>
    )
}

export default Index;
