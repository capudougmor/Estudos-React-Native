import styled from 'styled-components/native';

export const Body = styled.View`
  flex: 1;
  background: #8B10AE;
  padding-top: 30;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30;
  color: #fff;
  margin-bottom:20;
`;

export const InputArea = styled.View`
  align-self: stretch;
`;

export const Input = styled.TextInput`
  text-align: center;
  font-size: 24px;
  color: #000;
  border-width: 1px;
  border-color: #999;
  background-color: #eee;
  height: 50px;
  border-radius: 10px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const Area = styled.View`
  margin-top: 40;
`

export const Image = styled.Image`
  width: 300px;
  height: 300px;
  margin-top: -70px;
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
