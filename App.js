import React, {Fragment, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal,
  FlatList,
  Alert,
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

const App: () => Node = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id);
    setPaciente(pacienteEditar[0]);
  };

  const pacienteEliminar = id => {
    Alert.alert(
      'Deseas Eliminar?',
      'Un paciente eliminado no se puede recuperar',
      [
        {text:'Cancelar'},
        {text:'Si, Eliminar', onPress:()=>{
          const pacientesActualizados = pacientes.filter(
            pacienteState=>pacienteState.id !== id
          )
          // console.log(pacientesActualizados)
          setPacientes(pacientesActualizados)
        }}
      ]
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.noPacientes}> No hay pacientes</Text>
      ) : (
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            console.log({item});
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                pacienteEditar={pacienteEditar}
                pacienteEliminar={pacienteEliminar}
              />
            );
          }}
        />
      )}

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
