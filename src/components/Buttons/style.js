import styled from "styled-components/native"

export const Container = styled.View`
  display:flex;
  padding: 40px 16px 27px 16px;
`;

export const Texts = styled.Text`
 color: #F5F5F6;
 font-size:40px;
 margin-bottom:21px;
`;

export const Main = styled.View`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;

export const ToDoButton = styled.TouchableOpacity`
  background:#414052;
  border-radius:20px;
  height: 48px;
  width: 163px;
  padding-top:14px;
  padding-bottom:14px;
  align-items: center;
`;

export const ToDoText = styled.Text`
  color: #F5F5F6;
`;