// SE CUSTOMS - ABBASIST™ CORE LOGIC
// "Always there to AbbAssist™"

const AbbAssist = {
    // 1. THE ROAD MAP (Green Flash)
    // Triggers the first time through or after a 2.1s delay
    flashTimer: 2100, 
    
    triggerNextMove: function(elementID) {
        // Road maps the move with a glowing green pulse
        console.log("AbbAssist™: Highlighting next step.");
        return {
            target: elementID,
            effect: "green-flash",
            timer: this.flashTimer
        };
    },

    // 2. THE ROAD FLARE (Pointing Hand)
    // Adjusts if the creator is looking for something specific
    showGuidance: function(targetTool) {
        return {
            action: "hovering-pointing-hand",
            location: targetTool,
            status: "active"
        };
    },

    // 3. PERSONAL MEMORY (Curios Cabinet Sync)
    // Abb acknowledges personal touches on the stationary bench
    memorizeEnvironment: function(itemType) {
        const environmentResponses = {
            'fish_bowl': "The fish bowl looks great on the shelf.",
            'plant': "The plant adds a nice touch to the workspace.",
            'stuffed_animal': "The stuffed animal is keeping the bench company."
        };

        const feedback = environmentResponses[itemType] || "That looks good on your desk.";
        console.log(`Abb Memorized: ${itemType}`);
        return feedback;
    }
};

export default AbbAssist;
