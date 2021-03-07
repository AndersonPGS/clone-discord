import React from 'react';

import ServerButton from '../ServerButton'

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton mentions={562} />
      <ServerButton hasNotification/>
      <ServerButton mentions={777}/>
      <ServerButton mentions={15}/>
      <ServerButton hasNotification mentions={22} />
      <ServerButton mentions={561} />
      <ServerButton />
      <ServerButton hasNotification/>
      <ServerButton hasNotification mentions={69}/>
      <ServerButton hasNotification/>
      <ServerButton />
      <ServerButton mentions={1337}/>
    </Container>
  );
};

export default ServerList;
