import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

// Custom Button Component
const CustomButton: React.FC<{ title: string; onPress?: () => void }> = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        SkipButtonComponent={({ onPress }) => <CustomButton title="Skip" onPress={onPress} />}
        NextButtonComponent={({ onPress }) => <CustomButton title="Next" onPress={onPress} />}
        DoneButtonComponent={({ onPress }) => <CustomButton title="Done" onPress={onPress} />}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/images/burger.png')} style={styles.image} />,
            title: 'Welcome to MyApp',
            subtitle: 'An amazing app to help you achieve your goals!',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/images/sandwitch.png')} style={styles.image} />,
            title: 'Track Your Progress',
            subtitle: 'Keep an eye on your performance and improve every day!',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../assets/images/pizza.png')} style={styles.image} />,
            title: 'Stay Motivated',
            subtitle: 'Join a community of like-minded people and stay motivated!',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});

export default OnboardingScreen;
