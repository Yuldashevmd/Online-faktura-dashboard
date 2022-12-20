import styled from "styled-components";

const ButtonText = styled.button `
  border: none;
  background: transparent;
  color: #2b63c0;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    opacity: 0.7;
  }
  :active {
    opacity: 1;
  }
`;
const LabelField = styled.label `
  margin-bottom: 8px;
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
`;

export { ButtonText, LabelField };