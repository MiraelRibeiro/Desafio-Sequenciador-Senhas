import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <View>
        <Text style={styles.title}>Bat Logo Component</Text>
        <Image style={styles.image} source={batLogo} />
    </View>
  );
}