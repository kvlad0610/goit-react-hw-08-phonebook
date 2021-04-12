import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import AppBar from './Components/AppBar/AppBar';
// import Phonebook from './Components/Phonebook/PhonebookPage/PhonebookPage';
import './App.css';

const Contacts = lazy(() =>
  import(
    './Components/Phonebook/PhonebookPage/PhonebookPage' /*WebpackChunkName: "contacts-page"*/
  ),
);
const Register = lazy(() =>
  import(
    './Components/UserMenu/Register' /*WebpackChunkName: "register-page"*/
  ),
);
const Login = lazy(() =>
  import('./Components/UserMenu/Login' /*WebpackChunkName: "login-page"*/),
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Load...</h1>}>
        <Switch>
          <Route path={routes.contacts} exact component={Contacts} />
          <Route path={routes.register} component={Register} />
          <Route path={routes.movies} component={Login} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
