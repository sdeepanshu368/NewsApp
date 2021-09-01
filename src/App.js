import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API_KEY

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='rgb(255,255,255, .5)'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/"> <News setProgress={this.setProgress} apiKey={this.apiKey} key='general' country='in' pageSize={this.pageSize} category='general' /> </Route>
            <Route exact path="/business"> <News setProgress={this.setProgress} apiKey={this.apiKey} key='business' country='in' pageSize={this.pageSize} category='business' /> </Route>
            <Route exact path="/entertainment"> <News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' country='in' pageSize={this.pageSize} category='entertainment' /> </Route>
            <Route exact path="/general"> <News setProgress={this.setProgress} apiKey={this.apiKey} key='general' country='in' pageSize={this.pageSize} category='general' /> </Route>
            <Route exact path="/health"> <News setProgress={this.setProgress} apiKey={this.apiKey} key='health' country='in' pageSize={this.pageSize} category='health' /> </Route>
            <Route exact path="/science"> <News setProgress={this.setProgress} apiKey={this.apiKey} key='science' country='in' pageSize={this.pageSize} category='science' /> </Route>
            <Route exact path="/sports"> <News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' country='in' pageSize={this.pageSize} category='sports' /> </Route>
            <Route exact path="/technology"> <News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' country='in' pageSize={this.pageSize} category='technology' /> </Route>
          </Switch>
        </Router>
      </div>
    )
  } 
}