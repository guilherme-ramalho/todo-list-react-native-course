import React, {useState, useEffect} from 'react';
import {Text, ActivityIndicator} from 'react-native';

import {Container, Item, List} from './styles';

export default function App() {
  const [lista, setLista] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('http://162.241.93.80:3333/tipoinsumo/listar?idCliente=0')
      .then(response => response.json())
      .then(response => {
        if (response.meta.status === 'success') {
          setLista(response.data);
        } else {
          setLista([]);
          alert(response.meta.message);
        }

        setCarregando(false);
      });
  }, []);

  return (
    <Container>
      {carregando ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <List
          data={lista}
          keyExtractor={item => `${item.idTipoInsumo}`}
          renderItem={({item}) => (
            <Item>
              <Text>{item.insumo}</Text>
            </Item>
          )}
        />
      )}
    </Container>
  );
}
