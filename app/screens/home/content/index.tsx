import React from 'react';
import {Image, Pressable} from 'react-native';

import styles from './index.styles';
import {Layout, Text, Button, Avatar, Icon} from '@ui-kitten/components';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFaceGrinHearts} from '@fortawesome/free-solid-svg-icons';

import {TouchableOpacity} from 'react-native-gesture-handler';

const DataHome = [
  {
    index: 1,
    topIndex: 1,
    displayNamePost: 'Newspaper 1',
    imageUrl: require('../../../assets/images/imageTemplate.jpg'),
    discreption:
      'Mùa xuân có em như chưa bắt đầu. Và cơn gió như khẽ mơn man lay từng nhành hoa rơi. Em đã bước tới như em đã từng',
    date: '10/06/2022',
    numberView: 10,
    authorName: 'Quees',
    imageAuthor: require('../../../assets/images/imageTemplate.jpg'),
    numberLoved: 10,
    numberComments: 25,
    postId: 'asdxc23214',
  },
  {
    index: 2,
    topIndex: 2,
    displayNamePost: 'Newspaper 2',
    imageUrl: require('../../../assets/images/imageTemplate.jpg'),
    discreption:
      'Khúc nhạc hòa cùng nắng chiều dịu dàng để mình gần lại mãi  Nói lời thì thầm những điều thật thà đã giữ trong tim mình   Những chặng đường dài ngỡ mình mệt nhoài Đã một lần gục ngã Tháng tư có em ở đây nhìn tôi mỉm cười',
    date: '10/06/2022',
    numberView: 10,
    authorName: 'Quees',
    numberLoved: 10,
    imageAuthor: require('../../../assets/images/imageTemplate.jpg'),
    numberComments: 25,
    postId: 'asdxc23414',
  },
  {
    index: 3,
    topIndex: 3,
    displayNamePost: 'Newspaper 3',
    imageUrl: require('../../../assets/images/imageTemplate.jpg'),
    discreption: 'Tháng tư là lời nói dối của em',
    date: '10/06/2022',
    numberView: 10,
    authorName: 'Quees',
    imageAuthor: require('../../../assets/images/imageTemplate.jpg'),
    numberLoved: 10,
    numberComments: 25,
    postId: 'asdxs23214',
  },
];

interface Props {
  valueSearch: string;
}
// main function
const Content: React.FC<Props> = ({navigation}: {navigation: any}) => {
  const navigateDetails = () => {
    navigation.navigate('PostDetail');
  };
  console.log('content 64');
  const viewDataHome = DataHome.map((item, index) => (
    <Layout key={index}>
      {/* head of the post */}

      {/* Dashes separate content the post from each other */}
      <Layout style={styles.strikethrough} />

      {/* main content the post */}
      <Layout style={styles.content}>
        <Layout style={styles.topPost}>
          <Layout style={styles.topContent}>
            {/* image and name auther channel  */}
            <Avatar source={item.imageAuthor} style={styles.authorImageUrl} />

            {/* name author chanel */}
            <Layout style={styles.authorName}>
              <Text style={styles.authorNameText}>{item.authorName}</Text>
            </Layout>

            {/* button to subscribe */}
            <Button style={styles.register}>
              <Text>Register</Text>
            </Button>
          </Layout>

          {/* display top index */}
          <Text style={styles.textTopIndex}> TOP: {item.topIndex}</Text>
          {/* button se more more function */}
          <Layout>
            <TouchableOpacity>
              <Icon name="more-horizontal-outline" fill="#8F9BB3" style={styles.faMessage} />
            </TouchableOpacity>
          </Layout>
        </Layout>

        <TouchableOpacity onPress={navigateDetails}>
          {/* Name post */}
          <Layout style={styles.namePost}>
            <Pressable>
              <Text style={styles.displayNamePost}>{item.displayNamePost}</Text>
            </Pressable>
          </Layout>

          {/* Discripttion of the post */}
          {/* short content the post */}
          <Layout style={styles.shortPost}>
            <Pressable>
              <Text numberOfLines={5} style={styles.discreptionShort}>
                {item.discreption}
              </Text>
            </Pressable>
          </Layout>

          {/* Button navigate to the detail the post page  */}
          <Layout style={styles.buttonToDetailPage}>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read more</Text>
            </TouchableOpacity>
          </Layout>

          {/* Image of the post */}
          <Image source={item.imageUrl} style={styles.imagePost} />
        </TouchableOpacity>
      </Layout>

      {/* Layout like, comment */}
      <Layout style={styles.bottomViewPost}>
        <Layout style={styles.buttonLover}>
          <FontAwesomeIcon icon={faFaceGrinHearts} size={25} color="pink" />
          <Layout style={styles.numberLovedComments}>
            <Text>{item.numberLoved}</Text>
          </Layout>
        </Layout>

        {/* Comments */}
        {/* content comments */}
        <Layout>
          <TouchableOpacity style={styles.numberCommnet}>
            <Icon name="message-square-outline" fill="#8F9BB3" style={styles.faMessage} />
            <Layout style={styles.numberLovedComments}>
              <Text>{item.numberComments}</Text>
            </Layout>
          </TouchableOpacity>
        </Layout>
      </Layout>
    </Layout>
  ));
  return <Layout style={styles.wrapper}>{viewDataHome}</Layout>;
};

export default Content;
