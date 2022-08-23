import React from "react";
import ConditionalComponent from "./ConditionalComponent";

const InputField = (props) => {
	return (
		<div className='input-field-container text-center my-6'>
			<ConditionalComponent isVisible={!!props.label}>
				<div className='input-field-label text-sm font-normal mb-2 text-left mx-auto'>
					{props.label}{" "}
					<span className='text-slate-400'>
						{props.isOptional && "(optional)"}
					</span>
				</div>
			</ConditionalComponent>
			<div className='flex mx-auto'>
				<ConditionalComponent isVisible={!!props.prefixText}>
					<div className='border bg-slate-100 border-r-0 rounded-md rounded-r-none flex justify-center items-center text-sm text-gray-400 font-medium overflow-hidden'>
						<span className='px-2 w-full text-ellipsis whitespace-nowrap overflow-hidden'>
							{props.prefixText}
						</span>
					</div>
				</ConditionalComponent>
				<input
					type='text'
					name={props.inputName}
					value={props.inputValue}
					placeholder={props.inputPlaceholder}
					onChange={props.handleChange}
					className={`border border-solid border-[rgb(230,230,230)] py-1 px-2 h-10 rounded-md placeholder:text-sm flex-grow ${
						props.prefixText ? "rounded-l-none" : ""
					}`}
				/>
			</div>
		</div>
	);
};

export default InputField;
