import React from 'react';
import { Text, View, ViewStyle } from 'react-native';

import styles from './styles';

type Props = {
  title: string;
  children: JSX.Element;
  style?: ViewStyle;
};

const InfoWrapper: React.FC<Props> = ({ title, children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

export default InfoWrapper;
