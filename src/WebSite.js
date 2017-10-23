import React from 'react';
import PropTypes from 'prop-types';

//复合组件

class WebSite extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
        };
    }

    componentWillMount(){ }
    componentDidMount() { }
    componentWillReceiveProps(nextProps) { }
    shouldComponentUpdate() { return true; }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(){ }
    componentWillUnmount(){ }

	children() {
		//alert(React.Children.count(this));
	}

    render(){
        alert("WebSite render");
        return (
            <div>
			    <Name name={this.props.name}/>
			    <Link site={this.props.site} />
                <input type="button" value="children" onClick={this.children.bind(this)}/>
		    </div>
        );
    }
}

WebSite.propTypes = {
	name: PropTypes.string.isRequired,
	stie: PropTypes.string.isRequired,
    title :PropTypes.string.Node
};

WebSite.defaultProps = {};


class Name extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
        };
    }

    componentWillMount(){ }
    componentDidMount() { }
    componentWillReceiveProps(nextProps) { }
    shouldComponentUpdate() { return true; }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(){ }
    componentWillUnmount(){ }

    render(){
        return (<h1>{this.props.name}</h1> );
    }
}

Name.propTypes = {};
Name.defaultProps = {};

class Link extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
        };

        this.site = this.props.site;
    }

    componentWillMount(){ }
    componentDidMount() { }
    componentWillReceiveProps(nextProps) { }
    shouldComponentUpdate() { return true; }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(){ }
    componentWillUnmount(){ }

	handleChange(event){
    	//alert("handleChange");
    	this.site = event.target.value;
    	alert(this.site)
    	this.forceUpdate();
	}

    render(){
        return (
			<div>
				<a href={this.site}>
					{this.site}
				</a>
				<input type="text" value={this.props.site} onChange={this.handleChange.bind(this)}/>
			</div>
		);
    }
}

Link.propTypes = {};
Link.defaultProps = {};

export default WebSite;