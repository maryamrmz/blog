import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from '.';

const dummy_data = {
  email: 'dummy-email@gmail.com',
  name: 'dummy-name',
  message: 'dummy-message',
};

jest.mock('components/ui/notification.tsx', () => () => {});
global.fetch = jest.fn().mockResolvedValueOnce(JSON.stringify(dummy_data));

const getCommentFormElements = () => ({
  email: screen.getByTestId('email'),
  name: screen.getByTestId('name'),
  message: screen.getByTestId('message'),
  submit: screen.getByTestId('submit'),
});

test('should submit the form correctly', async () => {
  render(<ContactForm />);

  const { email, name, message, submit } = getCommentFormElements();

  await userEvent.type(email, dummy_data.email);
  await userEvent.type(name, dummy_data.name);
  await userEvent.type(message, dummy_data.message);
  userEvent.click(submit);

  await waitFor(() =>
    expect(fetch).toHaveBeenCalledWith(
      '/api/contact',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(dummy_data),
      })
    )
  );
});
