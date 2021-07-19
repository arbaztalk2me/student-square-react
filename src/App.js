import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import Student from "./components/Student";
import "./App.css";
import Navbar from "./components/Navbar";
import Students from "./components/Students";
import StudentForm from "./components/StudentForm";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import Login from "./components/Login";
import PrivateRoute from "./components/routes/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <div className="App">
            <PrivateRoute component={Navbar} />
            <Switch>
              <PrivateRoute exact path="/" component={Students} />
              <PrivateRoute exact path="/student/:id" component={Student} />
              <PrivateRoute
                exact
                path="/studentform/:id?"
                component={StudentForm}
              />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
