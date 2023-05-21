import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from "axios";

export default class DailyPicScreen extends Component {
    render() {
      getAPOD = () => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=COGdtQeIWk1mbziFVQgpfK3JfP4dBSAlQg8imDGw").then(response => {
          this.setState({apod : response.data})
        }).catch(error => {
          Alert.alert(error.message)
        })
      }
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require("../assets/star_map.png")} style={styles.backgroundImage}/>
                <Text>DailyPic Screen!</Text>
            </View>
            </View>
        )
    }
}