import styled from "styled-components";

export const Wrap = styled.div`
  padding: 10px 8px;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 375px) {
    width: 375px;
    padding: 20px 16px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 40px 20px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 100px 96px;
  }
`;
