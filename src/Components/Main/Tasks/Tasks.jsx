/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react';
import styleTasks from './Tasks.module.css';


// eslint-disable-next-line require-jsdoc
function Tasks() {
  return (
    <main className={styleTasks.makeTask}>
      <div className={styleTasks.searchBox}>
        <div className={styleTasks.nameOfTask}>
          <h3>Название задания </h3>
          <input
            className={styleTasks.nameTask}
            type="text"
            placeholder="Название задания"
          />
        </div>
        <div className={styleTasks.category}>
          <h3>Выберите категорию </h3>
          <select className={styleTasks.selectSubjects}>
            <option value="default" selected>
              Выберите категорию
            </option>
            <optgroup label="Технические науки">
              <option value="TS1">Архитектура</option>
              <option value="TS2">Биотехнология</option>
              <option value="TS3">Информатика</option>
              <option value="TS4">Кораблестроение</option>
              <option value="TS5">Космонавтика</option>
              <option value="TS6">Материаловедение</option>
              <option value="TS7">Механика</option>
              <option value="TS8">Машиностроение</option>
              <option value="TS9">Системотехника</option>
              <option value="TS10">Химическая технология</option>
              <option value="TS11">Электротехника</option>
              <option value="TS11">Ядерная энергетика</option>
            </optgroup>

            <optgroup label="Естественные науки">
              <option value="NS1">Физика</option>
              <option value="NS2">Химия</option>
              <option value="NS3">Биология</option>
              <option value="NS4">Астрономия</option>
              <option value="NS5">География</option>
              <option value="NS6">Геология</option>
              <option value="NS7">Экология</option>
              <option value="NS8">Геофизика</option>
              <option value="NS9">Астрофизика</option>
              <option value="NS10">Биофизика</option>
              <option value="NS11">Биохимия</option>
              <option value="NS12">Физическая химия</option>
              <option value="NS13">Химическая физика</option>
              <option value="NS14">Геохимия</option>
              <option value="NS15">Метеорология</option>
              <option value="NS16">Климатология</option>
            </optgroup>
            <optgroup label="Гуманитарные  науки">
              <option value="HS1">Искусствоведение</option>
              <option value="HS2">Культурная география</option>
              <option value="HS3">Культурология</option>
              <option value="HS4">Литература</option>
              <option value="HS5">Паремиология</option>
              <option value="HS6">Педагогика</option>
              <option value="HS7">Постструктурализм</option>
              <option value="HS8">Психология</option>
              <option value="HS9">Религиоведение</option>
              <option value="HS10">Риторика</option>
              <option value="HS11">Филология</option>
              <option value="HS12">Философия</option>
              <option value="HS13">История</option>
              <option value="HS14">Антропология</option>
              <option value="HS15">Этнография</option>
              <option value="HS16">Когнитивистика</option>
            </optgroup>

            <optgroup label="Формальные  науки">
              <option value="FS1">Математика</option>
              <option value="FS2">Логика</option>
              <option value="FS3">Кибернетика</option>
              <option value="FS4">Теоретическая информатика</option>
              <option value="FS5">Теория информации</option>
              <option value="FS6">Теория систем</option>
              <option value="FS7">Теория принятия решений</option>
              <option value="FS8">Статистика</option>
            </optgroup>
          </select>
        </div>
        <div className={styleTasks.textArea}>
          <h3>Ваше задание </h3>
          <textarea
            className={styleTasks.text}
            type="text"
            placeholder="Опишите свою проблему тут.."
          />
        </div>
        <div className={styleTasks.choose}>
          <h3>Или прикрепите файл </h3>
          <input type="file" accept="image/*" className={styleTasks.chooseFile} />
        </div>
        <div className={styleTasks.cost}>
          <h3>Цена </h3>
          <input
            className={styleTasks.costTask}
            type="number"
            min={100}
            max={10000000}
            step={50}
            placeholder="Цена &#8376;"
          />
        </div>
        <div className={styleTasks.timeDate}>
          <h3>Укажите дедлайн </h3>
          <input type="date" className={styleTasks.date}/>
          <input type="time" className={styleTasks.time}/>

        </div>
        <div className={styleTasks.send}>
          <button className={styleTasks.sendFile}>Создать задание</button>
        </div>
      </div>
    </main>
  );
}

export default Tasks;
