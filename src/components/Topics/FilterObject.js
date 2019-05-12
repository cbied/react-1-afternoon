import React, { Component } from 'react';

class FilterObjects extends Component {
    constructor() {
        super()

        this.state = {
            cars: [
                {
                  make: 'Tesla',
                  model: 'X',
                  manual: false,
                  selfDriving: true
                },
                {
                  make: 'Honda',
                  manual: true,
                  color: 'red'
                },
                {
                  make: 'Ford',
                  model: 'Mustang',
                  selfDriving: false
                }
              ],
        
              userInput: '',
              filteredCars: []
            } 
        }

        updateUserState(val) {
            this.setState({ userInput: val })
        }

        filterCar(prop) {
            let cars = this.state.cars,
                filterArr = [];

            for ( let i = 0; i < cars.length; i++ ) {
                if ( cars[i].hasOwnProperty(prop) ) {
                    filterArr.push(cars[i]);
                }
            }
            // cars.forEach(car => car.hasOwnProperty(prop) ? filterArr.push(car) : false)

            this.setState({ filteredCars: filterArr });
        }

        render() {
            return (
                <div className="puzzleBox filterObjectPB">
                    <h4>Filter Objects</h4>
                    <span className='puzzleText'> Original: { JSON.stringify(this.state.cars, null, 10) }</span>
                    <input className='inputLine'
                    onChange={e => this.updateUserState(e.target.value)}></input>
                    <button className='confirmationButton'
                    onClick={() => this.filterCar(this.state.userInput)}>Filter</button>
                    <span className='resultsBox filterObjectRB'> Filtered: { JSON.stringify(this.state.filteredCars, null, 10) }</span>
                </div>
            )
        }


    }

    



export default FilterObjects;