import { useState, createContext } from 'react';

export const DataContext = createContext();

export default Context = ({ children }) => {
  const [nomePedido, setNomePedido] = useState('');
  const [valorPedido, setValorPedido] = useState('');
  const [imagemPedido, setImagemPedido] = useState('');
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <DataContext.Provider
      value={{
        nomePedido,
        setNomePedido,
        valorPedido,
        setValorPedido,
        imagemPedido,
        setImagemPedido,
        pedidos,
        setPedidos,
        total,
        setTotal,
      }}>
      {children}
    </DataContext.Provider>
  );
};
