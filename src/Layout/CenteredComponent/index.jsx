import React from "react";

const CenteredComponent = (props) => {
	return (
		<div className='flex justify-center items-center min-h-full py-12 w-[90%] md:w-[80%] mx-auto'>
			<div className='w-full max-w-3xl'>{props.children}</div>
		</div>
	);
};

export default CenteredComponent;
