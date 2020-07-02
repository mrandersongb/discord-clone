import React from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

import ChannelMessage from "../ChannelMessage";

const ChannelData: React.FC = () => (
  <Container>
    <Messages>
      <ChannelMessage
        author="HayGo Studios"
        date="01.07.2020"
        content="Seja bem vindo ao Discord Clone!"
      />

      <ChannelMessage
        author="Anderson Gomes"
        date="01.07.2020"
        content={
          <>
            {/* <Mention>"Me carregue no grupo do estúdio, por favor!"</Mention> */}
          </>
        }
        isBot
        asMention
      />
    </Messages>

    <InputWrapper>
      <Input type="text" placeholder="Conversar em #chat-livre" />
      <InputIcon />
    </InputWrapper>
  </Container>
);
export default ChannelData;
