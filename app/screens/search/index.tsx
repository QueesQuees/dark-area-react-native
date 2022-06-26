import {Icon, Input, Layout, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Content from '../home/content';

import styles from './index.styles';

const historySearch = {
  displayText: [
    {name: 'Music'},
    {name: 'Game New'},
    {name: 'Top App'},
    {name: 'Music'},
    {name: 'Music'},
    {name: 'ukraine'},
  ],
};

const SearchScreen = ({navigation}: {navigation: any}) => {
  const [valueSearch, setValueSearch] = React.useState('');
  const [showSearchValue, setShowSearchValue] = useState(false);

  //Handle search
  const handleSearch = () => {
    setShowSearchValue(true);
  };

  const historySearchView = historySearch.displayText.map((item, index) => {
    return (
      // render each item in the history
      <Layout key={index} style={styles.itemHistory}>
        <Layout style={styles.leftView} />
        <Layout style={styles.centerView}>
          <TouchableOpacity
            style={styles.chooseHistory}
            onPress={() => {
              setValueSearch(item.name);
              handleSearch();
            }}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        </Layout>
        <Layout style={styles.rightView}>
          <TouchableOpacity style={styles.replaceInput} onPress={() => setValueSearch(item.name)}>
            <Icon name="arrow-upward-outline" fill="#8F9BB3" style={styles.leftItemHistoryIcon} />
          </TouchableOpacity>
        </Layout>
      </Layout>
    );
  });

  return (
    <Layout style={styles.wrapper}>
      {/* Container search input */}
      <Layout style={styles.containerSearch}>
        <Layout style={styles.leftView}>
          <Pressable>
            <Icon name="arrow-ios-back-outline" fill="#8F9BB3" style={styles.backIcon} />
          </Pressable>
        </Layout>

        <Layout style={styles.centerView}>
          <Input
            style={styles.SearchInput}
            value={valueSearch}
            onChangeText={nextValue => setValueSearch(nextValue)}
            onPressIn={() => setShowSearchValue(false)}
            keyboardType={'default'}
            placeholder={'Search on Dark Area'}
          />
        </Layout>

        <Layout style={styles.rightView} />
      </Layout>

      {/* Container history search */}
      <Layout style={styles.containerHistory}>
        <ScrollView>{!showSearchValue && historySearchView}</ScrollView>
      </Layout>

      {/* View value search */}
      {showSearchValue && (
        <ScrollView>
          <Content navigation={navigation} />
        </ScrollView>
      )}
    </Layout>
  );
};
export default SearchScreen;
