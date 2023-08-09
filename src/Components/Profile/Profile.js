import React from 'react';
import { View, Image,TouchableOpacity, StyleSheet } from 'react-native';


const Profile = ({ navigation }) => {
    
  const handleButtonPressProfile = () => {
      navigation.navigate('Perfil');
    }

  return (
    <View style={styles.containerProfile}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPressProfile}>
        <Image source={require('../../Images/Profile.png')} style={styles.profile} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    containerProfile :{
        display:"flex",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingLeft: 300,
        paddingTop: 10, 
      },
      profile : {
        height: 50,
        width: 50
      }
});

export default Profile;
