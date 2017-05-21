import React, { Component } from 'react'

class CreateZone extends Component{
    constructor() {
        super()
        this.state = {
            zone: {
                name: '',
                zipCodes: ''
            }
        }
    }

    updateZone(event) {
        let newZone = Object.assign({}, this.state.zone);
        newZone[event.target.id] = event.target.value;
        this.setState({
            zone: newZone
        })
    }

    addNewZone() {
        let updated = Object.assign({}, this.state.zone)
        updated.zipCodes = updated.zipCodes.split(',')
        this.props.onCreate(updated)
    }

    render() {
        return(
            <div>
                <input id="name" onChange={this.updateZone.bind(this)} className='form-control' type="text" placeholder="Name"></input><br/>
                <input id="zipCodes" onChange={this.updateZone.bind(this)} className='form-control' type="text" placeholder="ZipCode"></input><br/>
                <button onClick={this.addNewZone.bind(this)} className='btn btn-danger'>Add New Zone</button>
            </div>
        )
    }
}

export default CreateZone