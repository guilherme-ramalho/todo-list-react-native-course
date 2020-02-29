import React, {useState} from 'react';
import {Text} from 'react-native';

import {Container, Row, Input, Button, Item, CustomText, List} from './styles';

export default function App() {
  const [texto, setTexto] = useState();
  const [lista, setLista] = useState([]);

  const pressionouBotao = () => {
    if (texto) {
      setLista([...lista, texto]);
      setTexto('');
    } else {
      alert('Nome vazio!');
    }
  };

  return (
    <Container>
      <Row>
        <Input value={texto} onChangeText={textParam => setTexto(textParam)} />
        <Button onPress={pressionouBotao}>
          <CustomText>Ok</CustomText>
        </Button>
      </Row>
      <List
        data={lista}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Item>
            <Text>{item}</Text>
          </Item>
        )}
      />
    </Container>
  );
}
