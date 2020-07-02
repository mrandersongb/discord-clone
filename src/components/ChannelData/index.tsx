import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(15).keys()).map((i) => (
          <ChannelMessage
            author="HayGo Studios"
            date="01/07/2020"
            content="Seja bem vindo ao Discord Clone!"
          />
        ))}

        <ChannelMessage
          author="Anderson Gomes"
          date="01/07/2020"
          content={
            <>
              <Mention>@HayStudios</Mention>, Me carregue no grupo do estúdio,
              por favor!
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
};
export default ChannelData;
