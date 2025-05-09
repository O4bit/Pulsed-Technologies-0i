"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
function ProductPreview() {
    return (React.createElement("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20" },
        React.createElement("div", { className: "relative rounded-lg overflow-hidden border border-white/10 shadow-2xl" },
            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/10 to-transparent" }),
            React.createElement(image_1["default"], { src: "https://sjc.microlink.io/dACoBD81V0jhbU_TaUYiRrOVrhAXOh8TCYVdXmvVaYFIpbvF9B17bU0pnQF3gHfzVAOFzC-nwZVACScUpFYQsg.jpeg", alt: "Huly App Interface", width: 1200, height: 800, className: "w-full h-auto" })),
        React.createElement("div", { className: "absolute -inset-x-20 top-0 h-[500px] bg-gradient-conic opacity-30 blur-3xl" })));
}
exports["default"] = ProductPreview;
