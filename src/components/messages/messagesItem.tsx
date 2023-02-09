import React, { FC, useState, useEffect } from "react";
import { Message } from "../../types/message";
import styled from "styled-components";
import sanitizeHtml from "sanitize-html";
import { User } from "../../types/user";
import { useAppSelector } from "../../redux/hooks";

interface MessagesItemProps {
  message: Message;
}

const MessagesItem: FC<MessagesItemProps> = ({ message }) => {
  // Get curent user in store
  const user: User = useAppSelector((state) => state.users.current);
  // Author
  const [author, setAuthor] = useState<User>();
  // Check if current user is message's author
  const userIsAuthor: Boolean = message.authorId === user.id;

  // Fetch author informations
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/users/${message.authorId}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data);
      });
  }, [message.authorId]);

  return (
    <>
      {!userIsAuthor ? author?.nickname : <></>}
      <StyledRow userIsAuthor={userIsAuthor}>
        <StyledMessagesItem userIsAuthor={userIsAuthor}>
          {sanitizeHtml(message.body)}
        </StyledMessagesItem>
      </StyledRow>
    </>
  );
};

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ userIsAuthor }) =>
    userIsAuthor ? "flex-end" : "flex-start"};
`;

const StyledMessagesItem = styled.div`
  color: "black";
  padding: 20px;
  background-color: ${({ userIsAuthor }) =>
    userIsAuthor ? "lightblue" : "lightgray"};
  border-radius: 1.25rem;
  max-width: 60%;
`;

export default MessagesItem;
