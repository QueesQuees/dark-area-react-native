import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contain: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    paddingLeft: 25,
  },
  imageLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nameAppText: {
    fontSize: 20,
    fontWeight: '900',
  },
  profile: {
    paddingRight: 25,
  },
});

export default styles;
