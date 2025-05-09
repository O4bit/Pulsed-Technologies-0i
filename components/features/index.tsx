import React from 'react';

export default function Features() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature cards can be added here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Feature 1</h3>
            <p className="text-gray-600">Description of feature 1 goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
            <p className="text-gray-600">Description of feature 2 goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Feature 3</h3>
            <p className="text-gray-600">Description of feature 3 goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}