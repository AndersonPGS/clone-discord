import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps{
  nickname: string;
  isBot?: boolean;
  isOffline?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, isOffline}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>

      <strong className={isOffline ? 'offline' : ''}>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () => {

  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Anderson Paiva" />

      <Role>Offline - 32</Role>
      <UserRow nickname="Filho do Paiva" isOffline isBot/>
      <UserRow nickname="Jefesu" isOffline isBot/>
      <UserRow nickname="Namthanael" isOffline/>
      <UserRow nickname="Namdo" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Predo" isOffline/>
      <UserRow nickname="Táliçõn" isOffline/>
      <UserRow nickname="Vito" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
      <UserRow nickname="Paiva" isOffline/>
    </Container>
  );
};

export default UserList;
