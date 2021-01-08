import React, { useState, useEffect } from "react"
import "./Feed.css"
import InputOption from "./InputOption"
import Post from "./Post.js"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import { db } from "../firebase.js"
import firebase from "firebase"

function Feed() {
	const [posts, setPosts] = useState([])
	const [input, setInput] = useState("")

	useEffect(() => {
		db.collection("posts").onSnapshot((snapshot) =>
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		)
	}, [])

	const sendPost = (e) => {
		e.preventDefault()

		db.collection("posts").add({
			name: "Elizabeth Eidelson",
			description: "This is a test",
			message: input,
			photoUrl: "",
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		})
	}

	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type='text'
						/>
						<button onClick={sendPost} type='submit'>
							Send
						</button>
					</form>
				</div>
				<div className='feed__inputOptions'>
					<InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
					<InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
					<InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
					<InputOption
						Icon={CalendarViewDayIcon}
						title='Write Article'
						color='#7FC15E'
					/>
				</div>
			</div>
			{posts.map((post) => (
				<Post />
			))}
			<Post
				name='Elizabeth Eidelson'
				description='This is a test'
				message='Test message...'
			/>
		</div>
	)
}

export default Feed