import { useState } from "react";

function Form({setState}) {

    let [textFeild,setTextFeild] = useState('')

    function hello(event){
        setTextFeild(event.target.value)
    }

    return (
        <div className="Form">
            <input type="text" onChange={hello}></input>
            <button onClick={() => setState(textFeild)}>test</button>
        </div>
    );
}

export default Form;
