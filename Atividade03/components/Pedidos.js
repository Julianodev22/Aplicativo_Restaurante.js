import { Image, Dimensions, ScrollView } from 'react-native';
import { Card, Button, Paragraph, TextInput } from 'react-native-paper';
import { useState, useContext } from 'react';
import { DataContext } from '../Context';
import firebase from '../Firebase';

const Pedidos = ({ navigation }) => {
  const {
    nomePedido,
    valorPedido,
    imagemPedido,
    pedidos,
    setPedidos,
    total,
    setTotal,
  } = useContext(DataContext);

  const [quantidade, setQuantidade] = useState(1);

  const confirmarPedido = () => {
    let pedido = pedidos;
    for (let i = 0; i < quantidade; i++) {
      pedido.push({
        nome: nomePedido,
        valor: valorPedido,
      });
    }
    setPedidos(pedido);
    setTotal(total + valorPedido * quantidade);
    navigation.navigate('Carrinho');
  };

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <ScrollView>
      <Card>
        <Card.Title title={nomePedido} />
        <Card.Content>
          <Paragraph>R$ {valorPedido},00</Paragraph>
          <Image
            source={imagemPedido}
            style={{
              width: Dimensions.get('window').width,
              height: 100,
              alignSelf: 'center',
            }}
          />
          <Paragraph>Quantidade: {quantidade}</Paragraph>
          <Button mode="outlined" onPress={() => aumentarQuantidade()}>
            Adicionar
          </Button>
          <Button mode="outlined" onPress={() => diminuirQuantidade()}>
            Retirar
          </Button>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => confirmarPedido()}>
            + Carrinho
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export default Pedidos;
