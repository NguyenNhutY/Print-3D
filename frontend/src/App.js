import GCodeSender from "./components/GCodeSender";
import ModelViewer from "./components/ModelViewer";

function App() {
    return (
        <div>
            <h1>Điều Khiển Máy In 3D</h1>
            <GCodeSender />
            <ModelViewer modelPath="/models/sample.stl" />
        </div>
    );
}

export default App;
