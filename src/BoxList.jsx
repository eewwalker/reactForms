import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";


/** Creates list with each Bbox by using form input
 *
 * states: boxes = [box, box, ....]
 *
 * App -> BoxList -> Box -> NewBoxForm
 */
function BoxList() {
    const [boxes, setBoxes] = useState([]);

    function removeBox(id) {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
      }

    function renderBoxes() {
        return (
            <div className="BoxList">
                {boxes.map(box => (
                    <div key={box.id}>
                        <Box boxData={box} removeBox={() => removeBox(box.id)}/>
                    </div>
                ))}
        </div>
        )
    }

    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox])
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );
}

export default BoxList;