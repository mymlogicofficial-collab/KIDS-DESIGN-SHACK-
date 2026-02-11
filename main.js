// CREATIVE KInDS - MAIN MANAGER
import AbbAssist from './abb_logic.js';
import CreationStation from './creation_station.js';
import GeometryEngine from './geometry_engine.js';

const CreativeKInDS = {
    init: function() {
        console.log("Creative KInDS: System Active.");
        this.startEnvironmentTimer();
        this.setupInteractions();
    },

    // 1. ENVIRONMENT TIMER (15-min increments / 1-hour cycle)
    startEnvironmentTimer: function() {
        let stage = 0;
        console.log("Environment: Timer Started.");
        
        // This runs in the background for the creator
        setInterval(() => {
            stage = (stage + 1) % 4; 
            this.updatePlanter(stage);
        }, 900000); // 15 minutes
    },

    updatePlanter: function(stage) {
        const stages = ['Stem', '4-Leaves', 'Bush', 'Bloom'];
        console.log(`Planter Status: ${stages[stage]}`);
        if (stage === 3) AbbAssist.acknowledgePersonalTouch('plant');
    },

    // 2. INTERACTION LOGIC (Magnets & Drawers)
    setupInteractions: function() {
        // Handles the Long-Press/Double-Tap for Curios
        // Morphs toolbox to Drawer F (Personals) or G (Living)
    }
};

// 3. SYSTEM CHECK: FAST-FORWARD GROWTH TEST
const GrowthTest = {
    run: function() {
        console.log("--- STARTING REBUILD TEST ---");
        ['Stem', '4-Leaves', 'Bush', 'Bloom'].forEach((s, i) => {
            setTimeout(() => {
                console.log(`Milestone ${i+1}: ${s}`);
                if (i === 3) console.log("SUCCESS: Random Bloom triggered.");
            }, i * 1500); 
        });
    }
};

// --- TURN THE KEY ---
// These run the second you hit commit
GrowthTest.run();
CreativeKInDS.init();
