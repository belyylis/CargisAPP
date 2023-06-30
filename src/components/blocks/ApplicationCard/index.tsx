import React, { memo, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { Buttons, Icons } from 'components';
import { Application } from 'types/application';
import styles from './styles';

const ApplicationCard: React.FC<Application> = application => {
  const [isOpen, setIsOpen] = useState(false);

  // Arrow animation
  const arrowRotation = useSharedValue(0);
  const arrowAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: arrowRotation.value + 'deg' }],
  }));

  // Content animation
  const contentHeight = useSharedValue(0);
  const contentAnimatedStyle = useAnimatedStyle(() => ({
    height: contentHeight.value,
  }));

  const openAnimations = () => {
    arrowRotation.value = withTiming(180, {
      duration: 300,
    });
    contentHeight.value = withTiming(312, {
      duration: 300,
    });
  };

  const closeAnimations = () => {
    arrowRotation.value = withTiming(0, {
      duration: 300,
    });
    contentHeight.value = withTiming(0, {
      duration: 300,
    });
  };

  useEffect(() => {
    isOpen ? openAnimations() : closeAnimations();
  }, [isOpen]);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topInfoWrapper}>
        <View style={styles.numberAndStatusWrapper}>
          <Text style={styles.number}>Заявка №{application.id}</Text>
          <View style={styles.statusWrapper}>
            <Text style={styles.status}>Активная</Text>
          </View>
        </View>
        <View style={styles.subInfoWrapper}>
          <Text style={styles.createDate}>От 10.02.22</Text>
          <View style={styles.timeWrapper}>
            <Icons.ClockIcon />
            <Text style={styles.createDate}>12.02.22 - 24.02.22</Text>
          </View>
          <View style={styles.viewsWrapper}>
            <Icons.EyeIcon />
            <Text style={styles.views}>
              Просмотры: {application.views_count}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.arrowIconWrapper}
          onPress={toggleIsOpen}>
          <Animated.View style={arrowAnimatedStyle}>
            <Icons.ArrowIcon />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.contentWrapper, contentAnimatedStyle]}>
        <View style={styles.buttonsWrapper}>
          <Buttons.BasicButton
            text="Подробнее"
            type="OUTLINE"
            onPress={() => {}}
          />
          <Buttons.BasicButton
            text="Оставить отклик"
            type="SOLID"
            onPress={() => {}}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default memo(ApplicationCard);
