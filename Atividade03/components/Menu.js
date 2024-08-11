import { ScrollView, Image, View, StyleSheet } from 'react-native';
import { Card, Button, Paragraph, Text } from 'react-native-paper';
import { useContext } from 'react';
import { DataContext } from '../Context';
import firebase from '../Firebase';

export default Menu = ({ navigation }) => {
  const { setNomePedido, setValorPedido, setImagemPedido } =
    useContext(DataContext);

  const selecionarItem = (nome, valor, img) => {
    setNomePedido(nome);
    setValorPedido(valor);
    setImagemPedido(require(img));
    navigation.navigate('Pedidos');
  };

  return (
    <ScrollView>
      <Card>
        <Card.Title title="Filé de Frango" subtitle="Com macarrão integral" />
        <Card.Content>
          <View>
            <Image
              source={require('../assets/cardapio_frango.jpg')}
              style={{
                width: 300,
                height: 100,
                alignSelf: 'left',
              }}
            />
            <Text variant="bodyMedium">R$35,00</Text>
          </View>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() =>
              selecionarItem(
                'File de frango',
                35,
                '../assets/cardapio_frango.jpg'
              )
            }>
            + Carrinho
          </Button>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Title title="Moqueca" subtitle="Com arroz negro" />
        <Card.Content>
          <Image
            source={require('../assets/cardapio_moqueca.jpg')}
            style={{
              width: 300,
              height: 100,
              alignSelf: 'left',
            }}
          />
          <Text variant="bodyMedium">R$60,00</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() =>
              selecionarItem('Moqueca', 60, '../assets/cardapio_moqueca.jpg')
            }>
            + Carrinho
          </Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Title title="Ragu" subtitle="Com purê de mandioquinha" />
        <Card.Content>
          <Image
            source={require('../assets/cardapio_ragu.jpg')}
            style={{
              width: 300,
              height: 100,
              alignSelf: 'left',
            }}
          />
          <Text variant="bodyMedium">R$30,00</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() =>
              selecionarItem('Ragu', 30, '../assets/cardapio_ragu.jpg')
            }>
            + Carrinho
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};
