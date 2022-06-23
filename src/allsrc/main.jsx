import Profile from "./profile";
import Sidebar from "./sidebar";

function Main() {
	return <div className="main-content">
		<Sidebar />
		<Profile />
	</div>;
}

export default Main;
