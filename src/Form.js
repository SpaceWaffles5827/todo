import { useState } from "react";
import "./Form.css"

function Form({setState}) {

    let [textFeild,setTextFeild] = useState('')

    function hello(event){
        setTextFeild(event.target.value)
    }

    return (
        <div className="Form">
            <div className="box">
                <input type="text" onChange={hello}></input>
                <button onClick={() => setState(textFeild)}>Add ToDo</button>
            </div>
        </div>
    );
}

export default Form;
