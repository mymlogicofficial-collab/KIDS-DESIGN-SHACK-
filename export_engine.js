// SE CUSTOMS - SVG EXPORT ENGINE
import { Identity } from '../config/identity_branding.js';

const ExportEngine = {
    // Converts the points array into an SVG Path string
    pointsToSVGPath: (points) => {
        if (!points || points.length === 0) return "";
        let d = `M ${points[0].x} ${points[0].y} `;
        for (let i = 1; i < points.length; i++) {
            d += `L ${points[i].x} ${points[i].y} `;
        }
        return d;
    },

    // Generates the final code block for the Terminal
    printToTerminal: (allShapes) => {
        let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">\n`;
        
        allShapes.forEach((shape, index) => {
            const pathData = ExportEngine.pointsToSVGPath(shape.points);
            svgContent += `  <path id="shape_${index}" d="${pathData}" fill="none" stroke="black" stroke-width="2" />\n`;
        });

        svgContent += `</svg>`;

        console.log(`--- ${Identity.systemName} EXPORT START ---`);
        console.log(svgContent);
        console.log(`--- EXPORT COMPLETE. COPY ABOVE CODE ---`);
        
        return svgContent;
    }
};

export default ExportEngine;

