import React, { useState } from "react";

export const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(100);

    const addBox = (e) => {
        e.preventDefault();

        const newBox = {
            size: size,
            color,
        };

        props.addBox(newBox);

        setColor("");
        setSize(100);
    };

    return (
        <div>
            <form onSubmit={addBox}>
                <label>Color</label>
                <input
                    type="text"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <label>Size</label>
                <input
                    type="number"
                    name="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default BoxForm;
