import React, {forwardRef} from "react"
import "./Post.css"
import Avatar from "@material-ui/core/Avatar"
import InputOption from "./InputOption.js"
import ThumbsUpAltOutLinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ChatOutLinedIcon from "@material-ui/icons/ChatOutlined"
import ShareOutLinedIcon from "@material-ui/icons/ShareOutlined"
import SendOutLinedIcon from "@material-ui/icons/SendOutlined"

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	return (
		<div className='post'>
			<div className='post__header'>
				<Avatar src={photoUrl}>{name[0]}</Avatar>
				<div className='post__info'>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div className='post__body'>
				<p>{message}</p>
			</div>

			<div className='post__buttons'>
				<InputOption Icon={ThumbsUpAltOutLinedIcon} title='Like' color='gray' />
				<InputOption Icon={ChatOutLinedIcon} title='Comment' color='gray' />
				<InputOption Icon={ShareOutLinedIcon} title='Share' color='gray' />
				<InputOption Icon={SendOutLinedIcon} title='Send' color='gray' />
			</div>
		</div>
	)
})

export default Post
