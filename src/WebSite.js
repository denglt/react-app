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

    render(){
        return (
            <div>
			    <Name name={this.props.name}/>
			    <Link site={this.props.site} />
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
    }

    componentWillMount(){ }
    componentDidMount() { }
    componentWillReceiveProps(nextProps) { }
    shouldComponentUpdate() { return true; }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(){ }
    componentWillUnmount(){ }

    render(){
        return (
        	<a href={this.props.site}>
				{this.props.site}
			</a>
		);
    }
}

Link.propTypes = {};
Link.defaultProps = {};

export default WebSite;