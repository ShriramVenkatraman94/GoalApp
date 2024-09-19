import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './GoalItem';
import GoalInput  from './GoalInput';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [ courseGoal,setCourseGoal ] = useState([]);
  const [ modelVisible, setModelVisible ] = useState(false);

  function startAddGoalhandler() {
    setModelVisible(true);
  }


  function endAddGoalHandler() {
    console.log('Trigger End Gaol Handler');
    setModelVisible(false);
  }

  function addGoalhandler(enteredText) {
    setCourseGoal(currentCourseGoal =>   [...currentCourseGoal, {text: enteredText, key: Math.random().toString() }]);
    endAddGoalHandler();
  }
  
  function deleteGoalhandler(id) {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.key != id)
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalhandler}/>
      {
         modelVisible && <GoalInput addGoalhandler= {addGoalhandler} visible={modelVisible}  endAddGoalHandler={endAddGoalHandler}/>
      }
      <View style={styles.goalContainer}>
        <FlatList data={courseGoal} alwaysBounceVertical={false} 
        renderItem={(itemData) => {
          return (
            <GoalItem {...itemData} id={itemData.item.key} onDeleteItem={deleteGoalhandler} />
          )
        }}
        keyExtractor={(item,key) => {
          return item.key
        }} />
      </View>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalContainer: {
    flex:5
  }
});
