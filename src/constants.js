import {
	WelcomeForm,
	WorkspaceForm,
	TeamSelectForm,
	SummaryScreen,
} from "./components/FormScreens";
import { IoIosPeople } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";

export const formSteps = [
	{
		type: "welcome_intro_form",
		title: "Welcome! First things first...",
		description: "You can always change them later.",
		primaryButtonText: "Create Workspace",
		component: (props) => <WelcomeForm props={props} />,
	},
	{
		type: "workspace_form",
		title: "Let's set up a home for all your work",
		description: "You can always create another workspace later.",
		primaryButtonText: "Create Workspace",
		component: (props) => <WorkspaceForm props={props} />,
	},
	{
		type: "team_select_form",
		title: "How are you planning to use Eden?",
		description: "We'll streamline your setup experience accordingly.",
		primaryButtonText: "Create Workspace",
		component: (props) => <TeamSelectForm props={props} />,
	},
	{
		type: "success_page",
		icon: "success",
		title: (name) => `Congratulations, ${name || "Eden"}!`,
		description: "You have completed onboarding, you can start using the Eden!",
		primaryButtonText: "Launch Eden",
		component: (props) => <SummaryScreen props={props} />,
	},
];

export const defaultFormData = {
	fullName: "",
	displayName: "",
	workspaceName: "",
	workspaceUrl: "",
	teamStatus: "individual",
};

export const teamFormRadioOptions = [
	{
		title: "For myself",
		name: "individual",
		value: "individual",
		groupName: "teamStatus",
		description: "Write better. Think more clearly. Stay organized.",
		icon: () => <BsFillPersonFill />,
	},
	{
		title: "With my team",
		name: "team",
		value: "team",
		groupName: "teamStatus",
		description: "Wikis, docs, tasks & projects, all in one place.",
		icon: () => <IoIosPeople />,
	},
];
