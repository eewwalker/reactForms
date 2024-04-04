import React, {useState} from "react";


/** Form for creating Boxes
 *
 * Props:
 * - addBox()
 *
 * State:
 * -formData: {
 *      height: "",
        width: "",
        backgroundColor: ""
    }

    App -> BoxList -> Box -> NewBoxForm

 */
function NewBoxForm({addBox}) {
    const initialState = {
        height: "",
        width: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(initialState);

    /** Send {height, width, backgroundColor} to parent and clear form */
    function handleSubmit(evt){
        evt.preventDefault();

        addBox(formData);
        setFormData(initialState);
    }

    /** Update local state w/curr state of input elem */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }))
    }

    return(
        <div className="NewBoxForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="height">Height:
                </label>
                    <input id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}/>
                  <label htmlFor="width">Width:
                </label>
                    <input id="width"
                        name="width"
                        value={formData.width}
                        onChange={handleChange}/>
                 <label htmlFor="backgroundColor">Background Color:
                </label>
                    <input id="backgroundColor"
                        name="backgroundColor"
                        value={formData.backgroundColor}
                        onChange={handleChange}/>
                        <button>Add a new box!</button>
            </form>

        </div>
    )
}

export default NewBoxForm;