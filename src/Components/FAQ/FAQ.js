import React from 'react';
import { Collapse } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    fontFamily: 'El Messiri',
  };

const items  = [
  {
    key: '1',
    label: 'Do you offer international shipping?',
    children: <p>Yes, we provide international shipping to many countries. Shipping fees and delivery times may vary depending on the destination.</p>,
  },
  {
    key: '2',
    label: 'What should I do if I have a reaction to one of your products?',
    children: <p> If you experience any adverse reactions to our products, please discontinue use immediately and consult a healthcare professional if necessary.</p>,
  },
  {
    key: '3',
    label: 'Are your products suitable for sensitive skin?',
    children: <p>Many of our products are formulated to be gentle and suitable for sensitive skin, but we recommend doing a patch test before full application.</p>,
  },
  {
    key: '4 ',
    label: 'What is the shelf life of your products?',
    children: <p>Our products typically have a shelf life of 12 to 24 months, depending on the specific item. Please check the packaging for the expiration date.</p>,
  },
  {
    key: '5',
    label: 'Are your products tested on animals?',
    children: <p>No, we are committed to being cruelty-free. Our products are not tested on animals .</p>,
  },
];
const App = () => <Collapse accordion items={items} />;
export default App;


