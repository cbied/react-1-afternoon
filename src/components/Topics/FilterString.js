import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super()
    
    this.state = {
        unFilteredCarArray: ['fiat chrysler','toyota','ford','tesla','nissian','chevrolet','volkswagen','buick','cadillac','general motors','subaru','lexus','mitubishi','mazda','jeep','lamborghini','suziki','kia','hyundia','gmc','mazda','porche'],
        userInput: '',
        filteredCarArray: []
    }

}

    updateUserState(val) {
        this.setState({ userInput: val })
    }

    filterCar(userInput) {
        let cars = this.state.unFilteredCarArray,
            filteredCars = [];
        for(let i=0; i<cars.length; i++) {
             if(cars[i].includes(userInput)) {
                filteredCars.push(cars[i])
             } 
        }

        this.setState({ filteredCarArray : filteredCars })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Cars { JSON.stringify(this.state.unFilteredCarArray, null, 10) } </span>
                <input type="text" className="inputLine"
                onChange={e => this.updateUserState(e.target.value)}/>
                <button className="confirmationButton"
                onClick={() => this.filterCar(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB"> Filtered Names { JSON.stringify(this.state.filteredCarArray, null, 10) } </span>
            </div>
            
        )
    }
}

export default FilterString;