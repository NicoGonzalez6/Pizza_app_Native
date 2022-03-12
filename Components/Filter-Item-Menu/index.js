import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import GlobalStyles from '../../assets/styles';

const Item = ({item, index, selectedIndex, setSelectedIndex}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => setSelectedIndex(index)}
      style={{
        backgroundColor:
          selectedIndex == index
            ? GlobalStyles.colors.mainColor
            : GlobalStyles.colors.black,
        height: 34,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        paddingTop: 2,
      }}>
      <Text
        style={{
          color: GlobalStyles.colors.white,
          fontFamily: GlobalStyles.fonts.mainFont,
        }}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;
