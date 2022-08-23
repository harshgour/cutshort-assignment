import React, { useState } from "react";
import { teamFormRadioOptions } from "../../constants";
import PrimaryButton from "../Shared/PrimaryButton";
import RadioBox from "../Shared/RadioBox";

const TeamSelectForm = ({ props }) => {
	const [teamSelectFormData, setTeamSelectFormData] = useState({
		teamStatus: props.teamStatus || "",
	});

	const handleChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		setTeamSelectFormData((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const handleClick = (e) => {
		props.handleNextStep(teamSelectFormData);
	};

	return (
		<div>
			<div className='title text-3xl md:text-4xl font-semibold'>
				{props.step.title}
			</div>
			<div className='description text-md font-normal text-gray-500 my-4'>
				{props.step.description}
			</div>
			<div className='form max-w-[90%] sm:max-w-[60%] mx-auto'>
				<div className='input-fields mt-12'>
					<RadioBox
						options={teamFormRadioOptions}
						handleChange={handleChange}
						selected={teamSelectFormData.teamStatus || props.teamStatus}
					/>
				</div>
				<div className='buttons'>
					<PrimaryButton
						text={props.step.primaryButtonText}
						handleClick={handleClick}
					/>
				</div>
			</div>
		</div>
	);
};

export default TeamSelectForm;
