
import Post from "./post";
import s from "./posts.module.css"

function Posts(props) {
	const post = props.posts.posts.map(a => {
		return (<Post message={a.message} />)
	})
	return (
		<div>
			<div className={s.postsS}>
			<div>
			<textarea maxLength={20}></textarea>
			<span className="textareaLength"></span>
			</div>
			<button>create post</button>
			</div>
			{/* <Post message={props.state.posts} /> */}
			{post}
		</div>
	);
}

export default Posts;
