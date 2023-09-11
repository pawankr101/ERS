import { StyledFlexDiv, StyledFormLabel, StyledInputBox, StyledRegistrationFormDiv, StyledTextArea, StyledTextInput } from "./StyledRegistrationForm";

const FormTextInputBox = ({label, placeholder }) => {
  return (
    <StyledInputBox>
      <StyledFormLabel>{label}</StyledFormLabel>
      <StyledTextInput
        type="text"
        placeholder={placeholder}
      ></StyledTextInput>
    </StyledInputBox>
  );
};
const FormDateInputBox = ({label, placeholder }) => {
  return (
    <StyledInputBox>
      <StyledFormLabel>{label}</StyledFormLabel>
      <StyledTextInput
        type="date"
        placeholder={placeholder}
      ></StyledTextInput>
    </StyledInputBox>
  );
};
const FormTextAreaBox = ({label, placeholder }) => {
  return (
    <StyledInputBox>
      <StyledFormLabel>{label}</StyledFormLabel>
      <StyledTextArea
        placeholder={placeholder}
      ></StyledTextArea>
    </StyledInputBox>
  );
};


const RegistrationForm = ({mode}) => {
console.log(mode)
  return (
    <StyledRegistrationFormDiv>
      <StyledFlexDiv column>
        <FormTextInputBox label="First Name" placeholder={"First Name"}/>
        <FormTextInputBox label="Last Name" placeholder={"Last Name"}/>
      </StyledFlexDiv>
      <StyledFlexDiv>
        <FormDateInputBox label="DOB" placeholder={"DOB"}/>
      </StyledFlexDiv>
      <StyledFlexDiv>
        <StyledTextArea label="Study" placeholder={"Study"}/>
      </StyledFlexDiv>
    </StyledRegistrationFormDiv>
  );
}
export default RegistrationForm;