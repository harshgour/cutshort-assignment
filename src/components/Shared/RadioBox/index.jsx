import React from "react";
import ConditionalComponent from "../ConditionalComponent";
import "./index.scss";

const RadioBox = (props) => {
	return (
		<div className='radio-box flex mx-auto my-6 justify-center w-full'>
			{props.options.map((option, index) => {
				return (
					<div
						className={`pr-4 last:pr-0 w-1/2 ${
							props.selected === option.value ? "selected" : "not-selected"
						}`}
						key={option.name + index}>
						<input
							type='radio'
							name={option.groupName}
							id={option.name}
							value={option.value}
							className='radio-input'
							onChange={props.handleChange}
						/>
						<label htmlFor={option.name}>
							<div className='option-box cursor-pointer h-44 py-3 px-4 text-sm leading-6 text-gray-600 hover:text-gray-800 rounded border border-slate-200 bg-white text-left'>
								<ConditionalComponent isVisible={!!option.icon}>
									<div className='option-icon text-2xl mb-4'>
										{option.icon()}
									</div>
								</ConditionalComponent>
								<div className='title font-bold my-2 text-sm sm:text-md'>
									{option.title || option.name}
								</div>
								<ConditionalComponent isVisible={!!option.description}>
									<div className='description my-2 text-sm sm:text-md'>
										{option.description}
									</div>
								</ConditionalComponent>
							</div>
						</label>
					</div>
				);
			})}
		</div>
	);
};

export default RadioBox;
