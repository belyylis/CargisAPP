import { Palette } from 'consts';
import Fonts from 'consts/fonts';
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
  infoWrapper: {
    padding: 16,
  },
  companyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  company: {
    ...Fonts.Usually,
    marginRight: 8,
  },
  routesWrapper: {
    marginTop: 8,
  },
  routeWrapper: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  route: {
    ...Fonts.Adress,
    marginLeft: 8,
  },
  shortsInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  distanceContainer: {
    width: 160,
  },
  distance: {
    ...Fonts.Usually,
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
