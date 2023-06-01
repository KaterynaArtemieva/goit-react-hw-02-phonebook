import styled from 'styled-components';

export const Contact = styled.li`
  background-color: rgb(235, 242, 249);
  border: 1px solid #c1d6e9;
  padding: 8px;
  color: #394550;
  font-size: large;
  font-weight: 500;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Deskr = styled.p`
  font-size: large;
  font-weight: 500;
  color: rgb(124 136 148);
  padding: 12px;
  margin: 0;
`;

export const DelBtn = styled.button`
  margin: 0;
  background: rgb(193, 214, 233);
  border: 1px solid #c1d6e9;
  cursor: pointer;
  color: rgb(124 136 148);
  border-radius: 6px;
  padding: 4px 16px;
  font-size: large;
  font-weight: 500;
  line-height: 0;
  &:hover {
    background-color: rgb(252, 253, 255);
  }
`;
