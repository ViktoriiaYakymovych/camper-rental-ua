import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 888px;
`;

export const Li = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;

  border: 1px solid ${(props) => props.theme.colors.primary20};
  border-radius: 20px;
`;

export const Figure = styled.figure`
  width: 290px;
  height: 310px;

  border-radius: 10px;
  overflow: hidden;
`;

export const CatalogContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};

  & > span {
    width: 525px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.text};
  }

  & > button {
    width: 166px;
    padding: 16px 40px;
    font-weight: 500;
    line-height: 1.5;
    color: #ffffff;
    border-radius: 200px;
    background: ${(props) => props.theme.colors.accent};
  }
`;

export const CatalogTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;

  & > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;

    & > button {
      margin: 0 auto;
      width: 24px;
      height: 24px;
      background: transparent;
    }
  }
`;

export const CatalogRatingLocationWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 8px;
  line-height: 1.5;

  :first-child,
  :last-child {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  :first-child > p {
    position: relative;
  }

  :first-child > p::before {
    position: absolute;
    bottom: 0;
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const CatalogDescriptionWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  & > div {
    display: flex;
    gap: 8px;
    padding: 12px 18px;
    align-items: center;
    font-weight: 500;
    line-height: 1.25;
    border-radius: 100px;
    background: ${(props) => props.theme.colors.inputBg};

    & > p::first-letter {
      text-transform: uppercase;
    }
  }
`;
