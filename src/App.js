import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';
import Home from './pages/Home';
import DataPage from './pages/DataPage';
import AnalysisPage from './pages/AnalysisPage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import Intro from './pages/Intro';
import { getData } from './redux/actions/getData';
import ConstrutionTime from './pages/ConstrutionTime';

const App = (props) => {
  const permissson = process.env.NODE_ENV

  props.getData()

  return(
    <Router>
      { (permissson !== 'development') ?
        <Switch>
          <Route exact path='/' component={ConstrutionTime}/>
        </Switch>
      :<Switch>
        <Route exact path='/' component={Intro}/>
        <Route path='/home' component={Home}/>
        <Route path='/data' component={DataPage}/>
        <Route path='/analysis' component={AnalysisPage}/>
        <Route path='/loginpage' component={LoginPage}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
      }
    </Router>
  )
}

const stateToProps = (state) => {
  return{
    data: state.data
  }
}

const getTheData = (dispatch) => {
  return{
    getData: () => dispatch(getData())
  }
}

export default connect(stateToProps, getTheData)(App);
