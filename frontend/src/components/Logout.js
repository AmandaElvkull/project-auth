import React from 'react';
import { useDispatch } from 'react-redux';
import userSlice from 'reducers/userSlice';

const LogOut = () => {
	const dispatch = useDispatch;
	return (
		<>
			<button onClick={() => dispatch(userSlice.actions.logOut)}>LogOut</button>
		</>
	);
};

export default LogOut;
