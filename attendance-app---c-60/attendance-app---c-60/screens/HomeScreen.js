import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  showStudents=()=> {
    var class_ref = db.ref('/').on('value', (data) => {
      var all_students = [];
      var class_a = data.val().class_a;
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });
      this.setState({ all_students: all_students });
    });
  }

  present=()=> {
    db.ref('/').update({
      'Class 1A/present': +1
    })
  }

  absence=()=> {
    db.ref('/').update({
       'Class 1A/absent': +1
    })
  }
   

  componentDidMount() {
    this.showStudents()
    this.absence
    this.present
  }
  render() {
    return(
      <View style={(styles.buttonContainers)}>
        <TouchableOpacity
          style ={(styles.buttons)}
          onPress={this.present()}>
          <Text style={(styles.buttonText)}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style ={(styles.buttons)}
          onPress={this.present()}>
          <Text style={(styles.buttonText)}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style ={(styles.buttons)}
          onPress={this.present()}>
          <Text style={(styles.buttonText)}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style ={(styles.buttons)}
          onPress={this.absence()}>
          <Text style={(styles.buttonText)}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style ={(styles.buttons)}
          onPress={this.absence()}>
          <Text style={(styles.buttonText)}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style ={(styles.buttons)}
          onPress={this.absence()}>
          <Text style={(styles.buttonText)}>Absent</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainers: {
    display: 'flex',
    justifyContent: 'flex-end',
    
  },

  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 75,
    height: 25,
  },

  buttonText: {
    textAlign: 'center',
    margin: 5
  }
})

