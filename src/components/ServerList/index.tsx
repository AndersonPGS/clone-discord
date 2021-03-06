import React from 'react';

import ServerButton from '../ServerButton'

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton mentions={562} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={22} />
      <ServerButton mentions={561} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
