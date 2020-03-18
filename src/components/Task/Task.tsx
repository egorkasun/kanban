import * as React from 'react';
import * as L from 'leda';
// interface это ключевое слово для создания структура объекта
export interface TaskItem {
  id: string,
  // заголовок
  title: string,
  isDone: boolean,
}
// описание типов входных данных в пропс
interface TaskProps extends TaskItem {
  onTaskRemove: (id: string) => void,
  onTaskChange: (id: string) => void,
}
// React.ReactElement - то что функция возвращает. указываем это на всякий случай
export const Task = (props: TaskProps): React.ReactElement => {
  const {
    title, id, isDone, onTaskRemove, onTaskChange,
  } = props; /* деструктуризация пропсов, то есть вместо объекта получаются
переменные const title и т.д. просто чтобы не писать каждый раз props.title и т.д. */

  return (
    <L.Li _flexRow _alignItemsCenter>
      <L.CheckBox
        value={isDone}
        onChange={() => onTaskChange(id)}
        wrapperRender={({ elementProps, Element }) => <Element {...elementProps} _grow1 />}
      >
        <L.H4>
          {title}
        </L.H4>
      </L.CheckBox>
      <L.Span _fas _faTimes _faLg _pointer onClick={() => onTaskRemove(id)} />
    </L.Li>
  );
};
