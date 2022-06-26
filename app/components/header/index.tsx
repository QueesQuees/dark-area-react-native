import React from 'react';
import {Image} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

import styles from './index.styles';

const Header = () => {
  return (
    <Layout style={styles.contain}>
      {/* image logo */}
      <Layout style={styles.logo}>
        <Image source={require('../../assets/icons/logoRed.png')} style={styles.imageLogo} />
      </Layout>

      {/* App name */}
      <Layout>
        <Text style={styles.nameAppText}>Dark Area</Text>
      </Layout>

      {/*Infomation Profile */}
      <Layout style={styles.profile}>
        <FontAwesomeIcon icon={faUser} size={20} />
      </Layout>
    </Layout>
  );
};

export default Header;
