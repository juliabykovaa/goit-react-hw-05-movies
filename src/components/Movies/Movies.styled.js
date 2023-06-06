import styled from '@emotion/styled';


export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  padding: 10px;
  margin: 0 auto;
  outline: black solid 1px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 78px;
  height: 38px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;

export const Error = styled.h1`
display: flex;
justify-content: center;
padding: 40px;`


