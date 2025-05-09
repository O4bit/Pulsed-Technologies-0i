"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
function Footer() {
    return (React.createElement("footer", { className: "bg-gray-900 text-white py-12" },
        React.createElement("div", { className: "container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8" },
            React.createElement("div", null,
                React.createElement("h3", { className: "text-lg font-semibold mb-4" }, "StreamLine"),
                React.createElement("p", { className: "text-gray-400" }, "Streamlining your workflow, one task at a time.")),
            React.createElement("div", null,
                React.createElement("h4", { className: "text-lg font-semibold mb-4" }, "Product"),
                React.createElement("ul", { className: "space-y-2" },
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#features", className: "text-gray-400 hover:text-white" }, "Features")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#pricing", className: "text-gray-400 hover:text-white" }, "Pricing")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#", className: "text-gray-400 hover:text-white" }, "Integrations")))),
            React.createElement("div", null,
                React.createElement("h4", { className: "text-lg font-semibold mb-4" }, "Company"),
                React.createElement("ul", { className: "space-y-2" },
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#", className: "text-gray-400 hover:text-white" }, "About Us")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#", className: "text-gray-400 hover:text-white" }, "Careers")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "#", className: "text-gray-400 hover:text-white" }, "Contact")))),
            React.createElement("div", null,
                React.createElement("h4", { className: "text-lg font-semibold mb-4" }, "Connect"),
                React.createElement("div", { className: "flex space-x-4" },
                    React.createElement(link_1["default"], { href: "#", className: "text-gray-400 hover:text-white" },
                        React.createElement(lucide_react_1.Facebook, { className: "h-6 w-6" })),
                    React.createElement(link_1["default"], { href: "#", className: "text-gray-400 hover:text-white" },
                        React.createElement(lucide_react_1.Twitter, { className: "h-6 w-6" })),
                    React.createElement(link_1["default"], { href: "#", className: "text-gray-400 hover:text-white" },
                        React.createElement(lucide_react_1.Instagram, { className: "h-6 w-6" })),
                    React.createElement(link_1["default"], { href: "#", className: "text-gray-400 hover:text-white" },
                        React.createElement(lucide_react_1.Linkedin, { className: "h-6 w-6" }))))),
        React.createElement("div", { className: "container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400" },
            React.createElement("p", null, "\u00A9 2025 StreamLine. All rights reserved."))));
}
exports["default"] = Footer;
