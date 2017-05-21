import React, {Component} from 'react'
import { APIManager } from '../../utils'
import { Comment, CreateComment } from '../presentation'
import styles from './styles'

class Comments extends Component {
	constructor() {
		super()
		this.state = {
			list: []
		}
	}
	componentDidMount() {
		APIManager.get('/api/comment', null, (err, response) => {
			if (err) {
				alert('ERROR' + err.message)
				return
			}
			this.setState({
				list: response.results
			})
		})
	}

	submitComment(comment) {
		console.log('passed invocation to the container')
		APIManager.post('/api/comment', comment, (err, response) => {
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

	render() {
		const listOfItems = this.state.list.map((comment, i) => {
			return (
				<li key={i}><Comment comment={comment}/></li>
				)
		})
		return(
			<div>
				<h2>Comments: Zone 1</h2>
				<div style={styles.comments.commentsBox}>
					<ul style={styles.comments.commentsList}>
						{listOfItems}
					</ul>
					<CreateComment onCreate={this.submitComment.bind(this)}/>
				</div>	
			</div>
		)
	}
}

export default Comments