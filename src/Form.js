import styles from "./index.module.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
      <input 
        type="text" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label><br></br>
      <label>Fats:
        <input 
          type="text" 
          value={inputs.fats || ""} 
          onChange={handleChange}
        />
        </label><br></br>
      <label>Protein:
        <input 
          type="text" 
          value={inputs.protein || ""} 
          onChange={handleChange}
        />
        </label><br></br>
      <label>Carbohydrates:
        <input 
          type="text" 
          value={inputs.carbohydrates || ""} 
          onChange={handleChange}
        />
        </label><br></br>
        <input type="submit" />
    </form>
  )
}

export default Form