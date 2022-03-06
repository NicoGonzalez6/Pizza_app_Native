import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../store/products/actions';
import LoadingModal from '../../Components/LoadingModal';
import {HomeMainContainer} from './styles';

const MainHome = () => {
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(getCategories());
  }, []);

  const {isLoading, categories} = useSelector(state => state.productReducer);

  if (isLoading) {
    return (
      <HomeMainContainer>
        <LoadingModal loadingVisible={isLoading} />
      </HomeMainContainer>
    );
  }

  return (
    <HomeMainContainer>
      <Text>Home</Text>
    </HomeMainContainer>
  );
};

export default MainHome;
