import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import { Blocks } from 'components';
import mocks from 'consts/mock';
import styles from './styles';

const ApplicationsScreen: React.FC = () => {
  return (
    <FlatList
      refreshing
      onRefresh={() => {}}
      removeClippedSubviews
      maxToRenderPerBatch={1}
      data={mocks}
      initialNumToRender={5}
      renderItem={({ item, index, separators }) => (
        <Blocks.ApplicationCard key={item.id} {...item} />
      )}
      style={styles.scrollViewContainer}></FlatList>
  );
};

export default ApplicationsScreen;
