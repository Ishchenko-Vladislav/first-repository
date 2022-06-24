import s from "./message.module.css";
// import {NavLink} from "react-router-dom"
import Dialog from "./dialog/dialog";


const Message = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialog}>
				<Dialog name="Maks" id="1" />
				<Dialog name="Oleg" id="2" />
				<Dialog name="Sveta" id="3" />
				<Dialog name="Olga" id="4" />
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