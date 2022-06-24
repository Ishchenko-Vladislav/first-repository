
import s from "./post.module.css"

function Post(props) {
	return (
		<div className={s.post}>
			<img src="https://claudioschmidt.de/img/portfolio/github_logo.png" alt="" />
			{props.message}
		</div>
	);
}

export default Post;
