import React, { useState } from "react";
import InputField from "../Shared/InputField";
import PrimaryButton from "../Shared/PrimaryButton";

const checkFormData = (data) => {
	return Object.values(data).reduce((prev, curr) => !!prev && !!curr);
};

const WelcomeForm = ({ props }) => {
	const [welcomeFormData, setWelcomeFormData] = useState({
		fullName: props.fullName || "",
		displayName: props.displayName || "",
	});

	const handleChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		setWelcomeFormData((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const handleClick = (e) => {
		props.handleNextStep(welcomeFormData);
	};

	return (
		<>
			<div className='title text-3xl md:text-4xl font-semibold'>
				{props.step.title}
			</div>
			<div className='description text-md font-normal text-gray-500 my-4'>
				{props.step.description}
			</div>
			<div className='form max-w-[80%] sm:max-w-[60%] mx-auto'>
				<div className='input-fields mt-12'>
					<InputField
						label='Full Name'
						inputValue={welcomeFormData.fullName || props.fullName}
						inputName='fullName'
						inputPlaceholder='Steve Jobs'
						handleChange={handleChange}
					/>
					<InputField
						label='Display Name'
						inputValue={welcomeFormData.displayName || props.displayName}
						inputName='displayName'
						inputPlaceholder='Steve'
						handleChange={handleChange}
					/>
				</div>
				<div className='buttons'>
					<PrimaryButton
						text={props.step.primaryButtonText}
						handleClick={handleClick}
					/>
				</div>
			</div>
		</>
	);
};

export default WelcomeForm;
