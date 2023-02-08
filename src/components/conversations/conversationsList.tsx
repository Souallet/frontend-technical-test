import { FC, useState } from "react";

import type { Conversation } from "../../types/conversation";
import ConversationsItem from "./conversationsItem";
import Link from "next/link";
import styled from "styled-components";

interface ConversationsListProps {
  conversations: Conversation[];
}

const ConversationsList: FC<ConversationsListProps> = ({ conversations }) => {
  return (
    <StyledConversationList>
      {conversations.length === 0
        ? "Aucune conversation"
        : conversations.map((c: Conversation) => (
            <Link key={c.id} href={`/conversations/${c.id}`}>
              <ConversationsItem key={c.id} conversation={c} />
            </Link>
          ))}
    </StyledConversationList>
  );
};

const StyledConversationList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export default ConversationsList;
