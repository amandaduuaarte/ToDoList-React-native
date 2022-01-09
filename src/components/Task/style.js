import styled from "styled-components/native";

export const Container = styled.View`
  height:359px;
  width:92%;
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
  border-top-left-radius:20px;
  border-top-right-radius:20px;
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
  background:#21212B;
`;

export const TaskText =  styled.Text`
  color:#ffF;
  padding:0 8.87px;
  font-size:16px;
  line-height:26px;
`;

export const Footer = styled.View`
  display: flex;
  height:33px;
  width:100%;
  background: #272733;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
`;

export const TextFooter = styled.Text`
  text-align:center;
  color:#F5F5F6;
  padding: 7px 0;
`;