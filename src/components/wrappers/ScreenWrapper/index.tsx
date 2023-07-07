import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Layout, Palette } from 'consts';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const ScreenWrapper: React.FC<Props> = ({ children }) => {
  const insets = useSafeAreaInsets();
  const insetStyle: ViewStyle = {
    paddingTop: insets.top,
  };
  return <View style={[styles.container, insetStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: Layout.Width,
    height: Layout.Height,
    backgroundColor: Palette.WHITE,
  },
});

export default ScreenWrapper;
