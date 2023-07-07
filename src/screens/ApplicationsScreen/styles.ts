import { Fonts, Palette } from 'consts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerWrapper: {
    height: 55,
    justifyContent: 'center',
    borderTopColor: Palette.LIGHT_GRAY,
    borderTopWidth: 1,
  },
  header: {
    ...Fonts.Header,
    marginLeft: 24,
  },
  screenSwitchesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopColor: Palette.LIGHT_GRAY,
    borderTopWidth: 1,
    borderBottomColor: Palette.LIGHT_GRAY,
    borderBottomWidth: 1,
    height: 48,
  },
  screenSwitchWrapper: {
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenSwitchWrapperActive: {
    height: '100%',
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Palette.MAIN_BLUE,
    borderBottomWidth: 2,
  },
  screenSwitch: {
    ...Fonts.TextButton,
    color: Palette.HALF_BLACK,
  },
  screenSwitchActive: {
    ...Fonts.TextButton,
    color: Palette.MAIN_BLUE,
  },
  tabsWrapper: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatlist: {
    padding: 16,
    backgroundColor: Palette.LIGHT_GRAY,
  },
});
