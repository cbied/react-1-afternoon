import React, { Component } from 'react'

class FizzBuzz extends Component {
    constructor() {
        super()

        this.state = {
            userNum: null,
            fizzBuzz: []
        }
    }

    handleUserInput(val) {
        this.setState({ userNum: val })
    }

    fizzBuzzCheck(userNum) {
        let fizzBuzz = []
        for(let i=1; i<=userNum; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
                console.log(fizzBuzz)
                fizzBuzz.push('FizzBuzz ')
            } else if(i % 5 === 0) {
                console.log(fizzBuzz)
                fizzBuzz.push('Buzz ')
            } else if(i % 3 === 0) {
                console.log(fizzBuzz)
                fizzBuzz.push('Fizz ')
            } else {
                fizzBuzz.push(`${i} `)
            }
        }
        console.log()
        this.setState({ fizzBuzz: fizzBuzz })
    }

    render() {
        return (
            <div className="puzzleBox">
                <h4>Fizz Buzz</h4>
                <input type="number" className="inputLine"
                onChange={e => this.handleUserInput(e.target.value)}/>
                <button className="confirmationButton"
                onClick={() => this.fizzBuzzCheck(this.state.userNum)}>FizzBuzz</button>
                <span className="resultsBox filterObjectRB"> Array: { JSON.stringify(this.state.fizzBuzz) } </span>
            </div>
        )
    }
}

export default FizzBuzz