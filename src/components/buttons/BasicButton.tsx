import { Fonts, Palette } from 'consts';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type BasicButtonProps = {
  type: 'SOLID' | 'OUTLINE';
  text: string;
  onPress: () => void;
};

const BasicButton: React.FC<BasicButtonProps> = ({ type, text, onPress }) => {
  const containerStyle =
    type === 'SOLID' ? styles.solidContainer : styles.outlineContainer;
  const textStyle = type === 'SOLID' ? styles.solidText : styles.outlineText;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 152,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...Fonts.Button,
  },
  solidContainer: {
    backgroundColor: Palette.MAIN_BLUE,
  },
  solidText: {
    color: Palette.WHITE,
  },
  outlineContainer: {
    backgroundColor: Palette.WHITE,
    borderColor: Palette.MIDDLE_GRAY,
    borderWidth: 1,
  },
  outlineText: {
    color: Palette.MAIN_BLUE,
  },
});

export default BasicButton;
