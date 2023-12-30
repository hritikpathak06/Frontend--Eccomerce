// Faq.js

import React from 'react';

const Faq = () => {
  const faqData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React using npm or yarn. For example: npm install react',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>

      <div className="grid gap-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
