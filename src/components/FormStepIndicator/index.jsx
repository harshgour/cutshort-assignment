import React from "react";
import { formSteps } from "../../constants";
import "./index.scss";

const FormStepIndicator = (props) => {
	return (
		<div className='form-steps-indicator flex mt-4 mb-8 justify-center'>
			{formSteps.map((step, index) => {
				return (
					<div
						key={step.type + index}
						className={`step-indicator text-sm border border-solid m-4 sm:m-8 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center ${
							index < props.stepSelected
								? "selected bg-[rgb(101,76,277)] text-white"
								: "not-selected border-[rgb(230,230,230)]"
						}`}>
						{index + 1}
					</div>
				);
			})}
		</div>
	);
};

export default FormStepIndicator;
