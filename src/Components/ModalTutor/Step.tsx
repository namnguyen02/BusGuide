import { View, Text ,StyleSheet,Dimensions,Pressable} from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather' 
const Step = ({
  time='',icon_name,location,action
            }) => {
  return (
    <Pressable style={styles.cotainer} 
                                                     
                                                    >
      <View style={styles.icon}>
            <View style={{height:windowWidth*0.04, 
                width:windowWidth*0.04 ,
                backgroundColor:'black',
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center'
                }}>
                 {(icon_name=='Map-pin')? <Icon.MapPin color={'white'}/>:null}   
                 {(icon_name=='Truck')? <Icon.Truck color={'white'}/>:null} 
                 {(icon_name=='User')? <Icon.User color={'white'}/>:null} 
                 {(icon_name=='Target')? <Icon.Target color={'white'}/>:null}                             
            </View>
            
      </View>
      {(icon_name=='Truck')?
      <View style={styles.busStop}>
        
        
        <Text >{action}</Text>
        <Text style={{fontSize:18 ,fontWeight:'bold'}}>{location}</Text>
    </View>
    
    :

        <View style={styles.busStop}>
                
        
        <Text style={{fontSize:18 ,fontWeight:'bold'}}>{action}</Text>
        <Text >{location}</Text>
        </View>

            }
      <View style={styles.arrow}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>{time}</Text>
      </View>
    </Pressable>
  )
}
const windowWidth=Dimensions.get('window').height;
const styles=StyleSheet.create({
    cotainer:{
        width:'100%',
        height:0.1*windowWidth,
        borderBottomColor:'black',
        borderBottomWidth:0.5,
        
        margin:windowWidth*0.01,
        flexDirection:'row'
    },
    icon:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
    },
    busStop:{
        flex:5,
        
            justifyContent:'center'
    },
    arrow:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
    }
})
export default Step