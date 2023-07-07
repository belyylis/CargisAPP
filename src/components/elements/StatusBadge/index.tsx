import { Palette } from 'consts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Fonts from 'consts/fonts';

enum Statuses {
  ACTIVE = 'active',
  ON_PAUSE = 'on_pause',
  COMPLETED = 'completed',
}

type Props = {
  status: Statuses;
};

const StatusBadge: React.FC<Props> = ({ status }) => {
  switch (status) {
    case Statuses.ACTIVE:
      return (
        <View style={[styles.container, styles.containerActive]}>
          <Text style={[styles.status, styles.statusActive]}>Активная</Text>
        </View>
      );
    case Statuses.ON_PAUSE:
      return (
        <View style={[styles.container, styles.containerOnPause]}>
          <Text style={[styles.status, styles.statusOnPause]}>На паузе</Text>
        </View>
      );
    case Statuses.COMPLETED:
      return (
        <View style={[styles.container, styles.containerCompleted]}>
          <Text style={[styles.status, styles.statusCompleted]}>Завершена</Text>
        </View>
      );
    default:
      return (
        <View style={[styles.container, styles.containerActive]}>
          <Text style={[styles.status, styles.statusActive]}>Активная</Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 15,
  },
  status: {
    ...Fonts.Status,
  },
  containerActive: {
    backgroundColor: Palette.TRANSPARENT_MAIN_BLUE,
  },
  statusActive: {
    color: Palette.MAIN_BLUE,
  },
  containerOnPause: {
    backgroundColor: Palette.TRANSPARENT_HALF_BLACK,
  },
  statusOnPause: {
    color: Palette.HALF_BLACK,
  },
  containerCompleted: {
    backgroundColor: Palette.TRANSPARENT_GREEN,
  },
  statusCompleted: {
    color: Palette.GREEN,
  },
});

export default StatusBadge;
