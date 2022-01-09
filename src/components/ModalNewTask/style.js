import styled from "styled-components/native";

export const Container = styled.View`
  display:flex;
  flex-direction:column;
  height:84%;
  width:99%;
  background: #21212B;
  border-radius:20px;
`;

export const ModalText = styled.Text`
  color:#F5F5F6;
  font-size:26px;
  line-height:31.4px;
  padding: 40px 0 31px 28px;
`;
export const TitleInput = styled.TextInput`   
  height: 34px;
  width: 80%;
  background: #272733;
  border-radius:20px;
  margin-left:28px;
  border-radius:20px;
  color:#777777;
`;

export const ButtonTask = styled.TouchableOpacity`
  height:45px;
  width:50%;
  background:#AC6DDE;
  border-radius:20px;
  align-self:center;
  margin-top:28px;
`;

export const TextButton = styled.Text`
  color:#F5F5F5;
  text-align:center;
  padding: 15px 0 ;
`;

export const CloserView = styled.TouchableOpacity`
  position:absolute;
  right:24px;
  top:24px;
  border:0;
  background:transparent;
`;