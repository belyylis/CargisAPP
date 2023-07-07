import { Fonts, Palette } from 'consts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: Palette.LIGHT_GRAY,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  title: {
    ...Fonts.SubTitle,
  },
});
