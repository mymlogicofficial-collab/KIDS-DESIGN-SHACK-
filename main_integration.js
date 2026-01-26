// SE CUSTOMS - MASTER INTEGRATION
import AbbAppearance from './assets/scripts/abb_core.js';
import CreationStation from './hardware/logic/creation_station.js';
import TaskInterface from './hardware/logic/task_interface.js';
import MagneticController from './hardware/drivers/magnetic_controller.js';
import MemoryCore from './src/logic/memory_core.js';

const MasterController = {
    init: () => {
        console.log("SE Customs Station: Booting...");
        // Initialize Abb's 5% softened visual state
        this.renderAbb(AbbAppearance);
    },

    // Bridge: 2x Tap on Canvas -> Magnetic Lock
    onCanvasTap: (taps) => {
        if (taps === 2) {
            MagneticController.processTap(2);
            CreationStation.magnets.state = "ON";
        }
    },

    // Bridge: Task Selector -> Toolbox Drawers
    onTaskSelect: (version) => {
        const response = TaskInterface.setActiveTask(version);
        console.log(response);
    },

    // Bridge: Curios Cabinet -> Abb Memory
    onNewTrophy: (id, name) => {
        MemoryCore.logNewCurio(id, name);
        // Trigger Abb to acknowledge the win
    }
};

export default MasterController;

