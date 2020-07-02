import React, {Component} from 'react';

class LifeCycle extends Component {
    state={
        title: 'Life Cycles'
    }

    componentWillMount() {
        console.log("3 before Render");
    }

    componentDidMount() {
        console.log("5 after render");
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("Before Update")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("AFTER UPDATE")
    }


    render() {
        console.log("Render");
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    ()=> this.setState({
                        title:"something else"
                    })
                }>CLICK TO CHANGE</div>
            </div>
        );
    }
}

export default LifeCycle;