// Faq.js

import React, { useState } from 'react';

const Faq = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-8 w-[90vw]">
      <h1 className="text-6xl font-extrabold text-center text-[#33475b] mb-4">Frequently Asked Questions</h1>

      <div className="grid gap-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <div
              className="cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
            </div>
            {openIndex === index && (
              <p>{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;


const faqData = [
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'How do I install React?',
    answer: 'You can install React using npm or yarn. For example: npm install react',
  },
  {
    question: 'What are React components?',
    answer: 'React components are the building blocks of a React application. They are reusable and self-contained pieces of code that define how a part of the user interface should appear and behave.',
  },
  {
    question: 'Can I use React with other libraries or frameworks?',
    answer: 'Yes, React can be used alongside other libraries or frameworks. It is commonly used with libraries like Redux for state management and frameworks like Next.js for server-side rendering.',
  },
  {
    question: 'What is JSX?',
    answer: 'JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It allows you to write HTML elements and components in a syntax similar to XML or HTML.',
  },
  {
    question: 'How does React handle data?',
    answer: 'React uses a unidirectional data flow. Data is passed down from a parent component to its child components through props. State is used to manage component-specific data.',
  },
  {
    question: 'What is the virtual DOM?',
    answer: 'The virtual DOM (Document Object Model) is a programming concept where an ideal, or virtual, representation of a user interface is kept in memory. React uses a virtual DOM to improve performance by updating only the parts of the actual DOM that have changed.',
  },
  {
    question: 'Can I use React with TypeScript?',
    answer: 'Yes, React can be used with TypeScript. You can create React components and applications with TypeScript to add static typing to your code.',
  },
  {
    question: 'How do I handle forms in React?',
    answer: 'In React, you can handle forms by using controlled components. A controlled component is a component that renders a form and controls the form elements within the component’s state.',
  },
  {
    question: 'What is the significance of keys in React lists?',
    answer: 'Keys are used in React lists to give elements a stable identity. They help React identify which items have changed, are added, or are removed in a list. Keys should be unique among siblings but do not need to be globally unique.',
  },
  {
    question: 'What is the role of setState()?',
    answer: 'The setState() method is used in React to update the state of a component. It triggers a re-render of the component and its child components. It can be called with an object or a function that returns an object representing the new state.',
  },
  {
    question: 'How can I make AJAX requests in React?',
    answer: 'You can make AJAX requests in React using the Fetch API, Axios, or other HTTP libraries. You can perform asynchronous operations, such as fetching data from a server, in the componentDidMount lifecycle method or by using hooks like useEffect.',
  },
  {
    question: 'What is React Router?',
    answer: 'React Router is a library for routing in React applications. It enables navigation and URL routing in a React application by providing a declarative way to map components to specific routes.',
  },
  {
    question: 'How can I deploy a React app?',
    answer: 'You can deploy a React app by using platforms like Netlify, Vercel, GitHub Pages, or hosting services that support static file hosting. Create a production build of your app using tools like npm or yarn, and then deploy the generated build files.',
  },
  {
    question: 'What is the significance of useEffect()?',
    answer: 'useEffect() is a React hook used for side effects in functional components. It allows you to perform actions such as data fetching, subscriptions, or manually changing the DOM after the component has been rendered. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.',
  },
];