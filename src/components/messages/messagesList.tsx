import React, { FC } from "react";
import type { Message } from "../../types/message";
import styled from "styled-components";
import MessagesItem from "./messagesItem";

interface MessagesListProps {
  messages: Message[];
}

const MessagesList: FC<MessagesListProps> = ({ messages }) => {
  return (
    <StyledConversationList>
      {messages.length === 0
        ? "Aucun message"
        : messages.map((m: Message) => <MessagesItem key={m.id} message={m} />)}
    </StyledConversationList>
  );
};

const StyledConversationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 30px;
`;

export default MessagesList;
