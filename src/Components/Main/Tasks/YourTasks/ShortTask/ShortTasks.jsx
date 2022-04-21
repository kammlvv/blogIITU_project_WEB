/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from "react";
import styleTasks from "./ShortTasks.module.css";
import {NavLink} from 'react-router-dom';
// eslint-disable-next-line require-jsdoc
function ShortTask(props) {
  return (
    <main className={styleTasks.shortTask}>
      <NavLink to= {"/yourTasks/" + props.id}>
        <div className={styleTasks.nameOfTask}>
          <h3>Задание № {props.id} </h3>
          <div className={styleTasks.propsInfoName}>{props.name}</div>
        </div>
        <div className={styleTasks.cost}>
          <div className={styleTasks.propsInfoCost}>{props.cost} &#8376;</div>
        </div>
      </NavLink>
    </main>
  );
}

export default ShortTask;
