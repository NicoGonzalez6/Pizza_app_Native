import React from 'react';
import {TabContainer, Text} from './styles';

const index = ({item, index, setCrust, styles, fontStyle}) => {
  return (
    <TabContainer style={styles} onPress={() => setCrust(item.value)}>
      <Text style={fontStyle}>{item.label}</Text>
    </TabContainer>
  );
};

export default index;
