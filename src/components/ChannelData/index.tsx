import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage 
          author="Anderson Paiva"
          date="20/11/2021"
          content={
            <>
              Bora CS <Mention>@Jefersu</Mention> <Mention>@Namthanael</Mention> <Mention>@Táliçon</Mention>
            </>
          }
        />

        <ChannelMessage 
          author="Jefersu"
          date="20/11/2021"
          content={
            <>
              <Mention>@Anderson Paiva</Mention> Sou viciado em Castelo de Tales🦧🙈
            </>
          }
          hasMention
          isBot
        /> 

        <ChannelMessage 
          author="Namthanael"
          date="20/11/2021"
          content={
            <>
              kkkkkkkkkkkkkkkkkkkkkk
            </>
          }
        /> 

        <ChannelMessage 
          author="Namdo"
          date="20/11/2021"
          content={
            <>
              Python 🐱‍👤
            </>
          }
        /> 

        <ChannelMessage 
          author="Jefersu"
          date="20/11/2021"
          content={
            <>
              IA 🤖🙈
            </>
          }
          isBot
        />

        <ChannelMessage 
          author="Filho do Paiva"
          date="20/11/2021"
          content={
            <>
              Presente <Mention>@Jefersu</Mention> 
            </>
          }
          isBot
        />

        <ChannelMessage 
          author="Táliçõn"
          date="20/11/2021"
          content={
            <>
              Tomei ban
            </>
          }
        />

        <ChannelMessage 
          author="Namthanael"
          date="20/11/2021"
          content={
            <>
              Tô rodando CS liso, 24fps
            </>
          }
        />

        <ChannelMessage 
          author="Predo"
          date="20/11/2021"
          content={
            <>
              Tô com 362 de ping
            </>
          }
        />

      <ChannelMessage 
          author="Vito"
          date="20/11/2021"
          content={
            <>
              Pelo menos o cooler do pc de vcs ta girando. 👍
            </>
          }
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
