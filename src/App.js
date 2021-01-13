import React, { useEffect } from "react"
import "./App.css"
import Login from "./components/Login.js"
import Header from "./components/Header.js"
import Sidebar from "./components/Sidebar.js"
import Feed from "./components/Feed"
import { login, logout, selectUser } from "./features/userSlice.js"
import { useSelector, useDispatch } from "react-redux"
import { auth } from "./firebase"
import Widgets from "./components/Widgets"

function App() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				)
			} else {
				dispatch(logout())
			}
		})
	}, [])

	return (
		<div className='app'>
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className='app__body'>
					<Sidebar />
					<Feed />
					<Widgets />
				</div>
			)}
		</div>
	)
}

export default App
