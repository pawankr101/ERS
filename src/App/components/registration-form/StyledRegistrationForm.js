import styled from "styled-components";

export const StyledRegistrationFormDiv = styled.div`
  
`;
export const StyledFlexDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
`;

export const StyledInputBox = styled.div`
    display: inline-block;
`;
export const StyledFormLabel = styled.label`
  font-family: Montserrat;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.1em;
  letter-spacing: 0.01em;
  text-align: left;
`;
export const StyledTextInput = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    padding: 1em;
    border: none;
    background-color: #F8FBFF;
    caret-color: #7E98BA;
`;

export const StyledTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    padding: 1em;
    border: none;
    background-color: #F8FBFF;
    caret-color: #7E98BA;
`;