import * as React from 'react';
import * as L from 'leda';
import { TaskItem, Task } from '../Task';

export interface CardItem {
  id: string,
  title: string,
  description?: string,
  tasks: TaskItem[],
}
interface CardProps {
  card: CardItem,
  onChange: (card: CardItem) => void,
}
export const Card = (props: CardProps): React.ReactElement => {
  const { card, onChange } = props;

  const [inputValue, setInputValue] = React.useState('');
  const handleTaskChange = (id: string) => {
    const newTasks = card.tasks.map((newItem) => {
      if (newItem.id === id) {
        return {
          ...newItem,
          isDone: !newItem.isDone,
        };
      }

      return newItem;
    });
    onChange({
      ...card,
      tasks: newTasks,
    });
  };

  const handleTaskRemove = (id: string) => {
    const newTasks = card.tasks.filter((newItem) => newItem.id !== id);
    onChange({
      ...card,
      tasks: newTasks,
    });
  };

  const handleInputChange = (ev: L.InputTypes.ChangeEvent) => {
    setInputValue(ev.component.value); /* введеный текст передается в inputValue c помощью библиотечной
    функции onChange, которой всегда передается функция с аргументом ev */
  };

  const handleInputEnterPress = () => {
    if (inputValue === '') {
      return; // так прерываем функцию
    }

    const newTask: TaskItem = {
      id: new Date().getTime().toString(), // создаём id по текущему времени
      title: inputValue,
      isDone: false,
    };
    onChange({
      ...card,
      tasks: [...card.tasks, newTask],
    });
    setInputValue('');
  };

  return (
    <L.Div _card>
      <L.H1 _title>
        {card.title}
      </L.H1>
      <L.P>
        {card.description}
      </L.P>
      <L.Ul>
        {card.tasks.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            title={item.title}
            isDone={item.isDone}
            onTaskChange={handleTaskChange}
            onTaskRemove={handleTaskRemove}
          />
        ))}
      </L.Ul>
      <L.Input
        value={inputValue} // отображается в поле ввода то что находится а inputValue
        onChange={handleInputChange}
        placeholder="Добавьте задачу"
        onEnterPress={handleInputEnterPress}
      />
    </L.Div>
  );
};
