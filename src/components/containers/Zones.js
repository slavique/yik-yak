import React, {Component} from 'react'
import { Zone, CreateZone } from '../presentation'
import { APIManager } from '../../utils'

class Zones extends Component {
	constructor() {
		super()
		this.state = {
			selected: 0,
			list: []
		}
	}
	componentDidMount() {
	APIManager.get('/api/zone/', null, (err, response) => {
		if (err) {
			alert('ERROR' + err.message)
			return
		}
		this.setState({
			list: response.results
		})
	})
}

	submitNewZone(zone) {
		APIManager.post('/api/zone', zone, (err, response) => {
			if (err) {
				alert('ERROR' + error.message)
				return
			}
			console.log(JSON.stringify(response.resource))
			let updatedList = Object.assign([], this.state.list);
			updatedList.push(response.resource);
			this.setState({
				list: updatedList
			})
		})
	}	

	selectZone(index) {
		this.setState({
			selected: index
		})
	}

	render() {
		const listItems = this.state.list.map((zone, i) => {
		const selected = this.state.selected == i
			return (
				<li key={i}>
					<Zone index={i} isSelected={selected} select={this.selectZone.bind(this)} zone={zone}/>
				</li>
			)
		})
		return (
			<div>
				<ol>
					{listItems}
				</ol>
				<CreateZone onCreate={this.submitNewZone.bind(this)}/>
			</div>
		)
	}
}

export default Zones