"use strict";
exports.__esModule = true;
var button_1 = require("@/components/ui/button");
function CTA() {
    return (React.createElement("section", { className: "py-20 bg-primary text-white" },
        React.createElement("div", { className: "container mx-auto text-center" },
            React.createElement("h2", { className: "text-3xl font-bold mb-6" }, "Ready to Streamline Your Workflow?"),
            React.createElement("p", { className: "text-xl mb-8 max-w-2xl mx-auto" }, "Join thousands of teams already using StreamLine to boost their productivity."),
            React.createElement(button_1.Button, { size: "lg", variant: "secondary" }, "Start Your Free Trial"))));
}
exports["default"] = CTA;
