import styled from 'styled-components/native';

export const Body = styled.View`
  flex: 1;
  background: #8B10AE;
  padding-top: 30;
  flex-direction: columm;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30;
  color: #fff;
`;

export const InputArea = styled.View`
  align-self: stretch;
`;

export const Input = styled.TextInput`
  font-size: 24;
  color: #000;
  border-width: 1;
  border-color: #999;
  background-color: #eee;
  height: 50;
  border-radius: 10;
  margin-inline: 10;
`;

export const Area = styled.View`
  margin-top: 20;
`

export const Text1 = styled.Text`
  font-size: 25;
  color: white;
  padding: 10px;
  background-color: transparent;
  font-weight: bold;
  text-align: center;
  height: 70;
  z-index:2;
`

export const Text2 = styled(Text1)`
  margin-top: -70;
`
