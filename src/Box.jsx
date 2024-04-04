import React from "react";
import NewBoxForm from "./NewBoxForm";


/** Creates a Box by using form input
 *
 * props: formData: {height, width, backgroundColor}
 *
 * App -> BoxList -> Box -> NewBoxForm
 */
function Box({boxData, removeBox}) {

  const myStyles = {
    height: `${boxData.height}px`,
    width: `${boxData.width}px`,
    backgroundColor: boxData.backgroundColor,
  }



    return (
      <div>
        <div style={myStyles}></div>
        <button onClick={removeBox}>Remove the Box!</button>
      </div>
    )
}

export default Box;