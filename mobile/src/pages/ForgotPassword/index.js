import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu a senha</Text>
      <Text style={styles.description}>
        Insira o endereço de email utilizado na criação da conta e nós iremos
        enviar um email com um link para resetar a senha
      </Text>
      <Text style={styles.label}>Endereço de email</Text>
      <TextInput
        style={styles.input}
        placeholder='exemplo@wilsonsons.com'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <RectButton style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  title: {
    fontSize: 32,
    marginTop: 38,
    textAlign: 'center',
    fontFamily: 'Poppins_700Bold',
    color: '#515C6F',
  },

  description: {
    textAlign: 'center',
    marginBottom: 38,
    fontFamily: 'Poppins_400Regular',
  },

  label: {
    textAlign: 'left',
    fontSize: 16,
    letterSpacing: 0,
    fontFamily: 'Poppins_400Regular',
    color: '#3B4F99',
    marginBottom: 12,
  },

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    marginBottom: 8,
  },

  button: {
    backgroundColor: '#3B4F99',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 32,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
});

export default ForgotPassword;
