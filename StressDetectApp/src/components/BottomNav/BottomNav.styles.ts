import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: moderateScale(18),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  mainCellContainer: {
    backgroundColor: "#ffff",
    elevation: 10,
    borderRadius: moderateScale(2),
  },
  bottomCellContainer: {
    width: "100%",
    flexDirection: "row",
    elevation: 10,
    alignContent: "flex-start",
    alignSelf: "flex-start",
    margin: moderateScale(8),
  },
  bgImg: {
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "#ffff",
    alignContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    overflow: "hidden",
    borderRadius: scale(4),
    resizeMode: "cover",
  },
  TitleText: {
    fontFamily: "BebasNeuePro-Bold",
    elevation: 10,
    alignContent: "flex-end",
    alignSelf: "baseline",
    fontSize: scale(12),
    marginHorizontal: moderateScale(8),
    marginVertical: moderateScale(4),
    color: "white",
  },
  Icon: {
    elevation: 10,
    alignContent: "flex-end",
    alignSelf: "baseline",
    fontSize: scale(16),
    marginHorizontal: moderateScale(8),
    marginVertical: moderateScale(4),
    color: "white",
  },
});

export default styles;
