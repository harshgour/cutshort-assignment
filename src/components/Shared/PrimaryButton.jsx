import React from "react";

const PrimaryButton = (props) => {
	const generatedCustomClasses = () => {
		const textSize = `text-${props.textSize || "sm"}`; //sm, md, xl, 2xl ...
		const textWeight = `font-${props.textWeight || "medium"}`; //thin, light, normal, medium(default), bold, semi-bold
		return [textSize, textWeight].join(" ");
	};
	return (
		<button
			className={`h-10 w-full rounded-md ${generatedCustomClasses()}`}
			style={{
				backgroundColor: props.bgColor || "rgb(101,76,277)",
				color: props.textColor || "white",
			}}
			onClick={props.handleClick}>
			{props.text}
		</button>
	);
};

export default PrimaryButton;
