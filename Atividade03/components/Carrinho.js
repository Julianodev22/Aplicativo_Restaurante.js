import { ScrollView, FlatList, TextInput } from 'react-native';
import { Card, Paragraph, Button, List } from 'react-native-paper';
import { useContext, useState } from 'react';
import { DataContext } from '../Context';
import { StyleSheet, View } from 'react-native';
import firebase from '../Firebase';

export default Carrinho = ({ navigation }) => {
  const { pedidos, setPedidos, total, setTotal } = useContext(DataContext);
  const [email, setEmail] = useState('');

  const excluir = (ped, index) => {
    setTotal(total - ped[index].valor);
    ped = ped.filter((item) => item !== ped[index]);
    setPedidos(ped);
  };

  const finalizarPedido = async (ped) => {
    const pedido = {
      pedidos: ped,
      total: total,
      email: email,
    };
    setPedidos(ped);

    const pedidosRef = firebase.database().ref('pedidos');
    await pedidosRef.push(pedido);
    navigation.navigate('Finalizar', { pedido: pedido });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      padding: 5,
    },
  });

  return (
    <ScrollView>
      <Card>
        <Card.Title title="Itens Adicionados" />
        <Card.Content>
          <TextInput
            style={styles.input}
            placeholder="Informe seu Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {pedidos.length ? (
            <FlatList
              data={pedidos}
              renderItem={({ item, index }) => {
                return (
                  <List.Accordion title={item.pedidos}>
                    <List.Item title={'Item: ' + item.nome} />
                    <List.Item title={'Valor: R$ ' + item.valor + ',00'} />
                    <List.Item
                      right={(props) => (
                        <View style={styles.container}>
                          <Button
                            mode="contained"
                            onPress={() => excluir(pedidos, index)}>
                            Excluir Pedido
                          </Button>
                        </View>
                      )}
                    />
                  </List.Accordion>
                );
              }}
            />
          ) : (
            <Paragraph>Não há pedidos!</Paragraph>
          )}
          {total != 0 ? (
            <Paragraph>
              Total do pedido:{' '}
              {total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Paragraph>
          ) : (
            ''
          )}
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => finalizarPedido(pedidos)}>
            Finalizar Pedido
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};
