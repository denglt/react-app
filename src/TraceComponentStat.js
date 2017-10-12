import React from 'react';

class TraceComponentStat extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    componentWillMount() {

        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');

    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
        console.log(nextProps);
        console.log(nextState);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (<div></div> );
    }
}

TraceComponentStat.defaultProps = {}
TraceComponentStat.propTypes = {}

export default TraceComponentStat;
