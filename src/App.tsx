import * as React from 'react';
import * as L from 'leda';
import { Description, Title, Card } from './components';

export const App = () => {
  // state
  const [titleValue, setTitleValue] = React.useState('new card');

  const [descriptionValue, setDescriptionValue] = React.useState('description');

  return (
    <L.Div>
      <Title
        title={titleValue}
        onTitleChange={(value) => {
          setTitleValue(value);
        }}
      />
      <Description
        description={descriptionValue}
        onDescriptionChange={(value) => {
          setDescriptionValue(value);
        }}
      />
      <Card title={titleValue} description={descriptionValue} />
    </L.Div>
  );
};
