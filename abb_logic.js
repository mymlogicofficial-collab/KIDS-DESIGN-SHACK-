// SE CUSTOMS - CREATIVE KInDS LOGIC
// Powering the AbbAssist™ & Green Flash Sequence

const LILA_HUB_URL = "https://script.google.com/macros/s/AKfycbyfJBcM7kEwFd35_xPCliy4NlehesaDQz6utHOMMa4yfRGIP7ukpcrclhgzVigZpFHWBg/exec";  

async function getAbbBrain() {
    try {
        const response = await fetch(LILA_HUB_URL);
        const vault = await response.json();
        return vault.brain; // Grabs the sk-proj you just saved
    } catch (e) {
        console.error("Vault locked. Abb is sleeping.");
        return null;
    }
}

export async function askAbb(userPrompt) {
    const sk = await getAbbBrain();
    if (!sk) return "Handshake failed.";

    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 
            'Authorization': `Bearer ${sk}`, 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are Abb. A supportive, witty peer for ALL KInDS. Use the Green Flash to guide users." },
                { role: "user", content: userPrompt }
            ]
        })
    });

    const data = await aiResponse.json();
    return data.choices[0].message.content;
}
