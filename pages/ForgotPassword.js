import {View, Text, TextInput, ScrollView, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';

export default function ForgotPassword({navigation}){
  return (
  

    <ImageBackground style = {styles.outerContainer} 
    source = {require('./Imagens/campusLogin.jpg')}
    blurRadius={2}>
      <View style = {styles.innerContainer}>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style = {styles.t2}> Digite seu email cadastrado: </Text>
          <TextInput style = {styles.tinput}/>
        </View>


        {/* Botões */}
          <View style = {styles.clicaveis}>
          <TouchableOpacity style = {styles.botao} onPress = {() => navigation.navigate('LoginPage')}>
            <Text style = {styles.t3}> Voltar </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.botao} onPress = {() => navigation.navigate('ConfirmationPassword')}>
            <Text style = {styles.t3}> Confirmar </Text>
          </TouchableOpacity>
        </View>


      </View>    
    </ImageBackground>
      
  )
}

const styles = StyleSheet.create({

   outerContainer:{
   flex: 1,
   justifyContent:'center',
   alignItems:'center',
 },


  innerContainer:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'white',
    width: 350,
    height: 190,
    borderRadius: 25,
  },

  inputContainer: {
    width: '80%',
    marginBottom: 7,

  },

  tinput:{
    height: 40,
    borderColor: 'darkblue',
    borderWidth: 1,
    textAlign: 'center',
    width: '100%',
    color: 'gray',
  },

  clicaveis:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    width: '83%',
  },


  t2:{
    color: 'darkblue',
    textAlign: 'left', 
    marginBottom: 15, 
    fontWeight: 'bold',
  },

  t3:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  botao:{
    marginTop:15,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'darkblue',
    width:110,
    height:40,
    borderRadius: 10,
  },

})
