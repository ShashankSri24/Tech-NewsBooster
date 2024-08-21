import "./App.css";
import Fetch from "./component/fetch";
import Search from "./component/search";
import Page from "./component/pagination";
function App() {
  return (
    <div className="App">
      <Search />
      <Fetch />
      <Page />
    </div>
  );
}

export default App;
