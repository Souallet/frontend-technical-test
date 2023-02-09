import React, { FC } from "react";
import type { Message } from "../../types/message";
import styled from "styled-components";

interface MessagesFormProps {
  submitHandler: Function;
}

const MessagesForm: FC<MessagesFormProps> = ({ submitHandler }) => {
  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    submitHandler(message);
    event.target.message.value = "";
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextarea
        id="message"
        name="message"
        rows="3"
        resize="false"
        required
      />
      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding: 12px 12px;
  border: 1px solid black;
  border-radius: 50px;
`;

const StyledTextarea = styled.input`
  flex-grow: 1;
  resize: none;
  border: none;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export default MessagesForm;
