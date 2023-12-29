import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
      },
      rowContainer: {
        flexDirection: "row",
        justifyContent: 'space-between'
      },
      termsContainer: {
        marginTop: 35,
        flexDirection: "row",
      },
      headingTitleStyle:{
        width: 160,
      },
      buttonStyle:{
        marginTop: 40,
      },
      checkboxContainer: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius:3,
        alignItems: "center",
        justifyContent: "center",
      },
      checkboxChecked: {
        color: Colors.white,
      },
      termsText: {
        marginLeft: 8,
        fontSize: 16,
      },
});