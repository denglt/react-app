import React from "react";

var myStyle = {
    fontSize: 50,
    color: '#FF0000'
};
var arr = [
    <h1>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
];

class HelloWorld extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {num: 1};
        this.num = 2;
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
            /*注释 */
            <div>
                <h1 style = {myStyle} >Hello, world by Denglt!</h1>
                {/*注释...*/}
                <input type="button" value={this.state.num} onClick={this.addNum.bind(this)}></input>
                <input type="button" value={this.state.num} onClick={this.addNum2.bind(this)}/>
                <input type="button" value={this.num} onClick={this.addNum3.bind(this)}></input>
                <input type="button" value={this.props.htmlFor} ></input>
                <div>{arr}</div>
            </div>
        );
    }
}

export default HelloWorld;
