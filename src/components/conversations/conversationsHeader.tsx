import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { Conversation } from "../../types/conversation";

interface ConversationsHeaderProps {
  conversation: Conversation;
}

const ConversationsHeader: FC<ConversationsHeaderProps> = ({
  conversation,
}) => {
  // Date formatting
  const displayDate = (t) => {
    const date = moment(t);
    const isToday = date.isSame(new Date(), "day");

    return isToday
      ? `today at ${date.format("hh:mm")}`
      : `${date.format("MMM D hh:mm")}`;
  };

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <>{`${conversation?.senderNickname} - ${conversation?.recipientNickname} `}</>
        <StyledLastMessage>
          {`Last message : ${displayDate(conversation?.lastMessageTimestamp)}`}
        </StyledLastMessage>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

const StyledLastMessage = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledHeader = styled.div`
  background: lightgray;
  border-radius: 1.25rem 1.25rem 0 0;
  width: 100%;
  height: 50px;
  margin-bottom: 50px;
  padding: 0px 12px;
`;

export default ConversationsHeader;
