import { FC, FormEvent, useEffect, useState } from 'react';

import Notification from 'components/ui/notification';

export const sendContactData = async (contactDetails: {
  email: string;
  name: string;
  message: string;
}) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
};

const ContactForm: FC = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState<
    'pending' | 'success' | 'error' | null
  >(null);
  const [requestError, setRequestError] = useState<string | null>(null);

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();

    // optional: add client-side validation

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    } catch (error) {
      setRequestError((error as ErrorEvent).message);
      setRequestStatus('error');
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className="my-16 mx-auto w-11/12 max-w-3xl rounded-md bg-gray-100 p-4 text-lg">
      <h1 className="my-2 text-left text-xl md:text-center md:text-4xl">
        How can I help you?
      </h1>
      <form onSubmit={sendMessageHandler}>
        <div className="flex flex-wrap gap-x-4">
          <div className="min-w-[10rem] flex-1">
            <label htmlFor="email" className="my-2 block font-bold">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
              className="w-full resize-none rounded border-gray-400 bg-gray-50 p-2"
              data-testid="email"
            />
          </div>
          <div className="min-w-[10rem] flex-1">
            <label htmlFor="name" className="my-2 block font-bold">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
              className="w-full resize-none rounded border-gray-400 bg-gray-50 p-2"
              data-testid="name"
            />
          </div>
        </div>
        <div className="min-w-[10rem] flex-1">
          <label htmlFor="message" className="my-2 block font-bold">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
            className="w-full resize-none rounded border-gray-400 bg-gray-50 p-2"
            data-testid="message"
          />
          <div className="m-4 text-right">
            <button
              className="rounded border-gray-700 bg-green-700 p-2 text-gray-50 hover:border-green-500 hover:bg-gray-500"
              data-testid="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
