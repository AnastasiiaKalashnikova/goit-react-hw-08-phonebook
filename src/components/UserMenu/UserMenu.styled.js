import styled from 'styled-components';

export const UserMenuWrapp = styled.div`
  display: flex;
  gap: 20px;
`;

export const LogoutBtn = styled.button`
  padding: 2px;
  height: 32px;
  font-size: 24px;
  background-color: white;
  border-radius: 8px;
  &:hover,
  &:focus {
    background-color: cadetblue;
  }
`;
