"use strict";
exports.__esModule = true;
var button_1 = require("@/components/ui/button");
function Hero() {
    return (React.createElement("div", { className: "relative pt-32 pb-20 sm:pt-40 sm:pb-24" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" },
            React.createElement("h1", { className: "text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8" },
                "Everything App",
                React.createElement("br", null),
                React.createElement("span", { className: "text-gray-400" }, "for your teams")),
            React.createElement("p", { className: "max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10" }, "Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion."),
            React.createElement(button_1.Button, { className: "relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90" },
                React.createElement("span", { className: "relative z-10" }, "Try it free"),
                React.createElement("div", { className: "absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" })))));
}
exports["default"] = Hero;
