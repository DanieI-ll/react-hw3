import React, { useState } from 'react';
import styles from './List.module.css';

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },

    { id: 2, name: 'Мария', age: 22 },

    { id: 3, name: 'Алексей', age: 21 },

    { id: 4, name: 'Марина', age: 19 },

    { id: 5, name: 'Даша', age: 23 },

    { id: 6, name: 'Глеб', age: 24 },

    { id: 7, name: 'Дима', age: 18 },

    { id: 8, name: 'Гриша', age: 20 },

    { id: 9, name: 'Серафим', age: 21 },
  ]);

  // Функция для удаления человека по id
  const removePerson = (id) => {
    setPeople(prevPeople => prevPeople.filter(person => person.id !== id));
  };

  return (
    <div>
      <h2>Список приглашенных</h2>
      <div>
        <ul>
          {people.map((person) => (
            <li className={styles.list} key={person.id}>
              {person.name} ({person.age} лет)
              <div>
                <button className={styles.listBtn} onClick={() => removePerson(person.id)}>
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
