import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const data = require('./data.json');

const Pagination = () => {
  const [recordsToShow, setRecordsToShow] = useState(10);

  const renderRecord = ({ item }) => (
    <View style={{ padding: 16 }}>
      <Text>Name:- {item.name}</Text>
      <Text>Email:-{item.email}</Text>
    </View>
  );

  const loadMoreRecords = () => {
    const newRecordsToShow = recordsToShow + 10;
    setRecordsToShow(newRecordsToShow);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data.slice(0, recordsToShow)}
        renderItem={renderRecord}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMoreRecords}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default Pagination;
