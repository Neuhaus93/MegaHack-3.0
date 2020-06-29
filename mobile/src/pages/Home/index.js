import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require('../../assets/logo.png')}
          style={{
            width: 240,
            height: 120,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder='exemplo@wilsonsons.com'
          autoCorrect={false}
          autoCapitalize='none'
          // value={email}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder='*******'
          autoCorrect={false}
          autoCapitalize='none'
          // value={email}
        />

        <Text style={styles.forgotPass}>Esqueceu a senha?</Text>

        <RectButton style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  form: {},

  label: {
    textAlign: 'left',
    fontSize: 16,
    // font: Medium 11px/16px Poppins;
    letterSpacing: 0,
    color: '#3B4F99',
    marginBottom: 12,
  },

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  forgotPass: {
    textAlign: 'right',
    letterSpacing: 0,
    color: '#515C6F',
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
    // fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});

export default Home;
