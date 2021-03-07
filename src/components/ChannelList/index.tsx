import React from 'react';
import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon/>
      </Category>

      <ChannelButton selected channelName="chat-livre" />
      <ChannelButton channelName="programação" />
      <ChannelButton channelName="games-em-geral" />
      <ChannelButton channelName="cs-go" />
      <ChannelButton channelName="amigos" />
      <ChannelButton channelName="made-in-brazil" />
    </Container>
  );
};

export default ChannelList;
