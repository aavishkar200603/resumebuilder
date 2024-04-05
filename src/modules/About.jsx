import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const questions = [
    {
      id: 1,
      question: "How can a resume builder help me?",
      answer:
        "A resume builder simplifies the process of creating a professional resume. It provides templates, guidance, and formatting options to help you showcase your skills and experiences effectively.",
    },
    {
      id: 2,
      question: "What should I include in my resume?",
      answer:
        "Include your contact information, a compelling summary, work experience, education, skills, and any relevant certifications or achievements. Tailor your resume to the job you're applying for.",
    },
    {
      id: 3,
      question: "Are there specific resume formats I should use?",
      answer:
        "Yes, there are various resume formats such as chronological, functional, and combination. The choice depends on your career history and the type of job you're applying for. Our builder offers templates for different formats.",
    },
    {
      id: 4,
      question: "How can I make my resume stand out?",
      answer:
        "To make your resume stand out, focus on quantifiable achievements, use action verbs, tailor it to the job description, and showcase your unique skills. Our builder provides tips to enhance your resume's impact.",
    },
    {
      id: 5,
      question: "Can I customize the resume templates?",
      answer:
        "Yes, our resume builder allows you to customize templates. You can adjust fonts, colors, and layouts to match your personal style while ensuring a professional appearance.",
    },
    {
      id: 6,
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We prioritize the security of your personal information. All data is encrypted, and we follow industry standards to protect your privacy.",
    },
  ];

  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleQuestionClick = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="mx-auto max-w-7xl px-2 md:px-0">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-yellow-300">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed">
              Learn more about our resume builder application.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
            {questions.map((q) => (
              <div key={q.id}>
                <h2
                  className="text-xl font-semibold cursor-pointer hover:text-yellow-500 transition-colors duration-300"
                  onClick={() => handleQuestionClick(q.id)}
                >
                  {q.question}
                </h2>
                {expandedQuestion === q.id && (
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-400">
                    {q.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center">
            Can't find what you're looking for?{" "}
            <Link to={"/Context"} className="font-semibold hover:underline">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;




