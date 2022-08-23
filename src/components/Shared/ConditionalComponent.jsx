import React from "react";

const ConditionalComponent = (props) => {
	return <>{props.isVisible && props.children}</>;
};

export default ConditionalComponent;
