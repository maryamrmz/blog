import { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface NotificationProps {
  title: string;
  message: string | null;
  status: string;
}

const Notification: FC<NotificationProps> = ({ title, status, message }) => {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  });

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = 'bg-green-500 text-gray-800';
  }

  if (status === 'error') {
    statusClasses = 'bg-red-500';
  }

  const cssClasses = `flex justify-between items-center text-gray-100 bg-gray-800 px-16 fixed h-16 b-0 left-0 w-full
  md:w-[40rem] md: left-[calc(50%_-_20rem)]
  ${statusClasses}`;

  return domReady
    ? ReactDOM.createPortal(
        <div className={cssClasses}>
          <h2 className="text-xl">{title}</h2>
          <p>{message}</p>
        </div>,
        document.getElementById('notifications') as HTMLElement
      )
    : null;
};

export default Notification;
