
import {StyleSheet, View, Text, Pressable}  from 'react-native';

export default function GoalItem (props) {
    return (
        <View style={style.goalItem}>
             <Pressable  android_ripple={{ color:'#5e0acc'}}
                style={( { pressed }) => pressed && style.pressedItem}
                onPress={props.onDeleteItem.bind(this,props.id)}>
                <Text style={style.goalText}> {props.item.text}</Text> 
            </Pressable>    
        </View>
    )
}

const style =  StyleSheet.create({
    goalItem :  {
        margin: 8,
        padding: 8,
        borderRadius: 6, 
        backgroundColor: '#5e0acc'
      },
      goalText: {
        color: 'white'
      },
      pressedItem: {
        opacity: 0.5
      }
});