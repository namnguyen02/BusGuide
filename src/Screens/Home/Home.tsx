import { i18n, LocalizationKey } from "@/Localization";
import React,{useState,useEffect} from "react";
import { View, Text, StyleSheet ,Modal,Pressable,Button,BackHandler,Alert,Dimensions, Touchable, TurboModuleRegistry, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
// import { User } from "@/Services";
import SearchBox from "@/Components/SearchBox/SearchBox";
import SearchBoxHome from "@/Components/SearchBox/SearchBoxHome";
import SearchBoxHomeMin from "@/Components/SearchBox/SearchBoxHomeMin";

import Header from "@/Components/Header/Header";
import Map from "@/Components/Map/Map";
import History from "@/Components/History/History";
import ModalHistory from "@/Components/ModalHistory/main";
import ModalSuitableCar from "@/Components/ModalSuitableCar/main";
import ModalCarInformation from "@/Components/ModalCarInformation/ModalCarInformation";
import ModalTutor from "@/Components/ModalTutor/Main";
import ModalTutorHeader from "@/Components/ModalTutor/ModalHeaderTutor";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// export interface IHomeProps {
//   data: User | undefined;
//   isLoading: boolean;
// }
const windowHeight=Dimensions.get('window').height;
const windowWidth=Dimensions.get('window').width;

var SearchViewHeight=windowHeight,
MainHeight=windowHeight;
var MapHeight=MainHeight*0.5,HistoryHeight=MainHeight*0.5;


export const Home = ({navigation}) => {
  const Stack=createNativeStackNavigator();
  const [modalHistoryVisible, setModalHistoryVisible] = useState(false);
  const [suitableVisible, setSuitableVisible] = useState(false);
  const [ShowModal,setShowModal]=useState(false);
  const [isMapFull,setIsMapFull]=useState(false);
  const [modalTutorVisible, setModalTutorVisible] = useState(false);
  const [ModalCarInformationVisible, setModalCarInformationVisible] = useState(false);
  const [ModalHeaderTutorVisible, setModalHeaderTutorVisible] = useState(false)


  // const { data, isLoading } = props;


  if(isMapFull){
      SearchViewHeight=windowHeight;

  };


  const Main_map=()=>{
    return (

      <ScrollView style={{height: '100%', backgroundColor: '#fff'}}>
                <View style={[{width:'100%',height: 800}, isMapFull?{height: 2000}:{}]}>

                <Map setIsMapFull={setIsMapFull}></Map>


              {!isMapFull&&<History navigation={navigation} setModalVisible={setModalHistoryVisible} ></History>}

            </View>
          </ScrollView>



    );


  };
  const Main_Suitable=()=>{
    // setSuitableVisible(false);
    return (


          <ModalSuitableCar
          setModalSuitableVisible={setSuitableVisible}
          setModalCarInformationVisible={setModalCarInformationVisible}></ModalSuitableCar>

    );
  };


  return (




      <View style={styles.container}>
      {/* <View style={styles.top}>

        <View style={styles.space}></View>
        <Header></Header>
      </View> */}

      <View style={!isMapFull?styles.searchBoxView1:styles.searchBoxView2}>
        {isMapFull?
        <SearchBoxHomeMin setModalHistoryVisible={setModalHistoryVisible}></SearchBoxHomeMin> :
        <SearchBoxHome setModalHistoryVisible={setModalHistoryVisible}></SearchBoxHome>}



     </View>

      <View style={!isMapFull?styles.main1:styles.main2}>
          {/* <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen
                name="Main_map"
                component={Main_map}
                options={{title:'welcome'}}
              />

              <Stack.Screen name="Main_Suitable" component={Main_Suitable} />
            </Stack.Navigator>
          </NavigationContainer> */}
          {!isMapFull&&!suitableVisible&&<Main_map></Main_map>}
          {isMapFull&&!suitableVisible&&<Main_map></Main_map>}

          {suitableVisible&&<Main_Suitable></Main_Suitable>}
      </View>


 {/* modal tim duong + xem lich su */}
      <Modal animationType="slide"
        transparent={true}
        visible={modalHistoryVisible}
        onRequestClose={()=>setModalHistoryVisible(false)}>
              <ModalHistory setModalVisible={setModalHistoryVisible}
                            setSuitableVisible={setSuitableVisible}
                            setIsMapFull={setIsMapFull}
              ></ModalHistory>

      </Modal>




{/* modal thong tin cua xe */}
      <Modal animationType="slide"
        transparent={true}
        visible={ModalCarInformationVisible}
        onRequestClose={() => {

          setModalCarInformationVisible(false);
        }}>
        <ModalCarInformation setModalTutorVisible={setModalTutorVisible}
                            setModalCarInformationVisible={setModalCarInformationVisible}
                            setIsMapFull={setIsMapFull}
        ></ModalCarInformation>
      </Modal>




{/* modal xem huong dan di chuyen */}
      <Modal animationType="slide"
        transparent={true}
        visible={modalTutorVisible}
        onRequestClose={() => {

          setModalTutorVisible(false);
        }}>
        <ModalTutor setModalTutorVisible={setModalTutorVisible}
        setModalHeaderTutorVisible={setModalHeaderTutorVisible}></ModalTutor>
       </Modal>

{/* modal de keo phan tutot*/}


    <Modal animationType="slide"
        transparent={true}
        visible={ModalHeaderTutorVisible}
        onRequestClose={() => {

          setModalHeaderTutorVisible(false);
          setModalTutorVisible(true);
        }}>
        <ModalTutorHeader setModalTutorVisible={setModalTutorVisible}
        setModalHeaderTutorVisible={setModalHeaderTutorVisible} />
       </Modal>


       {/* {isLoading ? (
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
      )} */}

    </View>
  );
};




const styles = StyleSheet.create({
  space:{
    backgroundColor:"#FFCE48",
    width:'100%',
    // height:'50%',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: 1500

  },

  top:{
    backgroundColor:"#FFCE48",
    width:'100%',
    // height:'10%',
    alignItems: "center",

  }
  ,main1:
  {
    width:"100%",
    // height:'90%',
    backgroundColor:'black'

  },
  main2:
  {
    width:"100%",
    // height:'190%',
    backgroundColor:'black'

  },
  searchBoxView1:{
    width:"100%",
    // height:'28%',
    alignItems:'center'
    ,backgroundColor:"#FFCE48",
  },
  searchBoxView2:{
    width:"100%",
    // height:'14%',
    alignItems:'center'
    ,backgroundColor:"#FFCE48",
  }
});
