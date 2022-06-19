import {
	useEffect,
	useState
} from "react";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

import {
	GlobalStyles,
	PageContainer
} from "./styles/globalStyles";

function App() {
	const [APIData, setAPIData] = useState<APIDataTypes>(APIDataFallback);

	useEffect(() => {
		fetch("./server.json")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setAPIData(data);
			})
			.catch((error) => {
				setAPIData(APIDataFallback);
			});
	}, []);

	return (
		<PageContainer>
			<GlobalStyles />

			<Header APIData={APIData} />
			<Main APIData={APIData} />
			<Footer />
		</PageContainer>
	);
}

export interface APIDataTypes {
	ingredients: {
		title: string;
		items: string[];
	}[];
	instructions: string[];
	recipeInformation: {
		image: string;
		information: string;
		title: string;
	};
	timeBlockInformation: {
		cookTime: string;
		prepTime: string;
		totalTime: string;
		yields: string;
	};
};

const APIDataFallback = {
	ingredients: [{
		title: "",
		items: [""]
	}],
	instructions: [""],
	recipeInformation: {
		image: "",
		information: "",
		title: ""
	},
	timeBlockInformation: {
		cookTime: "",
		prepTime: "",
		totalTime: "",
		yields: ""
	}
};

export default App;