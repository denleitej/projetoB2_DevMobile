import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function ConfirmationPassword({ navigation }) {
  return (
    <ImageBackground
      style={styles.outerContainer}
      source={require('./Imagens/campusLogin.jpg')}
      blurRadius={2}
    >
      <View style={styles.innerContainer}>
        <Image style={styles.logo} source={require('./Imagens/logo.png')} />
        <Text style={styles.t1}>
          Um email foi enviado para a recuperação da sua senha.
        </Text>
        <Text style={styles.note}>
          Se você não encontrar, verifique sua pasta de spam.
        </Text>
        <View style={styles.clicaveis}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('LoginPage')}
          >
            <Text style={styles.t3}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 350,
    height: 320,
    borderRadius: 25,
  },
  t1: {
    marginTop: 5,
    color: 'darkblue',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  note: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 12,
  },
  t3: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  botao: {
    marginTop: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkblue',
    width: 110,
    height: 40,
    borderRadius: 10,
  },
});
