import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  background-color: rgba(52, 46, 50, 0.6);
  border: 3px solid #e475e8;
  margin: 0 auto;
`;

export const Item = styled.li`
  background-color: #f4d4f8;
  border: 3px solid #e475e8;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 3px solid #e475e8;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f4d4f8;
  }
`;
