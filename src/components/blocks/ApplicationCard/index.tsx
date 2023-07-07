import React, { memo, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { Buttons, Icons, Wrappers } from 'components';
import { Application } from 'types/application';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Fonts, Screens } from 'consts';
import Elements from 'components/elements';

const ApplicationCard: React.FC<Application> = application => {
  const naigation = useNavigation();
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
    contentHeight.value = withTiming(400, {
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
          <Elements.StatusBadge status={application.status_1c} />
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
        <View style={styles.infoWrapper}>
          <Wrappers.InfoWrapper title="ЗАКАЗЧИК">
            <View style={styles.companyContainer}>
              <Text style={styles.company}>
                {application.company.short_name}
              </Text>
              <Icons.CheckMarkIcon />
              <Icons.InfoIcon />
            </View>
          </Wrappers.InfoWrapper>
          <Wrappers.InfoWrapper title="МАРШРУТ ПЕРЕВОЗКИ">
            <View style={styles.routesWrapper}>
              <View style={styles.routeWrapper}>
                <Icons.StartIcon />
                <Text style={styles.route}>{application.loading_address}</Text>
              </View>
              <View style={styles.routeWrapper}>
                <Icons.DestinationIcon />
                <Text style={styles.route}>
                  {application.unloading_address}
                </Text>
              </View>
              <View style={styles.routeWrapper}></View>
            </View>
          </Wrappers.InfoWrapper>
          <View style={styles.shortsInfoContainer}>
            <Wrappers.InfoWrapper
              title="РАССТОЯНИЕ"
              style={styles.distanceContainer}>
              <Text style={styles.distance}>1 375 км</Text>
            </Wrappers.InfoWrapper>
            <Wrappers.InfoWrapper
              title="ТАРИФ"
              style={styles.distanceContainer}>
              <Text style={styles.distance}>1 375 км</Text>
            </Wrappers.InfoWrapper>
            <Wrappers.InfoWrapper title="ГРУЗ" style={styles.distanceContainer}>
              <Text style={styles.distance}>{application.cargo_type}</Text>
            </Wrappers.InfoWrapper>
            <Wrappers.InfoWrapper
              title="ВСЕГО К ПЕРЕВОЗКЕ"
              style={styles.distanceContainer}>
              <Text style={styles.distance}>1 375 км</Text>
            </Wrappers.InfoWrapper>
          </View>
        </View>
        <View style={styles.buttonsWrapper}>
          <Buttons.BasicButton
            text="Подробнее"
            type="OUTLINE"
            onPress={() => {
              naigation.navigate(Screens.ApplicationDetailScreen, {
                application,
              });
            }}
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
