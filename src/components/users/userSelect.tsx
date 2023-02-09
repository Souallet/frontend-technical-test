import React, { FC, useState, useEffect } from "react";
import { User } from "../../types/user";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setCurrentUser } from "../../redux/slices/users";
import styled from "styled-components";

const UserSelect: FC = () => {
  const dispatch = useAppDispatch();
  // Get curent user in store
  const user: User = useAppSelector((state) => state.users.current);
  // Local users list
  const [users, setUsers] = useState<User[]>([]);

  // Fetch user list
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/users`)
      .then((res) => res.json())
      .then((data) => {
        // set users
        setUsers(data);
      });
  }, []);

  const handleChange = (e) => {
    const newUser = users.find((u) => e.target.value == u.id);
    dispatch(setCurrentUser(newUser));
  };

  return (
    <StyledSelectContainer>
      <StyledSelect
        name="user"
        id="user"
        value={user?.id}
        onChange={handleChange}
      >
        {users?.map((u) => (
          <option key={u.id} value={u.id}>
            {u.nickname}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectContainer>
  );
};

const StyledSelectContainer = styled.div`
  border-radius: 36px;
  display: inline-block;
  overflow: hidden;
  border: 1px solid #eaeaea;
  padding: 0 12px;
  margin: 12px 0;
  &:hover,
  &:focus,
  &:active {
    color: #ec6e24;
    border-color: #ec6e24;
  }
`;

const StyledSelect = styled.select`
  width: 140px;
  height: 40px;
  border: 0px;
  outline: none;
`;

export default UserSelect;
