import { FC, useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import Container from "../components/container";
import Main from "../components/shared/main";
import ConversationsList from "../components/conversations/conversationsList";

import { useAppSelector } from "../redux/hooks";
import { User } from "../types/user";
import { Conversation } from "../types/conversation";
import Link from "next/link";

const Conversations: FC = () => {
  const user: User = useAppSelector((state) => state.users.current);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/conversations/${user.id}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setConversations(data);
        setLoading(false);
      });
  }, [user]);

  return (
    <Container>
      <Head>
        <title>Conversations - Frontend Technical test - Leboncoin</title>
        <meta name="description" content="List of all conversations"></meta>
      </Head>

      <Main>
        <StyledLink>
          <Link href="/">Back to Home</Link>
        </StyledLink>
        <StyledTitle>Conversations List</StyledTitle>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ConversationsList conversations={conversations} />
        )}
      </Main>
    </Container>
  );
};

const StyledTitle = styled.h1`
  text-align: center;
  padding-bottom: 3rem;
`;

const StyledLink = styled.div`
  text-align: center;
  padding-bottom: 1rem;
  width: 100%;
`;

export default Conversations;
