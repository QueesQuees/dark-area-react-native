import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  containerSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  leftView: {
    flex: 1,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  centerView: {
    flex: 8,
  },
  SearchInput: {},
  rightView: {
    flex: 1,
  },
  containerHistory: {
    margin: 5,
  },
  itemHistory: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseHistory: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  leftItemHistoryIcon: {
    width: 20,
    height: 20,
  },
  replaceInput: {
    alignItems: 'center',
  },
});

export default styles;
