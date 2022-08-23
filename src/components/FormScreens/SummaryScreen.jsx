import React from "react";
import ConditionalComponent from "../Shared/ConditionalComponent";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import PrimaryButton from "../Shared/PrimaryButton";

const SummaryScreen = ({ props }) => {
	const handleClick = (e) => {
		props.handleNextStep();
	};

	return (
		<div className='summary-screen'>
			<div className='summary-screen-icon w-16 h-16 mx-auto flex justify-center items-center rounded-full mb-8 text-white bg-[rgb(101,76,277)] text-xl font-bold'>
				<ConditionalComponent isVisible={props.step.icon === "success"}>
					<IoMdCheckmark />
				</ConditionalComponent>
				<ConditionalComponent isVisible={props.step.icon === "failure"}>
					<IoMdClose />
				</ConditionalComponent>
			</div>
			<div className='title text-4xl font-semibold'>
				{props.step.title(props.displayName)}
			</div>
			<div className='description text-md font-normal text-gray-500 mt-3 mb-8'>
				{props.step.description}
			</div>
			<div className='form max-w-[80%] sm:max-w-[60%] mx-auto'>
				<PrimaryButton
					text={props.step.primaryButtonText}
					handleClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default SummaryScreen;
