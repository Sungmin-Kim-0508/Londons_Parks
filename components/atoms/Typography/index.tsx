import React from "react";
import * as Sc from "./style";

interface TypographyProps {
  Title: 'H1';
  Color: 'black';
  isBold?: boolean;
  isTimesNewRoman?: boolean;
}

const Typography: React.FC<TypographyProps> = ({children, Title, Color, isBold, isTimesNewRoman}) => {
 return (
   <Sc.TypographyStyle Title={Title} Color={Color} isBold={isBold} isTimesNewRoman={isTimesNewRoman}>
      {children}
   </Sc.TypographyStyle>
 );
};

export default Typography;