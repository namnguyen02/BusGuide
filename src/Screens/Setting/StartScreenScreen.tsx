import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Switch,
    useWindowDimensions,
    Button
  } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const TicketRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );

const SearchRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const MyPageRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
    mytickets: TicketRoute,
    search: SearchRoute,
    mypage: MyPageRoute,
});

export const StartScreenScreen = ({navigation}) =>  {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'mytickets', title: 'Vé của tôi' },
      { key: 'search', title: 'Tra cứu' },
      { key: 'mypage', title: 'Trang của tôi' },
    ]);

    return (
      <SafeAreaView >
        <TabView
            style = {styles.tabs}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
        <Button
            title="Lưu"
        />
      </SafeAreaView>
    );
    // return (
    //     <View>
    //         <Text style={styles.title}>Màn hình bắt đàu</Text>
    //         <Text style={styles.title}>Chọn màn hình xuất hiện khi mở ứng dụng</Text>
    //     </View>
    // )

}

const styles = StyleSheet.create({
    title: {

    },
    tabs: {
        backgroundColor: '#ccc',
    },

})