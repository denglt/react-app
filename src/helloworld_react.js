import React from 'react';


class HelloWorld extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {num: 1};
        this.num = 1;
    }

    addNum() {
        // alert(this.state.num)
        let num = this.state.num + 1;
        this.setState({num: num});
    }

    addNum2() {
        this.state.num = this.state.num + 1;
        this.forceUpdate();
    }

    addNum3() {
        this.num = this.num + 1;
        this.forceUpdate();

    }

    render() {

        return (
            <div>
                <h1>Hello, world by Denglt!</h1>
                <input type="button" value={this.state.num} onClick={this.addNum.bind(this)}></input>
                <input type="button" value={this.state.num} onClick={this.addNum2.bint(this)}></input>
                <input type="button" value={this.num} onClick={this.addNum3.bind(this)}></input>
            </div>
        );
    }
}

export default HelloWorld;
