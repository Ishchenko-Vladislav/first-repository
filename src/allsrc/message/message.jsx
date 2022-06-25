import s from "./message.module.css";
// import {NavLink} from "react-router-dom"
import Dialog from "./dialog/dialog";


const Message = (props) => {
const g = props.dialogs.map((user) => {
  return (
    // <NavLink to={"/Message/" + user.id}>{user.name}</NavLink>
    <Dialog name={user.name} id={user.id} />
  );
});
	return (
		<div className={s.dialogs}>
			<div className={s.dialog}>
				{/* <Dialog name="Maks" id="1" />
				<Dialog name="Oleg" id="2" />
				<Dialog name="Sveta" id="3" />
				<Dialog name="Olga" id="4" /> */}
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