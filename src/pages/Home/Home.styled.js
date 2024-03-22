import styled from "styled-components";

export const HomeSection = styled.section`
  padding: 4px 8px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(228, 72, 72, 0.3);
`;

export const HomeList = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  &>li {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
