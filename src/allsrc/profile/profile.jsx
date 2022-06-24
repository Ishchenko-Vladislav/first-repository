import Posts from "./posts";
import s from "./profile.module.css"

function Profile() {
	return <div className={s.main_profile}>
		<img className={s.main_profile_img} src="https://jpeg.org/images/jpegxt-home.jpg" alt="nature" />
		<div className={s.prof}>
			<div><img className={s.main_profile_avatar} src="https://pngimg.com/uploads/deadpool/deadpool_PNG3.png" alt="" /></div>
			<div>
				<p>Name: Vlad</p>
				<p>From: Ukraine</p>
				<p>City: Kharkov</p>
			</div>
		</div>
		<Posts />
	</div>;
}

export default Profile;
