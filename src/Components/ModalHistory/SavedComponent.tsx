import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
const SavedComponent = ({Type}) => {
    let Name,Context
    if(Type==1)
    {
        Name='home';
        Context='Nhà ở'
    }
    if(Type==2)
    {
        Name='home';
        Context='Trường học'
    }
    if(Type==3)
    {
        Name='home';
        Context='Nơi làm việc'
    }
  return (
    
    
        <View style={styles.container}>
            <Icon name={Name} size={40}></Icon> 
            <Text style={{fontSize:15, fontWeight:'bold'}}>{Context}</Text>
        </View>  
    
    
      
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