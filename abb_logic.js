// SE CUSTOMS - ABBASIST™ CORE LOGIC
const AbbAssist = {
    timer: null,
    isIdle: true,

    // 1. THE ROAD MAP (Green Flash)
    // Triggers the first time through a sequence or on a timer.
    triggerGreenFlash: (elementID) => {
        console.log(`AbbAssist™: Flashing green on ${elementID}`);
        ui.applyGlow(elementID, "green-flash");
    },

    // 2. THE ROAD FLARE / POINTING HAND
    // If the creator doesn't ask, Abb chimes in.
    provideGuidance: (targetTool) => {
        const message = "Looking for this?";
        abb.speak(message);
        ui.showHoverHand(targetTool); // The hovering pointing hand
    },

    // 3. PERSONAL MEMORY (Curios Cabinet Sync)
    // Abb remembers the desk mates (fish bowls, plants, etc.)
    acknowledgePersonalTouch: (item) => {
        const reactions = {
            'fish_bowl': "He looks happy in there.",
            'plant': "Adds some life to the bench.",
            'stuffed_animal': "A good friend to have while creating."
        };
        return reactions[item] || `Nice touch, Sterling.`;
    }
};

export default AbbAssist;
