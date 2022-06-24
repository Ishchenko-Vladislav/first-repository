import s from "./sidebar.module.css"
import {NavLink} from "react-router-dom"

const ActiveLink = ({isActive}) => isActive ? s.active : s.link;
function Sidebar() {
	return <div className={s.main_sidebar}>
		<ul>
			<li className={`${s.link}`}>
				<NavLink className={ActiveLink}  to="/Profile">Profile</NavLink>
			</li>
			<li className={s.link}><NavLink className={ActiveLink} to="/Message">Message</NavLink></li>
			<li className={s.link}><NavLink className={ActiveLink} to="/News">News</NavLink></li>
			<li className={s.link}><NavLink className={ActiveLink} to="Music">Music</NavLink></li>
			<li className={s.link}><NavLink className={ActiveLink} to="Settings">Settings</NavLink></li>
		</ul>
	</div>;
}

export default Sidebar;
