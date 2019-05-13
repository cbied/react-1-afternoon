import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super()

        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }

    handleNum1Change(val) {
        this.setState({ num1: parseInt(val,10) })
    }

    handleNum2Change(val) {
        this.setState({ num2: parseInt(val,10) })
    }

    sumNums(num1,num2) {
        this.setState({ sum: num1 + num2})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="number" className="inputLine"
                onChange={e => this.handleNum1Change(e.target.value)}/>
                <input type="number" className="inputLine"
                onChange={e => this.handleNum2Change(e.target.value)}/>
                <button className="confirmationButton"
                onClick={() => this.sumNums(this.state.num1,this.state.num2)}>Sum</button>
                <span className="resultsBox"> Sum: { this.state.sum } </span>
            </div>

        )
    }
}

export default Sum;