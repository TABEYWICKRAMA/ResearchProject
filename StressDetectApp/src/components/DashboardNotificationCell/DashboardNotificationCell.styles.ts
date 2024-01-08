import {Platform, StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: moderateScale(18),
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  HeaderContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingTop: moderateScale(32),
    marginTop: moderateScale(16),
    marginBottom: moderateScale(116),
    marginHorizontal: moderateScale(4),
  },
  mainCellContainer: {
    margin: moderateScale(4),
    backgroundColor: '#ffff',
    // shadowOffset: {width: 2, height: 8},
    // shadowOpacity: 0.5,
    // shadowRadius: 6,
    // elevation: 2,
    shadowOffset: {width: 0.1, height: 0.2},
    shadowOpacity: 0.125,
    elevation: 0.1,
    borderRadius: moderateScale(2),
  },
  bottomCellContainer: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    margin: moderateScale(8),
    shadowColor: '#000',
  },
  bgImg: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#ffff',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    overflow: 'hidden',
    borderRadius: scale(4),
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#0E74BE',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: scale(0),
    resizeMode: 'cover',
  },
  decsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    overflow: 'hidden',
    borderRadius: scale(0),
    resizeMode: 'cover',
  },
  TitleText: {
    // fontFamily: 'BebasNeuePro-Bold',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    elevation: 10,
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: scale(18),
    marginHorizontal: moderateScale(8),
    marginVertical: moderateScale(4),
    color: 'white',
  },
  descText: {
    // fontFamily: 'BebasNeuePro-Bold',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    elevation: 10,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    fontSize: scale(16),
    marginHorizontal: moderateScale(8),
    marginVertical: moderateScale(4),
    color: 'black',
  },
  Icon: {
    elevation: 10,
    alignContent: 'flex-end',
    alignSelf: 'baseline',
    fontSize: scale(16),
    marginHorizontal: moderateScale(8),
    marginVertical: moderateScale(4),
    color: 'white',
  },
});

export default styles;
