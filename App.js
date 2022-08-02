import { StyleSheet,Button, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.topGoalContainer}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='My Course Goal' />
        <Button title='Add Goal' />
        </View>

        <View>
          <Text>List of Goals....</Text>
        </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
   topGoalContainer: {
    margin: 20,
    padding: 20,
   },
   inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
   },
   input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding:8
   }
});
