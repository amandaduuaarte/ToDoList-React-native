import styled from "styled-components/native";

export const Container = styled.View`
  height:359px;
  width:92%;
  background:#21212B;
  margin: 0 16px;
`;

export const Header = styled.View`
  height:42px;
  width:100%;
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  background: #272733;
  padding:8px 16px 8px 16px;
`;


export const TitleTaks = styled.Text`
  color:#fff;
  padding: 5px 0 0 8px;
  margin-right:70px;
`;

export const Body = styled.View`
  display: flex;
  width: 100%;
  height: 270px;
  justify-content: center;
  padding:10px 16px 0 16px;
`;

export const TaskText =  styled.Text`
  color:#ffF;
  padding:0 8.87px;
`;

export const Footer = styled.View`
  height:33px;
  width:100%;
  background: #272733;
`;