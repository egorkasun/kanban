import * as React from 'react';
import * as L from 'leda';
import { TaskItem, Task } from '../Task';
// описание типов входных данных в пропс
interface CardProps {
  // заголовок
  title: string,
  // описание карточки
  description?: string,
}
// React.ReactElement - то что функция возвращает. указываем это на всякий случай
export const Card = (props: CardProps): React.ReactElement => {
  const { title, description } = props; /* деструктуризация пропс, то есть вместо объекта получаются
переменные const title и т.д. просто чтобы не писать каждый раз props.title и т.д. */

  const [tasks, setTasks] = React.useState<TaskItem[]>([]); // создаем новое состояние - массив списка задач
  /* аналог того что выше
  const state = React.useState<TaskItem[]>([]);
  const tasks = state[0];
  const setTasks = state[1]; */
  const [inputValue, setInputValue] = React.useState(''); /* создаем состояние(inputValue) которое будет
   отображено в поле ввода */

  return (
    <L.Div _card>
      <L.H1 _title>
        {title}
      </L.H1>
      <L.P>
        {description}
      </L.P>
      <L.Ul>
        {tasks.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            title={item.title}
            isDone={item.isDone}
            onTaskChange={() => {
              const newTasks = tasks.map((newItem) => {
                if (newItem.id === item.id) {
                  return {
                    ...item,
                    isDone: !item.isDone,
                  };
                }

                return newItem;
              });
              setTasks(newTasks);
            }}
            onTaskRemove={() => {
              const newTasks = tasks.filter((newItem) => newItem.id !== item.id);
              setTasks(newTasks);
            }}
          />
        ))}
      </L.Ul>
      <L.Input
        value={inputValue} // отображается в поле ввода то что находится а inputValue
        onChange={(ev) => {
          setInputValue(ev.component.value); /* введеный текст передается в inputValue c помощью библиотечной
          функции onChange, которой всегда передается функция с аргументом ev */
        }}
        placeholder="Добавьте задачу"
        onEnterPress={() => {
          if (inputValue === '') {
            return; // так прерываем функцию
          }

          const newTask: TaskItem = {
            id: new Date().getTime().toString(), // создаём id по текущему времени
            title: inputValue,
            isDone: false,
          };
          setTasks([...tasks, newTask]);
          setInputValue('');
        }}
      />
    </L.Div>
  );
};
