import React, {useState} from 'react';
import {Text} from 'react-native';

import {
  Container,
  Row,
  Input,
  Button,
  Item,
  CustomText,
  List,
  RemoveButton,
  NameContainer,
  ButtonContainer,
} from './styles';

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

  const removerItem = item => {
    setLista(lista.filter(arrItem => arrItem !== item));
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
            <NameContainer>
              <Text>{item}</Text>
            </NameContainer>
            <ButtonContainer>
              <RemoveButton onPress={() => removerItem(item)}>
                <Text>Remover</Text>
              </RemoveButton>
            </ButtonContainer>
          </Item>
        )}
      />
    </Container>
  );
}
