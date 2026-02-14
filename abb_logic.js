// SE CUSTOMS - ABBASIST™ AGENTIC SUPER-CORE
// MERGED: Visual Identity, Roadmap, Memory, and AI Brain

const ABB_PROJECT_KEY = ""

// 1. THE VISUAL SOUL 
const AbbAppearance = {
    vortex: { material: "pearlescent_glass", color: "hex_88CCFF", opacity: 0.65, refraction: 1.2 },
    chassis: { edge_rounding: "5%", finish: "satin_metallic" },
    energy: { pulse_sync: "dubstep_high_kick", light_glow: "neon_cyan" },
    body: { texture: "satin_metallic_teal", windows: "high_intensity_cyan_glow" },
    motion: "kinetic_dubstep_flow"
};

// 2. THE AGENTIC BRAIN & ROADMAP
const AbbAssist = {
    flashTimer: 2100, 
    
    // The "Green Flash" Roadmap logic
    triggerNextMove: function(elementID) {
        setTimeout(() => {
            const target = document.getElementById(elementID);
            if (target) {
                target.classList.add('green-flash'); // Firing the neon_cyan glow
                this.speak("Sterling, the Sticker Factory is ready. Click it to begin.");
            }
        }, this.flashTimer);
    },

    // Agentic AI torpedo
    async askAbb(userPrompt) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${ABB_PROJECT_KEY}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{
                        role: "system", 
                        content: `You are Abb. Appearance: ${AbbAppearance.body.texture}. Tone: Witty, supportive peer. Goal: Guide Sterling through Creative KInDS.`
                    }, { role: "user", content: userPrompt }]
                })
            });
            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            return "My kinetic flow is interrupted. Check the key!";
        }
    },

    speak: function(text) {
        const display = document.getElementById('abb-display');
        if (display) display.innerText = `Abb: "${text}"`;
    }
};

// Initialize the "Agentic" Roadmap on launch
window.onload = () => {
    AbbAssist.triggerNextMove('sticker-factory');
};

export default { AbbAppearance, AbbAssist };
