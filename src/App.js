import "./App.css";
import { Post } from "./component/post";

function App() {
	return (
		<div className="App-header">
			<h3 style={{ textAlign: "center" }}>React Query</h3>
			<Post />
		</div>
	);
}

export default App;
