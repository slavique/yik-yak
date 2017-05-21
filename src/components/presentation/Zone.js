import React, {Component} from 'react'
import styles from './styles'
class Zone extends Component {
	selectZone() {
		this.props.select(this.props.index)
	}

	render() {
		const style = styles.zone
		const zipCode = this.props.zone.zipCodes[0]
		const headerStile = this.props.isSelected ? style.title : null
		return (
			<div onClick={this.selectZone.bind(this)} style={style.container}>
				<h2 style={style.header}>
					<a style={headerStile} href="#">{this.props.zone.name}</a>
				</h2>
				<span className='detail'>{zipCode}</span><br/>
				<span className='detail'>{this.props.zone.numComments} Comments</span>
			</div>

		)
	}
}

export default Zone