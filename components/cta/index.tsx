import React from 'react';

export default function CTA() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers using our platform today.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
}