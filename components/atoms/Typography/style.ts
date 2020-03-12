import styled from "styled-components";
import { Text } from "react-native"; 

type TypographyStyleProps = {
    fontSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" ;  
}

//css --> ` must 
export const Typography = styled(Text)<TypographyStyleProps>`
    font-size: ${props => {
        if(props.fontSize === "h1") return "60px";
        else if (props.fontSize === "h2") return "50px"; 
    }
}
`;

import styled, { css, ThemedStyledProps } from "styled-components";
import { Text } from "react-native"

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
