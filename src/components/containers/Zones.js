import React, {Component} from 'react'
import Zone from '../presentation/Zone'

class Zones extends Component {
	constructor() {
		super()
		this.state = {
			list: [
				{name: "Zone1", zipCode: "10012", numComments: 10},
				{name: "Zone2", zipCode: "12233", numComments: 23},
				{name: "Zone3", zipCode: "23366", numComments: 40},
				{name: "Zone4", zipCode: "99988", numComments: 30},
				{name: "Zone5", zipCode: "33555", numComments: 60}
			]
		}
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
			</div>
		)
	}
}

export default Zones