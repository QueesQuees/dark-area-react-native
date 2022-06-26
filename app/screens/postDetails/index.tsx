import React from 'react';
import {} from 'react-native-gesture-handler';
import {Layout, Text, Icon, Avatar, ModalService, Input} from '@ui-kitten/components';
import styles from './index.styles';
import {Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faHeartCrack} from '@fortawesome/free-solid-svg-icons';

import Comments from '../../components/comments';

const DataPostDetail = {
  idPost: 'dsads32422',
  postDetail: {
    displayName: 'Dam ba cái tuổi trẻ',
    discriptionDetail: [
      {
        discriptionDetail2:
          'Doctor Strange đã du hành qua rất nhiều vũ trụ trong phần phim solo mới nhất của mình, và dành 1 khoảng thời gian lớn để ở lại trong thực tại Earth-838. Thoạt nhìn qua, thực tại này có khá nhiều điểm tương đồng với Earth-616, tức dòng thời gian chính của MCU. Tuy nhiên càng về sau, khán giả cũng như bản thân Strange có thể dần nhận ra những khác biệt vô cùng rõ rệt giữa 2 vũ trụ đó, đặc biệt là khi hội kín Illuminati chính thức xuất hiện trên màn ảnh lớn. Có thể bạn chưa biết, series Inhumans ra mắt vào năm 2017 và đã được xác nhận là 1 phần chính thức của MCU. Tuy nhiên, series này đã bị khai tử chỉ sau 1 mùa phim duy nhất, khiến cho số phận của các Inhumans trở nên phức tạp và mờ mịt hơn trong 1 vũ trụ điện ảnh vốn đang ngày càng mở rộng. May mắn thay, khái niệm đa vũ trụ trong Doctor Strange in the Multiverse of Madness đã giúp Marvel Studios phần nào đó giải quyết ổn thỏa trường hợp của chủng tộc hùng mạnh này và đẩy họ sang 1 thực tại khác - Earth-838.',
        imagePostDetail: require('../../assets/images/imageTemplate.jpg'),
      },
      {
        discriptionDetail2:
          'Dưới đây là những khác biệt quan trọng nhất giữa Earth-838 với dòng thời gian chính của MCU mà chúng ta đã quá quen thuộc trong hơn 1 thập kỷ qua.',
        imagePostDetail: require('../../assets/images/imageTemplate.jpg'),
      },
      {
        discriptionDetail2:
          'Mặc dù Doctor Strange in the Multiverse of Madness không lý giải chi tiết xuất thân của các thành viên thuộc hội Illuminati trong Earth-838, nhưng có thể thấy Black Bolt (và các Inhumans nói chung) đã có khá nhiều điểm khác biệt so với phiên bản trong MCU (xuất hiện trong series phụ Inhumans). Siêu anh hùng này vẫn do Anson Mount thủ vai, nhưng lại có diện mạo sát với nguyên tác truyện tranh hơn rất nhiều.',
        imagePostDetail: require('../../assets/images/imageTemplate.jpg'),
      },
    ],
    likePostDetail: [
      {
        idAccount: 'sadsa4324',
        nameAccount: 'Hanna',
        avatar: require('../../assets/images/imageTemplate.jpg'),
      },
      {idAccount: 'sadsa1324', nameAccount: 'Duo'},
      {idAccount: 'sa5sa4324', nameAccount: 'Mai Vang'},
    ],
    commentsPostDetail: [
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sadsa3e24',
        nameAccount: 'Mai',
        commentsDetail: 'Bai nay hay qua',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sasa3e24',
        nameAccount: 'Ngoc',
        commentsDetail:
          'với sự trẻ trung, xinh đẹp, phong cách thời trang thời thượng và phương pháp giáo dục con khoa học, những nàng hot mom thế hệ mới như',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
    ],
    infomationPostDetail: {
      date: '02/05/2022',
      view: 100,
      like: 45,
    },
  },
  postAuthor: {
    idAuthor: 'qwe3dsfe34',
    nameAuthor: 'Quees',
    imageUrl: require('../../assets/images/imageTemplate.jpg'),
  },
};

