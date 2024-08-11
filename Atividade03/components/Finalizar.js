import { Image, Dimensions, ScrollView } from 'react-native';
import { Card, Button, Paragraph, TextInput } from 'react-native-paper';
import { useState, useContext } from 'react';
import { DataContext } from '../Context';
import firebase from '../Firebase';

const Pedidos = ({ navigation }) => {
  const { pedido, nomePedido, valorPedido } = useContext(DataContext);
  const [email, setEmail] = useState('');

  const gravarBanco = () => {
    const pedido = {
      email: email,
      item: nomePedido,
      valor: valorPedido,
    };

    firebase
      .database()
      .ref('pedidos')
      .push(pedido)
      .then(() => {
        alert('Pedido inserido com sucesso!');
        navigation.navigate('Menu');
      })
      .catch((error) => {
        console.log(error);
        alert('Erro ao inserir o Pedido!');
      });
  };

  return (
    <ScrollView>
      <Card>
        <Card.Title title={nomePedido} />
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ marginBottom: 10 }}
          />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={gravarBanco}>
            Finalizar Pedido
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export default Pedidos;
