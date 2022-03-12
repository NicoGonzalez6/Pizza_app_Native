import React, {useState} from 'react';
import {FlatList, VirtualizedList} from 'react-native';
import {useSelector} from 'react-redux';
import LoadingModal from '../../Components/LoadingModal';
import {
  HomeMainContainer,
  MenuFilterItems,
  FoodItemsContainer,
  FlatListContainer,
} from './styles';
import FoodTypeFilter from '../../Components/Filter-Item-Menu';
import FoodCard from '../../Components/Food-Card';

const MainHome = ({navigation}) => {
  const {isLoading, categories, products} = useSelector(
    state => state.productReducer,
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const all = {
    idCategory: 4,
    categoryName: 'All',
  };

  const AllCategory = [...categories, all];

  const data =
    AllCategory && AllCategory.filter(e => e.idCategory == selectedIndex + 1);

  const filteredData = data?.map(e => e.categoryName);

  const productFiltered = products?.filter(e => {
    if (e.categoryName == filteredData) {
      return e.categoryName == filteredData || e;
    } else if (e.categoryName !== filteredData && filteredData == 'All') {
      return e;
    }
  });

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

  if (isLoading) {
    return (
      <HomeMainContainer>
        <LoadingModal loadingVisible={isLoading} />
      </HomeMainContainer>
    );
  } else {
    return (
      <HomeMainContainer>
        <MenuFilterItems>
          <FlatList
            horizontal
            contentContainerStyle={{
              justifyContent: 'space-between',
              width: '100%',
            }}
            data={AllCategory}
            keyExtractor={item => item.idCategory}
            renderItem={({item, index}) => {
              return (
                <FoodTypeFilter
                  item={item.categoryName}
                  index={index}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              );
            }}
          />
        </MenuFilterItems>
        <VirtualizedView>
          <FoodItemsContainer>
            <FlatList
              data={productFiltered}
              keyExtractor={item => item.idProduct}
              renderItem={({item, index}) => {
                return (
                  <FoodCard item={item} index={index} navigation={navigation} />
                );
              }}
            />
          </FoodItemsContainer>
        </VirtualizedView>
      </HomeMainContainer>
    );
  }
};

export default MainHome;
