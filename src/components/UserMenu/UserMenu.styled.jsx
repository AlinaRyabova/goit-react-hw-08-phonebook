import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: #e475e8;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 4px 6px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 3px solid #e475e8;
  color: #e475e8;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
  border-radius: 30px;

  &:hover {
    background-color: #f4d4f8;
  }
`;
