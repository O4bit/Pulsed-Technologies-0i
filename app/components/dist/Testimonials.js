"use strict";
exports.__esModule = true;
var testimonials = [
    {
        quote: "StreamLine has revolutionized our team's workflow. It's a game-changer!",
        author: "Jane Doe",
        company: "Tech Innovators Inc."
    },
    {
        quote: "The best project management tool we've ever used. Highly recommended!",
        author: "John Smith",
        company: "Creative Solutions LLC"
    },
    {
        quote: "StreamLine helped us increase productivity by 40%. It's incredible!",
        author: "Emily Johnson",
        company: "Startup Ventures"
    },
];
function Testimonials() {
    return (React.createElement("section", { id: "testimonials", className: "py-20 bg-white" },
        React.createElement("div", { className: "container mx-auto" },
            React.createElement("h2", { className: "text-3xl font-bold text-center mb-12" }, "What Our Customers Say"),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" }, testimonials.map(function (testimonial, index) { return (React.createElement("div", { key: index, className: "bg-gray-50 p-6 rounded-lg" },
                React.createElement("p", { className: "text-lg mb-4" },
                    "\"",
                    testimonial.quote,
                    "\""),
                React.createElement("p", { className: "font-semibold" }, testimonial.author),
                React.createElement("p", { className: "text-sm text-gray-600" }, testimonial.company))); })))));
}
exports["default"] = Testimonials;
