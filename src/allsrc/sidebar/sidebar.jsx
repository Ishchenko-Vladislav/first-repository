import s from "./sidebar.module.css"

function Sidebar() {
	return <div className={s.main_sidebar}>
		<ul>
			<li><a href="Profile">Profile</a></li>
			<li><a href="Message">Message</a></li>
			<li><a href="#">News</a></li>
			<li><a href="#">Music</a></li>
			<li><a href="#">Settings</a></li>
		</ul>
	</div>;
}

export default Sidebar;
