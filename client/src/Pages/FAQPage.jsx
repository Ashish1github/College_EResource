import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const API = "http://localhost:5001/api/faqs";

export default function FAQs() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setFaqs)
      .catch(console.error);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-10">
          Frequently Asked Questions
        </h1>

        {faqs.length === 0 ? (
          <p className="text-center text-gray-400">No FAQs available yet.</p>
        ) : (
          <div className="space-y-4">
            {faqs.map(({ _id, question, answer }, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={_id}
                  className="glass rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-blue-500/20"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <h3 className="text-lg font-semibold">{question}</h3>
                    {isOpen ? (
                      <FaChevronUp className="text-blue-400" />
                    ) : (
                      <FaChevronDown className="text-blue-400" />
                    )}
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-300">{answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
