import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Layout} from '@ui-kitten/components';

import Header from '../../components/header';
import Content from './content';
import styles from './home.styles';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <Layout style={styles.wrapper}>
      <ScrollView>
        <Header />
        <Content navigation={navigation} />
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;
