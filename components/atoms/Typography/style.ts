import styled from "styled-components";
import { Text } from "react-native"; 

interface TypographyStyleProps {
  Title: 'H1';
  Color: 'black';  
  isBold?: boolean;
  isisTimesNewRoman?: boolean;

}

export const TypographyStyle = styled(Text)<TypographyStyleProps>` 
font-size: ${prop => prop.Title};
color: ${prop => prop.Color};
font-weight: ${prop => prop.isBold? 'bold':'normal'};
font-family: ${prop => prop.isTimesNewRoman? 'Times New Roman':''};
`