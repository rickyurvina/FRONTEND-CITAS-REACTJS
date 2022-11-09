//rafce
import React, {useState} from 'react';

import {
  Modal,
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = props => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const {modalVisible} = props;
  const {setModalVisible} = props;

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable style={styles.btnCancelar}
          onLongPress={()=>setModalVisible(!modalVisible)}
          >
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Propietario"
              placeholderTextColor={'#666'}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese correo electrónico"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Telefono</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono"
              placeholderTextColor={'#666'}
              keyboardType="phone-pad"
              value={telefono}
              onChangeText={setTelefono}
              maxLength={12}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>
            <View style={styles.fechaContenedor}>
              <DatePicker date={fecha} locale="es"
              onDateChange={(date)=>setFecha(date)} />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={styles.input}
              placeholder="Sintomas paciente"
              placeholderTextColor={'#666'}
              keyboardType="phone-pad"
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>

         
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCancelarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },
  sintomasInput: {
    height: 100,
  },
  fechaContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    color: '#5827A4',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default Formulario;
