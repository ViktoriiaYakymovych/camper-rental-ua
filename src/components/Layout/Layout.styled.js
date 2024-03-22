import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Header = styled.header`
  margin: 0 auto;
  padding: 14px 96px;
  width: 100%;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }

  & > ul {
    display: flex;
    gap: 16px;
  }
`;

export const Link = styled(NavLink)`
  padding: 4px 16px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 12px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border: 1px solid #e44848;
  }
`;
