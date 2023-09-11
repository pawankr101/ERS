import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import EmployeeList from './components/employee-list/EmployeeList'
import RegistrationForm from './components/registration-form/RegistrationForm'
import { AppDivStyled } from "./StyledApp";

const routes = createBrowserRouter([
  {
    path:'/',
    element:<EmployeeList/>
  },
  {
    path:'/new',
    element:<RegistrationForm formMode='new'/>
  },
  {
    path:'/view/:id',
    element:<RegistrationForm formMode='view'/>
  },
  {
    path:'/edit/:id',
    element:<RegistrationForm formMode='edit'/>
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