import * as React from 'react';
import * as L from 'leda';

interface Form {
  title: string,
  description: string,
}

interface CreateCardModalProps {
  isOpen: boolean,
  onCardCreate: (card: Form) => void,
  onModalClose: () => void,
}

export const CreateCardModal = (props: CreateCardModalProps): React.ReactElement => {
  const { isOpen, onCardCreate, onModalClose } = props;

  const [form, setForm] = React.useState<Form>({
    title: '',
    description: '',
  });

  const handleChange = (ev: L.InputTypes.ChangeEvent) => {
    if (ev.component.name) {
      setForm({
        ...form,
        [ev.component.name]: ev.component.value,
      });
    }
  };

  return (
    <L.Modal
      isOpen={isOpen}
      onClose={onModalClose}
    >
      <L.ModalHeader>
        Creating card
      </L.ModalHeader>
      <L.ModalBody>
        <L.Div _inner>
          <L.Div>
            Input title:
          </L.Div>
          <L.Input
            form="modal"
            name="title"
            value={form.title} // обращение к полю объекта
            onChange={handleChange}
            isRequired
            requiredMessage="Please input title!"
            _width40
          />
          <L.Div>
            Input description:
          </L.Div>
          <L.Input
            form="modal"
            name="description"
            value={form.description} // обращение к полю объекта
            onChange={handleChange}
            _width40
          />
        </L.Div>
      </L.ModalBody>
      <L.ModalFooter>
        <L.Div>
          <L.Button onClick={onModalClose}>
            Cancel
          </L.Button>
          {' '}
          <L.Button
            _success
            form="modal"
            onClick={() => onCardCreate(form)}
          >
            Create
          </L.Button>
        </L.Div>
      </L.ModalFooter>
    </L.Modal>
  );
};
