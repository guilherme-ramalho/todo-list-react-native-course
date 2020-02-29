import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #e9ecf2;
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

export const Item = styled.TouchableOpacity`
  flex: 1;
  min-height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #fff333;
  margin: 2px 0px;
  border: 1px solid black;
`;

export const CustomText = styled.Text`
  color: white;
  font-size: 18px;
`;

export const List = styled.FlatList`
  flex: 1;
  height: 100%;
`;
