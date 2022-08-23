import React from "react";

const Layout = (props) => {
	return (
		<div className='layout container w-[100vw] h-[100vh] mx-auto overflow-auto text-center'>
			{props.children}
		</div>
	);
};

export default Layout;
