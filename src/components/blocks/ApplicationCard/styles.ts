import { Fonts, Palette } from 'consts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: Palette.WHITE,
    shadowColor: Palette.MIDDLE_GRAY,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: 16,
    overflow: 'hidden',
  },
  topInfoWrapper: {
    zIndex: 1000,
    padding: 16,
    height: 80,
    flexDirection: 'column',
    borderBottomColor: Palette.LIGHT_GRAY,
    borderBottomWidth: 1,
    backgroundColor: Palette.WHITE,
  },
  numberAndStatusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  number: {
    ...Fonts.Title,
    marginRight: 8,
  },
  statusWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 15,
    backgroundColor: Palette.MAIN_BLUE + '11',
  },
  status: {
    ...Fonts.Status,
    color: Palette.MAIN_BLUE,
  },

  subInfoWrapper: {
    flexDirection: 'row',
  },
  createDate: {
    ...Fonts.InfoSmall,
    marginRight: 10,
  },
  timeWrapper: {
    flexDirection: 'row',
    width: 120,
    marginRight: 10,
  },
  time: {
    ...Fonts.InfoSmall,
  },
  viewsWrapper: {
    flexDirection: 'row',
  },
  views: {
    ...Fonts.InfoSmall,
    marginLeft: 2,
  },
  contentWrapper: {
    width: '100%',
  },
  buttonsWrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: 72,
    padding: 16,
    borderTopColor: Palette.LIGHT_GRAY,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  arrowIconWrapper: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
