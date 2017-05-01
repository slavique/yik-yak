import React, {Component} from 'react'
import superagent from 'superagent'
import Comment from '../presentation/Comment'
import styles from './styles'

class Comments extends Component {
	constructor() {
		super()
		this.state = {
			comment: {
				username: '',
				body: '',
				timestamp: ''
			},
			list: []
		}
	}
	componentDidMount() {
		superagent
		.get('/api/comment')
		.query(null)
		.set('Accept', 'application/json')
		.end((err, response) => {
			if (err) {
				alert('ERROR' + err)
				return
			}
			let results = response.body.results
			this.setState({
				list: results
			})
		})
	}

	submitComment() {
		console.log('submitComment: '+ JSON.stringify(this.state.comment))
		let updatedlist = Object.assign([], this.state.list);
		updatedlist.push(this.state.comment)
		this.setState({
			list: updatedlist
		})
	}

	updateUsername(event) {
		console.log('updateUsername: '+ event.target.value);
		let updatedComment = Object.assign({}, this.state.comment);
		updatedComment['username'] = event.target.value;
		this.setState({
			comment: updatedComment
		})
	}
	updateBody(event) {
		console.log('updateComment: '+ event.target.value);
		let updatedComment = Object.assign({}, this.state.comment);
		updatedComment['body'] = event.target.value;
		this.setState({
			comment: updatedComment
		})
	}	
	updateTimestamp(event) {
		console.log('updateComment: '+ event.target.value);
		let updatedComment = Object.assign({}, this.state.comment);
		updatedComment['timestamp'] = event.target.value;
		this.setState({
			comment: updatedComment
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
				<input className='form-control' onChange={this.updateUsername.bind(this)} type='text' placeholder='Username'/><br />	
				<input className='form-control' onChange={this.updateBody.bind(this)} type='text' placeholder='Comment'/><br />	
				<input className='form-control' onChange={this.updateTimestamp.bind(this)} type='text' placeholder='timst'/><br />	
				<button className='btn btn-info' onClick={this.submitComment.bind(this)}>Submit Comment</button>	
				</div>	
			</div>
		)
	}
}

export default Comments