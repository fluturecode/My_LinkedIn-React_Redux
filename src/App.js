import "./App.css"
import Login from "./components/Login.js"
import Header from "./components/Header.js"
import Sidebar from "./components/Sidebar.js"
import Feed from "./components/Feed"
import { selectUser } from "./features/userSlice.js"
import { useSelector } from "react-redux"

function App() {
	const user = useSelector(selectUser)
	return (
		<div className='app'>
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className='app__body'>
					<Sidebar />
					<Feed />
				</div>
			)}
		</div>
	)
}

export default App
