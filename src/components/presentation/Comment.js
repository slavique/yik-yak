import React, {Component} from 'react'
import styles from './styles'

class Comment extends Component {
	render() {
		const style = styles.comments
		return(
			<div>
				<p style={style.body}>
					{this.props.comment.body}
				</p>
				<span style={style.username}>{this.props.comment.username}</span>
				<span style={style.pipe}> | </span>
				<span style={style.timestamp}>{this.props.comment.timestamp}</span>
				<hr />
			</div>
		)
	}
}

export default Comment