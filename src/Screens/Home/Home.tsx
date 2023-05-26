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
    const [suitableVisible, setSuitableVisible] = useState(false);
    const [ShowModal,setShowModal]=useState(false);
  const { data, isLoading } = props;

  const Main_map=({navigation})=>{
    if(suitableVisible) { navigation.navigate('Main_Suitable')};
    return (
      
          <View style={{height:'100%',width:'100%'}}>
            <Map></Map>
             <History setModalVisible={setModalHistoryVisible}></History>
            
          </View>
      
      
      
    );
  
  
  };
  const Main_Suitable=({navigation})=>{
    setSuitableVisible(false);
    return (
      
  
          <ModalSuitableCar></ModalSuitableCar>
          
    );
  };


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
                name="Main_map"
                component={Main_map}
                options={{title:'welcome'}}
              />

              <Stack.Screen name="Main_Suitable" component={Main_Suitable} />
            </Stack.Navigator>
          </NavigationContainer>
      
      </View>


      <Modal animationType="slide"
        transparent={true}
        visible={modalHistoryVisible}
        onRequestClose={()=>setModalHistoryVisible(false)}>
              <ModalHistory setModalVisible={setModalHistoryVisible}
                            setSuitableVisible={setSuitableVisible}
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
