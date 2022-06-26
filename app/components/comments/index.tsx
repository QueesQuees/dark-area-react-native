import React from 'react';

import {Icon, Layout, Text} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './index.styles';
import {faHeart, faHeartCrack} from '@fortawesome/free-solid-svg-icons';

const Comments = (_props: any) => {
  const numberComments = 10;
  return (
    <>
      {/* Contain footer (button) */}
      <Layout style={styles.bottomContain}>
        {/* left footer */}
        <Layout style={styles.leftBottom}>
          <TouchableOpacity>
            <FontAwesomeIcon size={22} icon={faHeart} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.pdl10}>
            <FontAwesomeIcon size={22} icon={faHeartCrack} />
          </TouchableOpacity>
        </Layout>

        {/* center comments */}
        <Layout style={styles.comments}>
          <Text>Comments</Text>
          <Text style={styles.pdl10}>{numberComments}</Text>
        </Layout>

        {/* right footer, bottom */}
        <Layout>
          <TouchableOpacity style={styles.buttonSave}>
            <Icon name="star-outline" fill="#8F9BB3" style={styles.iconStar} />
            <Text style={styles.pdl10}>Save</Text>
          </TouchableOpacity>
        </Layout>
      </Layout>
    </>
  );
};

export default Comments;
