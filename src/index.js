import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import "./index.css";
import App from "./App";
import HelloWorld from "./helloworld_react.js";
import RepoList from "./RepoList.js";
import $ from "jquery";

import registerServiceWorker from "./registerServiceWorker";
import TraceComponentStat from "./TraceComponentStat";
import WebSite from "./WebSite";

// alert(typeof App)  // function
ReactDOM.render(<App/>, document.getElementById("root"));

ReactDOM.render(<HelloWorld htmlFor="denglt"/>, document.getElementById("hello"));
ReactDOM.render(<HelloWorld/>, document.getElementById("hello2"));

//ReactDOM.render( <RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}/>, document.getElementById('repolist'));


//ReactDOM.render( <TraceComponentStat/> ,document.getElementById('hello') );

//var promise = $.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars');
//promise.then( value => alert(value) , error => alert(error) );

ReactDOM.render(<WebSite name="Oracle监控" site="http://fortify.iask.in/"/>,
	document.getElementById("webSite"),
	(obj) => {
		//alert(obj == undefined);
		alert("WebSite callback");
		alert("hello world");
	});

var myDivElement = <div className="foo"><h1>author is denglt</h1></div>;
ReactDOM.render(myDivElement,
	document.getElementById("tail")); //直接渲染HTML的标签

var html = ReactDOMServer.renderToString(
	<div className="divider">
		<h2>itbilu.com</h2>
	</div>);
alert(html);
registerServiceWorker();
