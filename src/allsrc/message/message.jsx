import s from "./message.module.css";
// import {NavLink} from "react-router-dom"
import Dialog from "./dialog/dialog";
import React from "react";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../allstate/message-reducer";



const Message = (props) => {
const g = props.dialogs.dialogs.dialog.map((user) => {
  return (<Dialog name={user.name} id={user.id} /> );
});
	const m = props.dialogs.dialogs.message.map((message) => {
		return (
			<div>{message.message}</div>
	);
});
	let message = React.useRef();
	const sendMessage = () => {
		let text = message.current.value;
		props.dispatch(sendMessageActionCreator(text))
	}

	const updateMessageText = () => {
		let text = message.current.value;
		props.dispatch(updateMessageTextActionCreator(text));
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialog}>
				{g}
			</div>
			<div>
			<div className={s.message}>
				{m}
				</div>
				<div className={s.send}>
					<input onChange={updateMessageText} value={props.dialogs.dialogs.messageText} type="text" ref={message}></input>
					<button className={s.btnMessage} onClick={sendMessage}>Отправить сообщение</button>
					</div>
			</div>

		</div>
	);
}

export default Message;