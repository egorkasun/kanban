import * as React from 'react';
import * as L from 'leda';

export interface DescriptionItem {
  description: string,
}

interface DescriptionProps extends DescriptionItem {
  onDescriptionChange: (value: string) => void,
}

export const Description = (props: DescriptionProps): React.ReactElement => {
  const { description, onDescriptionChange } = props;

  return (
    <L.Input
      value={description}
      onChange={(ev) => {
        onDescriptionChange(ev.component.value);
      }}
      placeholder="описание"
    />
  );
};
