import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './helloworld_react.js';
import RepoList from './RepoList.js';
import $  from 'jquery';

import registerServiceWorker from './registerServiceWorker';
import TraceComponentStat from "./TraceComponentStat";

// alert(typeof App)  // function
ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<HelloWorld  />, document.getElementById('hello'));
ReactDOM.render(<HelloWorld  />, document.getElementById('hello2'));

ReactDOM.render( <RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}/>,
          document.getElementById('repolist'));


//ReactDOM.render( <TraceComponentStat/> ,document.getElementById('hello') );

//var promise = $.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars');
//promise.then( value => alert(value) , error => alert(error) );

registerServiceWorker();
