import "./App.css";
import { MainFeed } from "./ImageDisplay/MainFeed/index.js";
import { FeaturedImage } from "./ImageDisplay/FeaturedImage/index.js";

function App() {
    return (
        <div className="App">
            <h1>pampot</h1>
            <button>+</button>
            <FeaturedImage />
            <MainFeed />
            <button>hello</button>
        </div>
    );
}

export default App;
