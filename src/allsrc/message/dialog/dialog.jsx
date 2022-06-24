import s from "./dialog.module.css";
import { NavLink } from "react-router-dom";


const Dialog = (props) => {
	return (
			<div className={s.dialogItem + " " + s.active}>
				<NavLink to={"/Message/" + props.id}>{props.name }</NavLink>
			</div>
		
	)
}

export default Dialog;
