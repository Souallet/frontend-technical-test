import { FC } from "react";

import type { Conversation } from "../../types/conversation";
import type { User } from "../../types/user";
import styled from "styled-components";
import moment from "moment";

import { useAppSelector } from "../../redux/hooks";

interface ConversationsItemProps {
  conversation: Conversation;
}

const ConversationsItem: FC<ConversationsItemProps> = ({ conversation }) => {
  const user: User = useAppSelector((state) => state.users.current);
  const otherUserNickname: String =
    conversation.recipientId === user.id
      ? conversation.senderNickname
      : conversation.recipientNickname;

  return (
    <StyledContainer>
      <StyledPhoto>{otherUserNickname.charAt(0)}</StyledPhoto>
      <StyledDetails>
        <StyledUserData>{otherUserNickname}</StyledUserData>
        <StyledLastMessage>
          {moment(conversation.lastMessageTimestamp).format("MMM D")}
        </StyledLastMessage>
      </StyledDetails>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  border: 1px solid black;
  border-radius: 1.25rem;
  width: 350px;
  max-width: 350px;
  padding: 12px;
`;

const StyledPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 50%;
  color: white;
  text-transform: uppercase;
  font-size: 24px;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledUserData = styled.div`
  font-weight: bold;
`;

const StyledLastMessage = styled.div`
  font-size: 0.75rem;
`;

export default ConversationsItem;
