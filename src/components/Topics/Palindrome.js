import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }


    }

    handleUserState(val) {
        this.setState({ userInput: val })
    }

    palindrome(userInput) {
        let reverseSplitInput = userInput.split('').reverse().join('')
        if(userInput === reverseSplitInput) {
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input type="text" className="inputLine"
                onChange={e => this.handleUserState(e.target.value)}/>
                <button className="confirmationButton"
                onClick={() => this.palindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox"> palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;