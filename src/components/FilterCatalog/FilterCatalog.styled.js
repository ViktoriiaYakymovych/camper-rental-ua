import styled from "styled-components";

export const Form = styled.form`
  max-width: 360px;
`;

export const LocationLable = styled.label`
  position: relative;
  display: flex;
  gap: 8px;
  flex-direction: column;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  color: ${(props) => props.theme.colors.primary60};

  > input {
    padding: 18px 18px 18px 44px;
    border: none;
    border-radius: 10px;

    font-weight: 400;
    line-height: 1.25;

    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.inputBgPlaceholder};

    &::placeholder {
      color: ${(props) => props.theme.colors.primary60};
    }

    /* &:focus,
    &:hover {
      outline: none;
      border: 1px solid ${(props) => props.theme.colors.accent};
    } */
  }

  & > div {
    position: absolute;
    bottom: 14px;
    left: 18px;
  }
`;

export const FilterText = styled.p`
  margin-top: 32px;
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  color: ${(props) => props.theme.colors.text};
`;

export const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 32px;
`;

export const FilterTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.33;
  color: ${(props) => props.theme.colors.primary};
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 10px;
`;

export const FilterLabel = styled.label`
  position: relative;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 17px 12px;
  height: 95px;
  width: 113px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary20};
  border-radius: 10px;

  cursor: pointer;

  & > input:checked + & {
    border: 1px solid ${(props) => props.theme.colors.accent};
  }
`;

export const FilterInput = styled.input`
  position: absolute;
  visibility: hidden;
`;

export const FilterSecondContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  :nth-child(1) {
    width: 92px;
  }

  :nth-child(2) {
    width: 145px;
  }

  :nth-child(3) {
    width: 103px;
  }
`;

export const SubmitBtn = styled.button`
  width: 173px;
  padding: 16px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  color: #ffffff;
  border-radius: 200px;
  background-color: ${(props) => props.theme.colors.accent};

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.btnHover};
  }
`;