import GeometryEngine from './geometry_eng.js';
import CreationStation from './creation_station.js';
import AbbAssist from './abb_logic.js';

// THE WORKSPACE CORE
const SE_Customs_App = {
    init: function() {
        console.log("Creative KInDS - Workspace Active.");
        this.setupListeners();
    },

    // 1. MAGNETIC LOCK & ROADMAP
    // Listens for the Double Tap and the 2.1s Idle Timer
    handleInteraction: function(type, target) {
        if (type === 'double_tap') {
            CreationStation.magnets.action(); // Locks the canvas
        }
        
        // Start Abb's Timer
        setTimeout(() => {
            AbbAssist.triggerNextMove(target); // Shows the Green Flash
        }, AbbAssist.flashTimer);
    },

    // 2. CURIOS CABINET SYNC
    // When a personal item is added, Abb memorizes it
    addPersonalTouch: function(item) {
        CreationStation.onNewItemAdded(item); // Adds to shelf
        const response = AbbAssist.memorizeEnvironment(item); // Abb speaks
        console.log(response);
    }
};

SE_Customs_App.init();

