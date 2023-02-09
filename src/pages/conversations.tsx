import { FC, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import Container from "../components/container";
import Main from "../components/shared/main";
import ConversationsList from "../components/conversations/conversationsList";

import { useAppSelector } from "../redux/hooks";
import { User } from "../types/user";
import { Conversation } from "../types/conversation";
import Card from "../components/card";

const Conversations: FC = () => {
  // Get curent user in store
  const user: User = useAppSelector((state) => state.users.current);
  // User conversations
  const [conversations, setConversations] = useState<Conversation[]>([]);
  // Loading Status
  const [isLoading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    // Change loading status
    setLoading(true);

    // Fetch user conversations
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
        <StyledLinkContainer>
          <Card>
            <Link href="/">Back to Home</Link>
          </Card>
        </StyledLinkContainer>
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

const StyledLinkContainer = styled.div`
  text-align: center;
  padding-bottom: 1rem;
  margin: auto;
  max-width: 350px;
`;

export default Conversations;
