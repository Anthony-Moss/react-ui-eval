import React from 'react';
import { getArray } from './randomArray';

class BoxGrid extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            numbers: getArray()
        }
    }
    render() {
        console.log(this.state.numbers)
    
        return <div className='grid'>
                {this._getNumberRows(this.state.numbers)}
            </div>

        
    
    }

    _getNumberRows = (numbers) => {
        return numbers.map((row) =>{
            return <div className='row'>{row.map((number) => {
                return <div className={'number ' + 'color' + number}>{number}</div>
            })}</div>
        })
    } 
    
}

export default BoxGrid
