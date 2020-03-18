import * as React from 'react';
import * as L from 'leda';
import { TaskItem, Task } from '../Task';
import { CardItem, Card } from '../Card/Card';


export const Column = (): React.ReactElement => {
  const [cards, setCards] = React.useState<CardItem[]>([]);

  const handleCardChange = (card: CardItem) => {
    const newCards = cards.map((newItem) => {
      if (newItem.id === card.id) {
        return card;
      }

      return newItem;
    });
    setCards(newCards);
  };

  return (
    <L.Div _column>
      {cards.map((card) => (
        <Card
          card={card}
          onChange={handleCardChange}
        />
      ))}
    </L.Div>
  );
};
