import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #e475e8;
  border-radius: 20px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #e475e8;
  font-size: 20px;
  border-radius: 20px;
`;

export const Input = styled.input`
  color: #390132;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 20px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 7px;
  border: 3px solid #e475e8;
  color: #e475e8;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f4d4f8;
  }
`;
