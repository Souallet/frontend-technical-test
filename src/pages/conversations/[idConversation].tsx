import { FC, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import Container from "../../components/container";
import Main from "../../components/shared/main";
import ConversationsHeader from "../../components/conversations/conversationsHeader";
import MessagesList from "../../components/messages/messagesList";
import MessagesForm from "../../components/messages/messagesForm";
import Card from "../../components/card";

import { useAppSelector } from "../../redux/hooks";
import { User } from "../../types/user";

const Conversations: FC = () => {
  // Get curent user in store
  const user: User = useAppSelector((state) => state.users.current);
  const router = useRouter();
  const { idConversation } = router.query;
  // Current Conversation
  const [conversation, setConversation] = useState();
  // Conversation messages
  const [messages, setMessages] = useState([]);
  // Loading status
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Fetch user conversations
    fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/conversations/${user.id}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        // Fetch current conversation in fetched list
        const conv = data.find((d) => {
          return d.id == idConversation;
        });

        // Set current conversation
        setConversation(conv);

        // Check if user is in conversation as recipient or sender
        if (user.id !== conv?.senderId && user.id !== conv?.recipientId) {
          return router.push("/conversations");
        }
      });

    // Fetch messages
    fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/messages/${idConversation}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        // Set messages
        setMessages(data);
        setLoading(false);
      });
  }, [router, idConversation, user.id]);

  // Send new message in conversation
  const sendMessage = (message: String) => {
    const body = {
      body: message,
      conversationId: idConversation,
      timestamp: Date.now(),
      authorId: user.id,
    };

    const bodyJSON = JSON.stringify(body);

    // POST new message
    fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/messages/${idConversation}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyJSON,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP status " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        // Add message in current conversation
        setMessages([...messages, body]);
      });
  };

  return (
    <Container>
      <Head>
        <title>Conversations - Frontend Technical test - Leboncoin</title>
        <meta name="description" content="List of all conversations"></meta>
      </Head>

      <Main>
        <StyledLinkContainer>
          <Card>
            <Link href="/conversations">Access to user conversations</Link>
          </Card>
        </StyledLinkContainer>
        <ConversationsHeader conversation={conversation} />
        {isLoading ? <p>Loading...</p> : <MessagesList messages={messages} />}
        <MessagesForm submitHandler={sendMessage} />
      </Main>
    </Container>
  );
};

const StyledLinkContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

export default Conversations;
