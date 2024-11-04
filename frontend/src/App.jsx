/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import LoginPage from "./pages/auth/Login/LoginPage";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";

function App() {
	return (
		<div className='flex max-w-6xl mx-auto'>
      {/* if the / is in right most then it is just a common component  */}
      <Sidebar/>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/notifications' element={<NotificationPage />} />
				<Route path='/profile/:username' element={<ProfilePage />} />

			</Routes>
      <RightPanel/>
		</div>
	);
}
export default App
