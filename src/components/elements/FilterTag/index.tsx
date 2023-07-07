import React from 'react';
import { Palette } from 'consts';
import { View, Text, StyleSheet } from 'react-native';
import * as Fonts from 'consts/fonts';

type Props = {
  title: string;
  active: boolean;
};

const FilterTag: React.FC<Props> = ({ title, active }) => {
  return (
    <View
      style={[
        styles.container,
        active ? styles.containerActive : styles.containerInactive,
      ]}>
      <Text
        style={[
          styles.title,
          active ? styles.titleActive : styles.titleInactive,
        ]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  containerActive: {
    borderColor: Palette.MAIN_BLUE,
  },
  containerInactive: {
    borderColor: Palette.LIGHT_GRAY,
  },
  title: {
    ...Fonts.Status,
    color: Palette.HALF_BLACK,
  },
  titleActive: {
    color: Palette.MAIN_BLUE,
  },
  titleInactive: {
    color: Palette.HALF_BLACK,
  },
});

export default FilterTag;
