import React from 'react';
import { StyleSheet ,Text ,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Pagination from '../components/pagination';

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={{alignItems:'center'}} >
    <Text style={styles.textstyle}>Record Data</Text>
    </View>
    < Pagination/>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textstyle: {
   fontWeight:'900',
  }
});

export default App;
