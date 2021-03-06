import React from "react";
import * as Sc from "./style";

interface IProps {
  styleType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  isItalic?: boolean;
  isBold?: boolean;
  isGeorgiaFont?: boolean;
  textAlign?: "left" | "right" | "center" | "justify" | "inherit";
  color?: "primary" | "secondary" | "white" | "gray" | "success" | "danger";
  onChange?: () => void;
}

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