import { FlatList, View } from 'react-native'
import React from 'react'
import { Container } from '../../../Utils/ContainerStyle'
import { styles } from './styles'
import { Restaurant_Selection } from '../../../Components/Dummy/Chose_Resturent'
import { HeaderItem, renderItem } from './Render'

const Index = (navigation) => {
    return (
        <View style={Container.container}>
            <FlatList
                data={Restaurant_Selection}
                numColumns={2}
                ListHeaderComponent={HeaderItem}
                renderItem={(item) => renderItem(navigation, item)}
                contentContainerStyle={styles.Content_Container}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

export default Index

