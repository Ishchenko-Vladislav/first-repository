import React from "react";
import { addPostActionCreator, updatePostsTextActionCreator } from "../allstate/posts-reducer";
import Post from "./post";
import s from "./posts.module.css"



function Posts(props) {
	const postRender = props.posts.posts.post.map(a => {
		return (<Post message={a.message} />)
	});
	let newPostsCreate = React.useRef();
	const addPost = () => {
		props.dispatch(addPostActionCreator())
	};
	let newValue = () => {
		let text = newPostsCreate.current.value;
		props.dispatch(updatePostsTextActionCreator(text))
	};	
	return (
		<div>
			<div className={s.postsS}>
			<div>
					<textarea
						onChange={newValue}
						value={props.posts.posts.newPostText}
						maxLength={20}
						ref={newPostsCreate} />
			<span className="textareaLength"></span>
			</div>
			<button className={s.btnPost} onClick={addPost} >create post</button>
			</div>
			{postRender}
		</div>
	);
}

export default Posts;
