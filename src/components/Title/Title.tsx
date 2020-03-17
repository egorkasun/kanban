import * as React from 'react';
import * as L from 'leda';

export interface TitleItem {
  title: string,
}

interface TitleProps extends TitleItem {
  onTitleChange: (value: string) => void,
}

export const Title = (props: TitleProps): React.ReactElement => {
  const { title, onTitleChange } = props;

  return (
    <L.Input
      value={title}
      onChange={(ev) => {
        onTitleChange(ev.component.value);
      }}
      placeholder="Заголовок"
    />
  )
}