import s from "./dialog.module.css";
import { NavLink } from "react-router-dom";


const Dialog = (props) => {

	return (
		<div className={s.dialogItem + " " + s.active}>
			<NavLink className={s.dialog} to={"/Message/" + props.id}>{props.name }</NavLink>
			</div>
		
	)
}

export default Dialog;
