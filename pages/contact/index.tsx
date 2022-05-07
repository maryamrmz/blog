import { FC } from 'react';
import Head from 'next/head';

import ContactForm from 'components/contact/contact-form';

const Contact: FC = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
