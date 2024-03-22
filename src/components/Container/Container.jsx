import React from "react";
import { Wrap } from "./Container.styled";

const Container = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Container;
