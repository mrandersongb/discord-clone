import React from "react";

import { Container, Role, User, Avatar } from "./styles";

export interface UserRowProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserRowProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => (
  <Container>
    <Role>Disponivel - 1</Role>
    <UserRow nickname="HaiGo Studios" />

    <Role>Offline - 18</Role>
    <UserRow nickname="Diego Hai" isBot />
  </Container>
);
export default UserList;
