import s from "./message.module.css";
// import {NavLink} from "react-router-dom"
import Dialog from "./dialog/dialog";


const Message = (props) => {
const g = props.state.dialogs.map((user) => {
  return (<Dialog name={user.name} id={user.id} /> );
});
	return (
		<div className={s.dialogs}>
			<div className={s.dialog}>
				{g}
			</div>
			<div className={s.message}>
				<div>hi</div>
				<div>hi</div>
				<div>hi</div>
			</div>
		</div>
	);
}

export default Message;