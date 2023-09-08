import { AppDivStyled } from "./StyledApp";
import RegistrationForm from "./components/registration-form/RegistrationForm";
import EmployeeList from "./components/employee-list/EmployeeList";

function App() {
  return (
    <AppDivStyled>
      <RegistrationForm />
      <EmployeeList />
    </AppDivStyled>
  );
}
export default App;