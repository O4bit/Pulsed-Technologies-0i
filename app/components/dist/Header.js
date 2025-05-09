"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
function Header() {
    return (React.createElement("header", { className: "py-4 px-6 bg-white shadow-sm" },
        React.createElement("div", { className: "container mx-auto flex justify-between items-center" },
            React.createElement(link_1["default"], { href: "/", className: "text-2xl font-bold text-primary" }, "StreamLine"),
            React.createElement("nav", { className: "hidden md:flex space-x-6" },
                React.createElement(link_1["default"], { href: "#features", className: "text-gray-600 hover:text-primary" }, "Features"),
                React.createElement(link_1["default"], { href: "#testimonials", className: "text-gray-600 hover:text-primary" }, "Testimonials"),
                React.createElement(link_1["default"], { href: "#pricing", className: "text-gray-600 hover:text-primary" }, "Pricing")),
            React.createElement(button_1.Button, null, "Get Started"))));
}
exports["default"] = Header;
