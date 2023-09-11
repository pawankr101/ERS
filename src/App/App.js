import { AppDivStyled } from "./StyledApp";
import RegistrationForm from "./components/registration-form/RegistrationForm";
import EmployeeList from "./components/employee-list/EmployeeList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <EmployeeList/>,
  },
  {
    path: "/new",
    element: <RegistrationForm formMode="new"/>,
  },
  {
    path: "/view/:id",
    element: <RegistrationForm formMode="view"/>,
  },
  {
    path: "/edit/:id",
    element: <RegistrationForm formMode="edit"/>,
  },
])

function App() {
  return (
    <AppDivStyled>
      <RouterProvider router={routes}/>
    </AppDivStyled>
  );
}
export default App;