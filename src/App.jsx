import React, { useState, useEffect } from "react";
import "./App.css";
import FormStepIndicator from "./components/FormStepIndicator";
import { defaultFormData, formSteps } from "./constants";
import Layout from "./Layout";
import CenteredComponent from "./Layout/CenteredComponent";

const App = () => {
	const [stepSelected, setStepSelected] = useState(1);
	const [formData, setFormData] = useState(defaultFormData);

	useEffect(() => {
		let formStep = Number(localStorage.getItem("eden_form_step")) || 1;
		let data =
			JSON.parse(localStorage.getItem("eden_form_data")) || defaultFormData;
		setFormData(data);
		setStepSelected(formStep);
	}, []);

	const handleNextStep = (stepsData) => {
		if (stepSelected < formSteps.length) {
			localStorage.setItem("eden_form_step", stepSelected + 1);
			localStorage.setItem(
				"eden_form_data",
				JSON.stringify({ ...formData, ...stepsData }),
			);
			setFormData((prev) => {
				return { ...prev, ...stepsData };
			});
			setStepSelected((prev) => prev + 1);
		} else {
			handleStepReset();
		}
	};

	const handleStepReset = () => {
		localStorage.removeItem("eden_form_step");
		localStorage.removeItem("eden_form_data");
		setFormData(defaultFormData);
		setStepSelected(1);
	};

	return (
		<Layout>
			<CenteredComponent>
				<div className='app-logo'>
					<img
						src='/assets/images/EdenLogoWithName.png'
						alt='Eden Logo'
						className='mx-auto'
					/>
				</div>
				<FormStepIndicator stepSelected={stepSelected} />
				<div className='md:w-[80%] mx-auto'>
					{formSteps.map((step, index) => {
						return index + 1 === stepSelected ? (
							<div key={step.type + index} className='w-full'>
								{step.component({
									step: step,
									handleNextStep,
									...formData,
								})}
							</div>
						) : (
							""
						);
					})}
				</div>
				<div
					onClick={handleStepReset}
					className='mt-5 sm:mt-unset sm:fixed top-10 right-10 text-slate-400 cursor-pointer'>
					Reset Form
				</div>
			</CenteredComponent>
		</Layout>
	);
};

export default App;