const PostDetail = ({route}: {route: any}) => {
  console.log('postDetail');
  React.useEffect(() => {
    if (route.params?.postId) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.postId]);

  const numberComments = DataPostDetail.postDetail.commentsPostDetail.length;

  const discriptionDetail = DataPostDetail.postDetail.discriptionDetail.map((item, index) => {
    return (
      <Layout key={index}>
        <Layout style={styles.imagePost}>
          <Image resizeMode="stretch" style={styles.imagePost} source={item.imagePostDetail} />
        </Layout>
        <Text>{item.discriptionDetail2}</Text>
      </Layout>
    );
  });

  //modal
  let modalID = '';

  const showModal = () => {
    const contentElement = renderModalContentElement();
    modalID = ModalService.show(contentElement, {onBackdropPress: hideModal});
  };

  const hideModal = () => {
    ModalService.hide(modalID);
  };

  //modal commnets
  const renderModalContentElement = () => {
    console.log(141);
    return (
      // <TouchableWithoutFeedback onPress={hideModal}>
      <Layout style={styles.modalContent}>
        <Layout style={styles.viewHidemodal} onTouchEnd={hideModal} />
        <Layout style={styles.contentComments}>
          <Layout style={styles.inputModal}>
            <Comments />
            <Layout style={styles.strikethrough} />
            <Layout>
              <Input />
            </Layout>
          </Layout>
          <ScrollView>
            <Layout style={styles.listComments}>{renderComments}</Layout>
          </ScrollView>
        </Layout>
      </Layout>
    );
  };

  // render on comments
  const renderComments = DataPostDetail.postDetail.commentsPostDetail.map(item => {
    return (
      <>
        <Layout style={styles.oneAccountDetail}>
          <Layout style={styles.avatarContain}>
            <Avatar style={styles.avatarInCommmet} source={item.avatar} />
          </Layout>

          <Layout style={styles.wrapperDetailOneComment}>
            <Text style={styles.nameAccount}>{item.nameAccount}</Text>
            <Text>{item.commentsDetail}</Text>
          </Layout>
        </Layout>
      </>
    );
  });

  return (
    <React.Fragment>
      <Layout style={styles.wrapper}>
        <ScrollView style={styles.contain}>
          <Layout style={styles.headerPostDetail}>
            {/* Button back */}
            <Layout style={styles.leftHeader}>
              {/* <TouchableOpacity>
              <Icon name="arrow-back-outline" fill="#8F9BB3" style={styles.goBack} />
            </TouchableOpacity> */}

              {/* Button see author */}
              <Layout style={styles.centerHeader}>
                <Avatar source={DataPostDetail.postAuthor.imageUrl} />
                <TouchableOpacity>
                  <Text style={styles.nameAuthor}>{DataPostDetail.postAuthor.nameAuthor}</Text>
                </TouchableOpacity>
                <Pressable>
                  <Text style={styles.register}>Register</Text>
                </Pressable>
              </Layout>
            </Layout>

            {/* Button Share */}
            <Layout style={styles.rightHeader}>
              {/* <TouchableOpacity>
              <Icon name="arrow-back-outline" fill="#8F9BB3" style={styles.goBack} />
            </TouchableOpacity> */}
              <TouchableOpacity>
                <Icon name="share-outline" fill="#8F9BB3" style={styles.goBack} />
              </TouchableOpacity>
            </Layout>
          </Layout>

          {/* Content detail Post */}
          <Layout>
            {/* Name News */}
            <Layout>
              <Text style={styles.namePost}>{DataPostDetail.postDetail.displayName}</Text>
            </Layout>

            {/* Infomation detail news */}
            <Layout style={styles.infomationPostDetail}>
              <Icon name="clock-outline" fill="#8F9BB3" style={styles.timeDate} />
              <Text>
                {DataPostDetail.postDetail.infomationPostDetail.date} {'    '}
              </Text>
              <Icon name="eye-outline" fill="#8F9BB3" style={styles.timeDate} />
              <Text>{DataPostDetail.postDetail.infomationPostDetail.like}</Text>
            </Layout>

            <Layout>{discriptionDetail}</Layout>
          </Layout>
        </ScrollView>

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
            <TouchableOpacity onPress={showModal}>
              <Text>Comments</Text>
            </TouchableOpacity>
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
      </Layout>
    </React.Fragment>
  );
};

export default PostDetail;
