import React from 'react';
import Article from './Article';

const Content = () => {
  const item = [
    {
      title: '15 полезных однострочных выражений JavaScript',
      text: 'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners',
      id: 1,
    },
    {
      title: 'Полиморфизм простыми словами',
      text: 'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё',
      id: 2,
    },
    {
      title: 'Начало работы с Node.js',
      text: 'Node Hero: Глава 1',
      id: 3,
    },
    {
      title:
        'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
      text: 'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).',
      id: 4,
    },
    {
      title: '8 практичных хитростей веб-разработчика применить немедленно!',
      text: 'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately',
      id: 5,
    },
    {
      title: 'Насколько JavaScript сильный?',
      text: 'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?',
      id: 6,
    },
    {
      title: 'Изучите CSS-переменные за 5 минут',
      text: 'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.',
      id: 7,
    },
    {
      title: 'Создание MEVN-приложения (Часть 1/2)',
      text: 'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)',
      id: 8,
    },
    {
      title: 'Реактивность Vue.js',
      text: 'Реактивность фреймворка Vue.js и использование метода Vue.set',
      id: 9,
    },
    {
      title: 'Микроптимизации производительности и JavaScript',
      text: 'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…',
      id: 10,
    },
    {
      title: 'Девшахта-подкаст',
      text: '#108: Производительность кода — это важнейший критерий качества?',
      id: 11,
    },
    {
      title: 'Одна из самых красивых идей в информатике: Y-Combinator',
      text: 'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”',
      id: 12,
    },
  ];

  return (
    <main>
      <section className="posts">
        <div className="container">
          <h1>Posts</h1>
          <ul className="list">
            {item.map(({ title, text, id }) => {
              return <Article title={title} text={text} key={id} />;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Content;