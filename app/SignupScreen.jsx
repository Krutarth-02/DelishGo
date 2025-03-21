import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(null);

  return (
    <View style={styles.container}>
      {/* Profile Picture Upload */}
      <TouchableOpacity style={styles.profileContainer}>
        <Image 
          source={profileImage ? { uri: profileImage } : require('../assets/images/logo.png')} 
          style={styles.profileImage} 
        />
        <View style={styles.cameraIcon}>
          <Ionicons name="camera" size={20} color="white" />
        </View>
      </TouchableOpacity>

      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join us to start your journey</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#999" />
        <TextInput placeholder="Full Name" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#999" />
        <TextInput placeholder="Email Address" style={styles.input} keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#999" />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#999" />
        <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry />
      </View>

      {/* Terms & Conditions */}
      <View style={styles.termsContainer}>
        <TouchableOpacity style={styles.checkbox} />
        <Text style={styles.termsText}>
          I agree to the <Text style={styles.termsLink}>Terms & Conditions</Text>
        </Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social Login */}
      <Text style={styles.orText}>Or sign up with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={20} color="black" />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="apple" size={20} color="black" />
          <Text style={styles.socialText}>Apple</Text>
        </TouchableOpacity>
      </View>

      {/* Already have an account? */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#6c5ce7',
    borderRadius: 20,
    padding: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#6c5ce7',
    borderRadius: 5,
    marginRight: 10,
  },
  termsText: {
    fontSize: 14,
  },
  termsLink: {
    color: '#6c5ce7',
    fontWeight: 'bold',
  },
  signUpButton: {
    width: '100%',
    backgroundColor: '#6c5ce7',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  socialText: {
    fontSize: 14,
    marginLeft: 5,
  },
  signInText: {
    marginTop: 20,
    fontSize: 14,
    color: '#666',
  },
  signInLink: {
    color: '#6c5ce7',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
