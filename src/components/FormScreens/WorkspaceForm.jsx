import React, { useState } from "react";
import InputField from "../Shared/InputField";
import PrimaryButton from "../Shared/PrimaryButton";

const WorkspaceForm = ({ props }) => {
	const [workspaceFormData, setWorkspaceFormData] = useState({
		workspaceName: props.workspaceName || "",
		workspaceUrl: props.workspaceUrl || "",
	});

	const handleChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		setWorkspaceFormData((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const handleClick = (e) => {
		props.handleNextStep(workspaceFormData);
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
						label='Workspace Name'
						inputValue={workspaceFormData.workspaceName || props.workspaceName}
						inputName='workspaceName'
						inputPlaceholder='Eden'
						handleChange={handleChange}
					/>
					<InputField
						label='Workspace URL'
						inputValue={workspaceFormData.workspaceUrl || props.workspaceUrl}
						inputName='workspaceUrl'
						inputPlaceholder='Example'
						handleChange={handleChange}
						prefixText='www.eden.com/'
						isOptional
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

export default WorkspaceForm;
