// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { Colors } from './src/Utils/Colors';
// import { Fonts } from './src/Components/fonts';


// export default function Dev_testing() {
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState(null);
//     const [items, setItems] = useState([
//         { label: 'Apple', value: 'apple' },
//         { label: 'Banana', value: 'banana' },
//         { label: 'Pear', value: 'pear' },
//     ]);

//     const [selectedLanguage, setSelectedLanguage] = useState();


//     return (
//         <View style={{ flex: 1 }}>
//             <View
//                 style={{
//                     flex: 1,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                 }}>
//                 <DropDownPicker
//                     open={open}
//                     value={value}
//                     items={items}
//                     setOpen={setOpen}
//                     setValue={setValue}
//                     setItems={setItems}
//                     style={{ borderWidth: 0, backgroundColor: 'red', width: 150 }}
//                     labelStyle={{
//                         borderWidth: 0,
//                         backgroundColor: 'yellow',
//                         fontFamily: Fonts.bold
//                     }}
//                     containerStyle={{ width: 150 }}
//                     placeholder={'26 st, warsaw'}

//                     textStyle={{ color: Colors.yellow, fontSize: 16, fontFamily: Fonts.bold }}
//                 />

//             </View>

//             {/* <View style={{
//                 flex: 1,
//                 alignItems: 'center',
//                 justifyContent: 'center'
//             }}>
//                 <Text>Chosen fruit: {value === null ? 'none' : value}</Text>
//             </View> */}
//         </View>
//     );
// }

import React, { useRef } from 'react';
import { View, Text, Button } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Dev_testing = () => {
    const bottomSheetRef = useRef(null);

    const openBottomSheet = () => {
        bottomSheetRef.current?.present();
    };

    const closeBottomSheet = () => {
        bottomSheetRef.current?.dismiss();
    };

    return (
        <BottomSheetModalProvider>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Open Bottom Sheet" onPress={openBottomSheet} />
                <BottomSheetModal
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={[200, 300, 400]} // Define different snap points for the bottom sheet
                >
                    <View style={{ backgroundColor: 'white', padding: 16 }}>
                        <Text>This is the content of the bottom sheet.</Text>
                        <Button title="Close" onPress={closeBottomSheet} />
                    </View>
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    );
};

export default Dev_testing;
