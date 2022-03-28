import SideBar from "./components/sideBar/sideBar";
import TopNav from "./components/topNav/topNav";
import Header from "./components/header/header";
import BusinessCat from "./pages/businessCategory/businessCat";
import BusinessIdea from "./pages/businessIdea/businessIdea";
import Login from "./pages/auth/auth";
import Register from "./pages/auth/register";
import Home from "./pages/home/home";
import Charts from "./pages/charts/chart";
import BusinessIdeaReport from "./pages/reports/businessIdeas/bussinessIdeas";
import BusinessCatReport from "./pages/reports/businessCategory/businessCategory";
import Users from "./pages/reports/users/users";
import { allReducers } from "./dataStore/allReducers";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RejectedIdeaAnalysis } from "./pages/analytics/rejectedIdeasAnalysis";

const util = compose(applyMiddleware(ReduxThunk));
function App() {
  const store = createStore(allReducers, util);
  const isAuth = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");
  return (
    <Provider store={store}>
      <Router>
        {isAuth ? <SideBar /> : <></>}
        <div class="main-content" id="panel">
          <TopNav />
          {!isAuth ? (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          ) : (
            <></>
          )}
          {isAuth && userType === "admin" ? (
            <>
              <Header />

              <Switch>
                <Route exact path="/">
                  <Charts />
                </Route>
              </Switch>
              <Switch>
                <Route path="/newCategory">
                  <BusinessCat />
                </Route>
              </Switch>
              <Switch>
                <Route path="/businessIdeaReport">
                  <BusinessIdeaReport />
                </Route>
              </Switch>
              <Switch>
                <Route path="/businessCatReport">
                  <BusinessCatReport />
                </Route>
              </Switch>
              <Switch>
                <Route path="/usersList">
                  <Users />
                </Route>
              </Switch>
              <Switch>
                <Route path="/RejectedIdeasAnalysis">
                  <RejectedIdeaAnalysis />
                </Route>
              </Switch>
            </>
          ) : (
            <></>
          )}

          {isAuth && userType === "user" ? (
            <Switch>
              <Route path="/newBusinessIdea">
                <BusinessIdea />
              </Route>
            </Switch>
          ) : (
            <></>
          )}

          <Switch>
            {!isAuth ? (
              <Route path="/login">
                <Login />
              </Route>
            ) : (
              <></>
            )}
          </Switch>
          <Switch>
            <Route path="/register">
              {!isAuth ? <Register /> : <>you are alredy Registerd</>}
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
