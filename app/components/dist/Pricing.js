"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var plans = [
    {
        name: "Basic",
        price: "$9",
        features: ["5 team members", "10 projects", "Basic analytics", "Email support"]
    },
    {
        name: "Pro",
        price: "$29",
        features: ["Unlimited team members", "Unlimited projects", "Advanced analytics", "Priority support"]
    },
    {
        name: "Enterprise",
        price: "Custom",
        features: ["Custom features", "Dedicated account manager", "On-premise deployment", "24/7 phone support"]
    },
];
function Pricing() {
    return (React.createElement("section", { id: "pricing", className: "py-20 bg-gray-50" },
        React.createElement("div", { className: "container mx-auto" },
            React.createElement("h2", { className: "text-3xl font-bold text-center mb-12" }, "Choose Your Plan"),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" }, plans.map(function (plan, index) { return (React.createElement("div", { key: index, className: "bg-white p-8 rounded-lg shadow-md" },
                React.createElement("h3", { className: "text-2xl font-bold mb-4" }, plan.name),
                React.createElement("p", { className: "text-4xl font-bold mb-6" },
                    plan.price,
                    React.createElement("span", { className: "text-lg font-normal text-gray-600" }, "/month")),
                React.createElement("ul", { className: "mb-8" }, plan.features.map(function (feature, featureIndex) { return (React.createElement("li", { key: featureIndex, className: "flex items-center mb-2" },
                    React.createElement(lucide_react_1.Check, { className: "h-5 w-5 text-primary mr-2" }),
                    React.createElement("span", null, feature))); })),
                React.createElement(button_1.Button, { className: "w-full", variant: index === 1 ? "default" : "outline" }, index === 2 ? "Contact Sales" : "Get Started"))); })))));
}
exports["default"] = Pricing;
