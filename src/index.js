import React from 'react';
import ReactDOM from 'react-dom/client';
import Item from './Item.js'
import Form from './Form.js'
import styles from "./index.module.css";


const HTML_body = (
<div>
  <h1>Ham logger</h1>
  <div>
    <hr></hr>
    <h2>Today</h2>
    <div className='todaysHam'>
      <div className={styles.center}>
        <button className={styles.add_food}>Add</button>
        <button className={styles.add_food}>Create</button>
      </div>
      <Form></Form>
      <Item name="Avocado"></Item>
      <Item name="Burrata"></Item>
    </div>
    <div>
      <hr></hr>
      <h2>Total</h2>
      <div>
        <p>Fats:</p>
        <p>Protein:</p>
        <p>Carbohydrates:</p>
      </div>
    </div>
  </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(HTML_body);


//class Food {
//  constructor(name) {
//    this.name = name;
//    this.fats = 0;
//    this.carbohydrates = 0;
//    this.protein = 0;
//  }
//}
//
//class Recipe extends Food {
//  constructor(name) {
//    super(name)
//    this.ingredients = [] //(food,content)
//  }
//}
//
//var food = {
//  name: 0,
//  fats: 0,
//  carbohydrates: 0,
//  protein: 0
//}
//
//
//const new_food = new Food("Burrata");