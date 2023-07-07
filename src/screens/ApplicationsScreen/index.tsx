import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ScrollView } from 'react-native';
import { v4 } from 'uuid';

import { Blocks, Wrappers } from 'components';
import mocks from 'consts/mock';
import styles from './styles';
import Elements from 'components/elements';

const ApplicationsScreen: React.FC = () => {
  const [filter, setFilter] = useState();
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    let keysArray = [];
    for (let i = 0; i < mocks.length; i++) {
      keysArray[i] = v4();
    }
    setKeys(keysArray);
  }, []);

  return (
    <Wrappers.ScreenWrapper>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Заявки на перевозки</Text>
      </View>
      <View style={styles.screenSwitchesWrapper}>
        <View style={styles.screenSwitchWrapper}>
          <Text style={styles.screenSwitch}>Карта</Text>
        </View>
        <View style={styles.screenSwitchWrapperActive}>
          <Text style={styles.screenSwitchActive}>Список</Text>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.tabsWrapper}>
        <Elements.FilterTag title="Все" active />
        <Elements.FilterTag title="Активные" active={false} />
        <Elements.FilterTag title="На паузе" active={false} />
        <Elements.FilterTag title="Завершенные" active={false} />
      </ScrollView>
      {keys && (
        <FlatList
          refreshing
          onRefresh={() => {}}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          maxToRenderPerBatch={1}
          data={mocks}
          initialNumToRender={5}
          renderItem={({ item, index, separators }) => {
            return <Blocks.ApplicationCard key={keys[index]} {...item} />;
          }}
          style={styles.flatlist}
        />
      )}
    </Wrappers.ScreenWrapper>
  );
};

export default ApplicationsScreen;
