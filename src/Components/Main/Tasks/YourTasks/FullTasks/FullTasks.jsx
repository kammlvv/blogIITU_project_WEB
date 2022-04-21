/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from "react";
import styleTasks from "./FullTasks.module.css";
// eslint-disable-next-line require-jsdoc
function FullTasks(props) {
  const tenge = "tenge";
  return (
    <main className={styleTasks.fullTask}>
      <div className={styleTasks.nameOfTask}>
        <h3>Название задания </h3>
        <div className={styleTasks.propsInfo}>{props.name}</div>
      </div>
      <div className={styleTasks.category}>
        <h3>Категория задания </h3>
        <div className={styleTasks.propsInfo}>{props.category}</div>
      </div>
      <div className={styleTasks.textArea}>
        <h3>Описание задания </h3>
        <div className={styleTasks.propsInfo}>{props.description}</div>
      </div>
      <div className={styleTasks.choose}>
        <h3>Прикрепленный файл </h3>
        <div className={styleTasks.propsInfo}>{props.additional}</div>
      </div>
      <div className={styleTasks.cost}>
        <h3>Цена</h3>
        <div className={styleTasks.propsInfo}>{props.cost} {tenge} </div>
      </div>
      <div className={styleTasks.timeDate}>
        <h3>Дедлайн </h3>
        <div className={styleTasks.propsInfo}>{props.deadline}</div>
      </div>
    </main>
  );
}

export default FullTasks;
