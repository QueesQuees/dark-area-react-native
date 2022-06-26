import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
const pd15 = 15;

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: pd15,
  },
  strikethrough: {
    // width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: pd15,
  },
  content: {
    paddingHorizontal: pd15,
  },
  topPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pd15,
    paddingBottom: pd15,
  },
  topContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  authorImageUrl: {
    // width: 30,
    // height: 30,
    // borderRadius: 20,
  },
  shortPost: {
    paddingBottom: 0,
  },
  discreptionShort: {
    fontSize: 14,
  },
  buttonToDetailPage: {
    paddingBottom: 5,
  },
  readMore: {
    fontSize: 18,
    color: 'red',
  },
  authorName: {
    paddingHorizontal: 10,
  },
  authorNameText: {
    fontSize: 14,
  },
  namePost: {
    paddingLeft: 20,
  },
  displayNamePost: {
    fontSize: 16,
    fontWeight: '800',
  },
  register: {
    paddingVertical: 8,
    paddingHorizontal: pd15,
    backgroundColor: 'red',
    borderRadius: 10,
    borderColor: 'red',
  },
  textTopIndex: {
    // paddingLeft: 20,
    color: 'red',
    fontWeight: '700',
  },
  imagePost: {
    width: width - pd15 * 2,
    height: 300,
    borderRadius: 5,
  },
  bottomViewPost: {
    paddingTop: 10,
    paddingHorizontal: pd15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonLover: {
    flexDirection: 'row',
  },
  numberCommnet: {
    flexDirection: 'row',
    // padding: 5,
  },
  faMessage: {
    width: 30,
    height: 30,
  },
  numberLovedComments: {
    paddingLeft: 10,
  },
});

export default styles;
