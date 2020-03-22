import * as React from 'react';
import * as L from 'leda';
import shortid from 'shortid';
import { CardItem, Card } from '../Card/Card';
import { CreateCardModal } from '../CreateCardModal/CreateCardModal';


interface ColumnProps {
  title: string,
}

export const Column = (props: ColumnProps): React.ReactElement => {
  const { title } = props;
  const [cards, setCards] = React.useState<CardItem[]>([]);
  const [isModalOpen, setModalOpen] = React.useState(false);

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
      <L.H1>
        {title}
      </L.H1>
      <L.Button _success onClick={() => setModalOpen(true)}>
        Add card
      </L.Button>
      {cards.map((card) => (
        <Card
          card={card}
          onChange={handleCardChange}
        />
      ))}
      <CreateCardModal
        isOpen={isModalOpen}
        onModalClose={() => setModalOpen(false)}
        onCardCreate={(form) => {
          const newCard = {
            id: shortid.generate(),
            title: form.title,
            description: form.description,
            tasks: [],
          };
          setCards([...cards, newCard]);
          setModalOpen(false);
        }}
      />
    </L.Div>
  );
};
