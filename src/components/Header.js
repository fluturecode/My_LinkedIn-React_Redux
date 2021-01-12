import "./Header.css"
import HeaderOption from "./HeaderOption.js"
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"

export default function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
					alt='LinkedIn logo'
				/>
				<div className='header__search'>
					<SearchIcon />
					<input placeholder='Search' type='text' />
				</div>
			</div>
			<div className='header__right'>
				<HeaderOption Icon={HomeIcon} title='Home' />
				<HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
				<HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
				<HeaderOption Icon={ChatIcon} title='Messaging' />
				<HeaderOption Icon={NotificationsIcon} title='Notifications' />
				<HeaderOption
					avatar='https://media-exp1.licdn.com/dms/image/C4E03AQEnFqUo7PnY2Q/profile-displayphoto-shrink_200_200/0/1608307293424?e=1614816000&v=beta&t=6R5Te2O_UqHB0y3gRLsVj_m51VNVl9BAFZsodmNR-P0'
					title='me'
				/>
			</div>
		</div>
	)
}
