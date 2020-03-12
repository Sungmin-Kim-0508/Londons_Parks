import styled from "styled-components";
import { TextInput } from "react-native"

// type InputProps = {};

export const Input = styled(TextInput)`
  width: 100%;
  height: 50px;
  border: 2px solid #999999;
  border-radius: 5px;
  :focus {
    border: 2px solid #dcd221;
  }
  &::placeholder {
    font-family: Georgia;
    font-style: normal;
    padding-left: 5px;
  }
`;

export const Typography = styled.div` 
font-weight:bold; 
`