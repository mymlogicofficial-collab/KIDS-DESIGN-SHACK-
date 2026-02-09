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
        return feedback;// ABBASIST™ CURIO GUIDANCE
const CurioGuidance = {
    idleLimit: 5000, // 5 seconds of inactivity inside a drawer

    monitorDrawerUsage: function() {
        setTimeout(() => {
            if (ui.drawerIsOpen && !user.hasMoved) {
                this.assistExit();
            }
        }, this.idleLimit);
    },

    assistExit: function() {
        // Abb vocalizes and points
        abb.speak("You can tap the bench to go back to your drawing."); 
        ui.showAbbFingerTap('bench_area'); // Physical example of where to tap
        ui.triggerGreenPulse('bench_area'); // The green roadmap pulse
        
        // Final fallback: Abb closes it if they still don't move
        setTimeout(() => {
            if (ui.drawerIsOpen) {
                ui.closeDrawer();
                abb.speak("I'll take care of that for you."); 
            }
        }, 3000);
    

        
    }
};

export default AbbAssist;
