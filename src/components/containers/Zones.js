import React, {Component} from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'

class Zones extends Component {
	constructor() {
		super()
		this.state = {
			newZone: {
				name: '',
				zipCodes: ''
			},
			list: []
		}
	}
componentDidMount() {
	console.log('componentDidMount');
	superagent
	.get('/api/zone')
	.query(null)
	.set('Accept', 'application/json')
	.end((err, response) => {
		if (err) {
			alert('ERROR' + err)
			return
		}
		console.log(JSON.stringify(response.body))
		let results = response.body.results
		this.setState({
			list: results
		})
	})
}

	submitNewZone() {
		console.log('submitNewZonne')
		let updatedList = Object.assign([], this.state.list);
		updatedList.push(this.state.newZone);
		this.setState({
			list: updatedList
		})
	}	

	updateZone(event) {
		let newZone = Object.assign({}, this.state.newZone);
		newZone[event.target.id] = event.target.value
		this.setState({
			newZone: newZone
		})
	}

	render() {
		const listItems = this.state.list.map((zone, i) => {
			return (
				<li key={i}><Zone zone={zone}/></li>
			)
		})
		return (
			<div>
				<ol>
					{listItems}
				</ol>
				<input id="name" onChange={this.updateZone.bind(this)} className='form-control' type="text" placeholder="Name"></input><br/>
				<input id="zipCode" onChange={this.updateZone.bind(this)} className='form-control' type="text" placeholder="ZipCode"></input><br/>
				<button onClick={this.submitNewZone.bind(this)} className='btn btn-danger'>Add New Zone</button>
			</div>
		)
	}
}

export default Zones