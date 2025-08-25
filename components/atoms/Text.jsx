import React from "react";

const fontSizeMap = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
};

const fontWeightMap = {
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700,
};

const colorMap = {
  primary: "#0065F8",
  secondary: "#6c757d",
  muted: "#6c757d",
  white: "#ffffff",
  black: "#000000",
};

const Text = ({
  children,
  as: Component = "span",
  size = "base",
  weight = "normal",
  color = "black",
  style,
  ...rest
}) => {
  return (
    <Component
      style={{
        fontSize: fontSizeMap[size],
        fontWeight: fontWeightMap[weight],
        color: colorMap[color] || color,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Text;
