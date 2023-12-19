import { FlatList, StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Container } from '../../../Utils/ContainerStyle'
import Header from '../../../Components/Header'
import CustomText from '../../../Components/CustomText'
import CustomButton from '../../../Components/CustomButton'

import { Restaurant_menu_List, manuItem } from '../../../Components/Dummy/Chose_Resturent'
import { Colors } from '../../../Utils/Colors'
import { Fonts } from '../../../Components/fonts'
import { styles } from './styles'

const Index = () => {
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
                                <CustomText customStyle={styles.second_flat_about} title={"Sos pomidorowy, Ser, Kiełbasa pepperoni, Papryka jalapeno, Sos Green Gringo"} />
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
                            <CustomButton cart title={"36.90 $"} containerStyle={styles.itemPriceContainer} />
                        </View>
                    </View>
                }
                keyExtractor={item => item?.id?.toString()}
            />
        </View>
    )
}

export default Index;
