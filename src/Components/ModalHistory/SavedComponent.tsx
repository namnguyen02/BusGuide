import { View, Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import * as icon from 'react-native-feather'
const SavedComponent = ({Type,setModalVisible,setSuitableVisible,setIsMapFull}) => {
    let Name,Context
    if(Type==1)
    {
        Name='home';
        Context='Nhà ở'
    }
    if(Type==2)
    {
        Name='school';
        Context='Trường học'
    }
    if(Type==3)
    {
        Name='work';
        Context='Nơi làm việc'
    }
  return (
    
    
        <Pressable style={styles.container} onPress={()=>{setModalVisible(false); //tat history modal
        setSuitableVisible(true);  //hien cac chuyen xe phu hop
        setIsMapFull(false); //tắt map full màn hình
        console.log('nhan');
        }}>
            <View style={{flex:1,alignItems:'center'}}>
            {Name=='home'? <icon.Home width={30} height={30} color={'black'} ></icon.Home>:null}
            {Name=='school'?<icon.BookOpen width={30} height={30} color={'black'}></icon.BookOpen>:null}
            {Name=='work'?<icon.Calendar width={30} height={30} color={'black'}></icon.Calendar>:null}

            </View>
            <View style={{flex:3}}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>{Context}</Text>
            </View>
            
            
        </Pressable>  
    
    
      
  )
}
const styles=StyleSheet.create({
    container:{
        height:50,
        width:150,
        borderRadius:10,
        borderWidth:0.3,
        borderColor:'black',
        flexDirection:'row',
        margin:10,
        justifyContent:'center',
        alignItems:'center'
    },
})
export default SavedComponent