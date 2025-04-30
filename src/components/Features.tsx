
import React from "react";

const featuresList = [
  {
    title: "React + TypeScript",
    description: "Modern development with type safety and the best of React.",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
  },
  {
    title: "Shadcn/UI",
    description: "Beautiful UI components built with Radix UI and Tailwind CSS.",
  },
  {
    title: "Responsive Design",
    description: "Looks great on all devices, from mobile to desktop.",
  },
];

const Features = () => {
  return (
    <div className="w-full py-16 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
