import React, {Component} from 'react'
import styles from './styles'
class Zone extends Component {
	render() {
		const style = styles.zone
		const zipCode = this.props.zone.zipCodes[0]
		return (
			<div style={style.container}>
				<h2 style={style.header}>
					<a style={style.title} href="#">{this.props.zone.name}</a>
				</h2>
				<span className='detail'>{zipCode}</span><br/>
				<span className='detail'>{this.props.zone.numComments} Comments</span>
			</div>

		)
	}
}

export default Zone