import "./App.css";
import { BoxForm } from "./components/BoxForm";
import { Box } from "./components/Box";
import { useState } from "react";

function App() {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes([newBox, ...boxes]);
    };

    return (
        <div className="App">
            <BoxForm addBox={addBox} />

            {boxes.map((box, index) => (
                <Box key={index} size={box.size} color={box.color} />
            ))}
        </div>
    );
}

export default App;
