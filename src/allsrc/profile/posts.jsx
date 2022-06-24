
import Post from "./post";
import s from "./posts.module.css"

function Posts() {
	return (
		<div>
			<div className={s.postsS}>
			<div>
			<textarea maxLength={20}></textarea>
			<span className="textareaLength"></span>
			</div>
			<button>create post</button>
			</div>
		<Post message="hello"/>
		</div>
	);
}

export default Posts;
