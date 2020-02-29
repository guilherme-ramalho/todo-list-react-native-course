import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #e9ecf2;
  justify-content: center;
`;

export const Row = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1px;
`;

export const Input = styled.TextInput`
  flex: 3;
  background-color: white;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  background-color: #c92e16;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff333;
  margin: 2px 0px;
  border: 1px solid black;
  height: 50px;
`;

export const CustomText = styled.Text`
  color: white;
  font-size: 18px;
`;

export const List = styled.FlatList`
  flex: 1;
`;

export const NameContainer = styled.View`
  flex: 5;
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;

export const RemoveButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #c92e16;
  justify-content: center;
  align-items: center;
`;
