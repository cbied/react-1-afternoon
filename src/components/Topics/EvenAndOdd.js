import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
    super();

    this.state = {
        evenArr: [],
        oddArr: [],
        userInput: ''
    }
       
    }

    updateUserState(val) {
        this.setState({userInput: val})
    }

    splitEvenAndOdds(userInput) {
        let splitStr = userInput.split(','),
            evens = [],
            odds = [];
            splitStr.forEach(element => element % 2 === 0 ? evens.push( parseInt(element, 10) ) : odds.push( parseInt(element, 10) ))
           

        this.setState({
            evenArr: evens,
            oddArr: odds
        })
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine'
                onChange={e => this.updateUserState(e.target.value)}></input>
                <button className='confirmationButton'
                onClick={() => this.splitEvenAndOdds(this.state.userInput)}> Split </button>
                <span className='resultsBox'> Evans: {JSON.stringify(this.state.evenArr)} </span>
                <span className='resultsBox'> Odds: {JSON.stringify(this.state.oddArr)} </span>
            </div>

        )
    }
}



export default EvenAndOdd;