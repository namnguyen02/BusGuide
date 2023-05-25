import { i18n, LocalizationKey } from "@/Localization";
import React,{useState,useEffect} from "react";
import { View, Text, StyleSheet ,Modal,Pressable,Button,BackHandler,Alert} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import SearchBox from "@/Components/SearchBox/SearchBox";
import Header from "@/Components/Header/Header";
import Map from "@/Components/Map/Map";
import History from "@/Components/History/History";
import ModalHistory from "@/Components/ModalHistory/main";
import ModalSuitableCar from "@/Components/ModalSuitableCar/main";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export interface IHomeProps {
  data: User | undefined;
  isLoading: boolean;
}

  

export const Home = (props: IHomeProps) => {
  const Stack=createNativeStackNavigator();
  const [modalHistoryVisible, setModalHistoryVisible] = useState(false);
    const [modalSuitableVisible, setModalSuitableVisible] = useState(false);
    const [ShowModal,setShowModal]=useState(false);
  const { data, isLoading } = props;
  return (
    
    <View style={styles.container}>
      <View style={styles.top}> 
        
        <View style={styles.space}></View>
        <Header></Header>
      </View>    
      <View style={styles.searchBoxView}>
            <SearchBox></SearchBox>
     </View>
      
      <View style={styles.main}>
          <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen
                name="main_map"
                component={Main_map}
                initialParams={{setModalHistoryVisible:{setModalHistoryVisible}}}
                param
                options={{title:'welcome'}}
              />

              <Stack.Screen name="Main_Suitable" component={Main_Suitable} />
            </Stack.Navigator>
          </NavigationContainer>
      
      </View>


      <Modal animationType="slide"
        transparent={true}
        visible={modalHistoryVisible}>
              <ModalHistory setModalVisible={setModalHistoryVisible}
                            setModalSuitableVisible={setModalSuitableVisible}
              ></ModalHistory>
        
      </Modal>

      

       {isLoading ? (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            {i18n.t(LocalizationKey.LOADING)}
          </Heading>
        </HStack>
      ) : (
        <>
          <Text>{i18n.t(LocalizationKey.HOME)}</Text>
          <Heading color="primary.500" fontSize="md">
            {data?.username}
          </Heading>
        </>
      )}
      
    </View>
  );
};

const Main_map=({navigation,setModalHistoryVisible})=>{
  return (
    
        <View style={{height:'100%',width:'100%'}}>
          <Map></Map>
           
          <Button title="bam di" onPress={()=>navigation.navigate('Main_Suitable')}></Button>
        </View>
    
    
    
  );


};
const Main_Suitable=({navigation})=>{
  return (
    // <ModalSuitableCar setModalSuitableVisible={setModalSuitableVisible}
    //         ></ModalSuitableCar>

        <ModalSuitableCar></ModalSuitableCar>
        
  );
};

const styles = StyleSheet.create({
  space:{
    backgroundColor:"#FFCE48",
    width:'100%',
    height:'50%',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    
  },
  
  top:{
    backgroundColor:"#FFCE48",
    width:'100%',
    height:'10%',
    alignItems: "center",
    
  }
  ,main:
  {
    width:"100%",
    height:'90%',
    backgroundColor:'black'

  },
  searchBoxView:{
    width:"100%",
    height:"30%",
    alignItems:'center'
    ,backgroundColor:"#FFCE48",
  }
});
