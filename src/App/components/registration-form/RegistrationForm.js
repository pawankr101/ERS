import { InputStyled, NameDivStyled, RegistrationFormDivStyled } from "./StyledRegistrationForm";

function RegistrationForm({formMode}) {
  console.log(formMode);
  return (
    <RegistrationFormDivStyled>
      <NameDivStyled>
        <InputStyled type="text" placeholder={"First Name"}/>
        <InputStyled type="text" placeholder={"Last Name"}/>
      </NameDivStyled>
    </RegistrationFormDivStyled>
  );
}
export default RegistrationForm;