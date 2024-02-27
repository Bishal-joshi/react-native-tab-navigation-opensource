import React,{useRef,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';

const colors={
  "primaryblue":"#233A5D",
  "darkblue":"#0075FF",
  "lightblue":"#3194CB",
  "lightestblue":"#AAD1FF"
  
}
const CustomTabNavigator=({buttons})=>{
  
  
    const animatedX = new Animated.Value(0);
    const animatedWidth = new Animated.Value(100);

    var referenceButtons=buttons.map(_=>useRef())
    var buttonsX=[]
    var buttonsWidth=[]

    useEffect(()=>{
        referenceButtons.map(async (data,index)=>{
          data.current.measure(((fx, fy, width, height, px, py)=>{
            buttonsX.push(px)
            buttonsWidth.push(width)

            if(index==0){
                Animated.timing(animatedWidth, {
                    toValue:width,
                    duration: 300, // Adjust the duration as needed
                    useNativeDriver: false,
                  }).start();
            }
           })) 
        })
    },[])

    function handleButton(index){
    

        if(referenceButtons[index].current){
            referenceButtons[index].current.measure((fx, fy, width, height, px, py) => {
              
                const toX = px-buttonsX[0]
                const toWidth=width
                
                buttons[index].onPress()

                Animated.timing(animatedX, {
                  toValue:toX,
                  duration:300,
                  friction: 100,
                  useNativeDriver: false,
                }).start();

                
                Animated.timing(animatedWidth, {
                    toValue:toWidth,
                    duration: 300, // Adjust the duration as needed
                    useNativeDriver: false,
                  }).start();
              });
        }
    }
  
    return(
           
<View style={{flexDirection:'row',backgroundColor:colors.primaryblue,borderRadius:20,alignSelf:'center',margin:10}}>
   
   <Animated.View style={{
    backgroundColor:colors.darkblue,
    height:40,
    borderRadius:20,
    width:animatedWidth,
    position:'absolute',
    transform:[{translateX:animatedX}]
   }}>

   </Animated.View>
   
   {
    buttons.map((data,index)=>{
        return(
        <TouchableOpacity key={index.toString()} onPress={()=>{handleButton(index)}} ref={referenceButtons[index]} style={{padding:10}}>
            <Text style={{color:'white'}}>{data.name}</Text>
        </TouchableOpacity>        
        )
    })
   }

    
</View>
      )
}
export default CustomTabNavigator;



