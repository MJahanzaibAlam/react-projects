import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import './App.css';

function Page() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}

function App() {
	return (
		<Page />
	);
}

export default App;
