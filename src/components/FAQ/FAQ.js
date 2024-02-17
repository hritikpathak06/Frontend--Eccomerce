// Faq.js

import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-8 w-[90vw]">
      <h1 className="text-6xl font-extrabold text-center text-[#33475b] mb-4">
        Frequently Asked Questions
      </h1>

      <div className="grid gap-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <div className="cursor-pointer" onClick={() => toggleFaq(index)}>
              <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
            </div>
            {openIndex === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

const faqData = [
  {
    question: "How do I place an order?",
    answer:
      'To place an order, simply browse our products, select the items you wish to purchase, and click on the "Add to Cart" button. Once you have added all desired items to your cart, proceed to the checkout page and follow the instructions to complete your purchase.',
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept payment via credit/debit cards, PayPal, and other secure payment gateways. You can choose your preferred payment method at checkout.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "You can cancel or modify your order within 24 hours of placing it. Please contact our customer support team with your order details for assistance.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track the status of your order on our website or the couriers website.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. If you are not satisfied with your purchase, you can return the item for a refund or exchange. Please refer to our Return Policy for more information.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to select countries. Shipping rates and delivery times may vary depending on the destination. Please refer to our Shipping Policy for more information.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support team via email at support@yourwebsite.com or by phone at 123-456-7890. Our customer support team is available Monday to Friday, 9am to 5pm EST.",
  },
  {
    question: "Are my personal and payment details secure?",
    answer:
      "Yes, we take the security of your personal and payment information seriously. We use industry-standard encryption technology to protect your data.",
  },
  {
    question: "Do you offer discounts or promotions?",
    answer:
      "Yes, we offer discounts and promotions from time to time. Sign up for our newsletter to receive exclusive offers and discounts.",
  },
  {
    question: "What if the item I want is out of stock?",
    answer:
      "If the item you want is out of stock, you can sign up to be notified when it becomes available again. Alternatively, you can choose from our selection of similar products that are currently in stock.",
  },
  {
    question: "How do I return a defective product?",
    answer:
      "If you receive a defective product, please contact our customer support team within 7 days of receiving your order. We will arrange for a replacement or refund as per our Return Policy.",
  },
  {
    question: "Can I change the shipping address after placing an order?",
    answer:
      "Unfortunately, we cannot change the shipping address once an order has been placed. Please ensure that your shipping address is correct at the time of checkout.",
  },
  {
    question: "Do you offer gift wrapping services?",
    answer:
      "Yes, we offer gift wrapping services for an additional fee. You can select this option at checkout.",
  },
  {
    question: "How do I unsubscribe from marketing emails?",
    answer:
      'You can unsubscribe from marketing emails by clicking on the "Unsubscribe" link at the bottom of any marketing email you receive from us.',
  },
  {
    question: "What if I have a complaint or feedback?",
    answer:
      "We value your feedback and take complaints seriously. Please contact our customer support team with details of your complaint or feedback, and we will do our best to address it promptly.",
  },
];
