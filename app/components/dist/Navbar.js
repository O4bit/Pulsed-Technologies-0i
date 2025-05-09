"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
function Navbar() {
    return (React.createElement("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "flex items-center justify-between h-16" },
                React.createElement("div", { className: "flex items-center" },
                    React.createElement(link_1["default"], { href: "/", className: "text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" }, "huly"),
                    React.createElement("div", { className: "hidden md:block ml-10" },
                        React.createElement("div", { className: "flex items-center space-x-8" },
                            React.createElement(link_1["default"], { href: "#", className: "text-sm text-gray-300 hover:text-white" }, "Pricing"),
                            React.createElement(link_1["default"], { href: "#", className: "text-sm text-gray-300 hover:text-white" }, "Resources"),
                            React.createElement(link_1["default"], { href: "#", className: "text-sm text-gray-300 hover:text-white" }, "Community"),
                            React.createElement(link_1["default"], { href: "#", className: "text-sm text-gray-300 hover:text-white" }, "Download")))),
                React.createElement("div", { className: "flex items-center space-x-4" },
                    React.createElement(button_1.Button, { variant: "ghost", className: "text-sm" }, "Sign In"),
                    React.createElement(button_1.Button, { className: "text-sm bg-gradient-to-r from-primary to-accent hover:opacity-90" }, "Get Started"))))));
}
exports["default"] = Navbar;
