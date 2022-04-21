/* eslint-disable linebreak-style */
import React from 'react';
import styleMain from './Main.module.css';
// eslint-disable-next-line require-jsdoc
function Main() {
  return (
    <main className={styleMain.main}>
      <div className={styleMain.slogan}>
        <h1 className={styleMain.slogan1}>
          Решим вашу проблему за считанные минуты
        </h1>
        <p className={styleMain.slogan2}>
          Найдем надёжного исполнителя для решения ваших задач
        </p>
      </div>

      <div className={styleMain.searchBox}>
        <input
          className={styleMain.search}
          type="text"
          placeholder="Напишите, с каким предметом вам помочь"
        />
        <button className={styleMain.searchButton} onClick="newElement()">
          Заказать задачу
        </button>
      </div>


    </main>
  );
}

export default Main;
