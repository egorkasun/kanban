import * as React from 'react';
import * as L from 'leda';
// описание типов входных данных в пропс
interface CardProps {
  // заголовок
  title: string,
  // описание карточки
  description?: string,
}

export const Card = (props: CardProps): React.ReactElement => {
  const { title, description } = props; /* деструктуризация пропс, то есть вместо объекта получаются
переменные const title и т.д. */

  return (
    <L.Div>
      <L.H1>
        {title}
      </L.H1>
      <L.P>
        {description}
      </L.P>
      <L.Ul>

      </L.Ul>
      <L.Input />
    </L.Div>
  );
};
