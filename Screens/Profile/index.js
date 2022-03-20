import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../store/session/reducer';
import {getBucketUrlAsset} from '../../utils/services';
import {
  ProfileMainContainer,
  TitleContainer,
  Title,
  ProfileContainer,
  ImageContainer,
  ProfileInfoContainer,
  ProfileImage,
  ProfileName,
  ProfileEmail,
  Logout,
  FlatListContainer,
  FoodHistoryContainer,
} from './styles';

const Profile = () => {
  const {name, lastName, userEmail, userimage} = useSelector(
    state => state.sessionReducer,
  );

  const {userOrders} = useSelector(state => state.productReducer);

  const Dispatch = useDispatch();

  const logoutHandler = () => {
    Dispatch(logout());
  };

  // Warning fix
  function VirtualizedView(props) {
    return (
      <FlatListContainer
        data={[]}
        ListEmptyComponent={null}
        keyExtractor={() => 'dummy'}
        renderItem={null}
        ListHeaderComponent={() => (
          <React.Fragment>{props.children}</React.Fragment>
        )}
      />
    );
  }

  return (
    <ProfileMainContainer>
      <TitleContainer>
        <Title>Profile</Title>
      </TitleContainer>
      <ProfileContainer>
        <ImageContainer>
          <ProfileImage
            reziseMode="contain"
            source={{uri: getBucketUrlAsset(userimage)}}></ProfileImage>
        </ImageContainer>
        <ProfileInfoContainer>
          <ProfileName>{`${name} ${lastName}`}</ProfileName>
          <ProfileEmail>{userEmail}</ProfileEmail>
          <Pressable onPress={logoutHandler}>
            <Logout>Logout</Logout>
          </Pressable>
        </ProfileInfoContainer>
      </ProfileContainer>
      <VirtualizedView>
        <FoodHistoryContainer></FoodHistoryContainer>
      </VirtualizedView>
    </ProfileMainContainer>
  );
};

export default Profile;
