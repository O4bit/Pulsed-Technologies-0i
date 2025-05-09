"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var features = [
    {
        icon: React.createElement(lucide_react_1.CheckCircle, { className: "h-8 w-8 text-primary" }),
        title: "Task Management",
        description: "Organize and prioritize tasks with ease."
    },
    {
        icon: React.createElement(lucide_react_1.Zap, { className: "h-8 w-8 text-primary" }),
        title: "Real-time Collaboration",
        description: "Work together seamlessly in real-time."
    },
    {
        icon: React.createElement(lucide_react_1.Users, { className: "h-8 w-8 text-primary" }),
        title: "Team Communication",
        description: "Stay connected with built-in messaging."
    },
    {
        icon: React.createElement(lucide_react_1.TrendingUp, { className: "h-8 w-8 text-primary" }),
        title: "Analytics Dashboard",
        description: "Track progress and gain insights with powerful analytics."
    },
];
function Features() {
    return (React.createElement("section", { id: "features", className: "py-20 bg-gray-50" },
        React.createElement("div", { className: "container mx-auto" },
            React.createElement("h2", { className: "text-3xl font-bold text-center mb-12" }, "Key Features"),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" }, features.map(function (feature, index) { return (React.createElement("div", { key: index, className: "bg-white p-6 rounded-lg shadow-md" },
                React.createElement("div", { className: "mb-4" }, feature.icon),
                React.createElement("h3", { className: "text-xl font-semibold mb-2" }, feature.title),
                React.createElement("p", { className: "text-gray-600" }, feature.description))); })))));
}
exports["default"] = Features;
