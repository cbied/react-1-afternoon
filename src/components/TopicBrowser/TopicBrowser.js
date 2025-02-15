import React, { Component } from "react";
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrom from '../Topics/Palindrome';
import Sum from '../Topics/Sum'
import FizzBuzz from '../Topics/FizzBuzz'

class TopicBrowser extends Component {
    render() {
        return (
            <div>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrom />
            <Sum />
            <FizzBuzz />
            </div>
        )

    }
}

export default TopicBrowser;