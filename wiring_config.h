// SE CUSTOMS - PHYSICAL PINOUT & WIRING
// Controller: ESP32 / Arduino Compatible

// 1. MAGNETIC CANVAS SYSTEM
#define MAG_LOCK_OUT 18     // Connect to Relay/MOSFET for Electromagnet
#define TAP_SENSOR_L 14     // Left Touch Sensor (Digital In)
#define TAP_SENSOR_R 15     // Right Touch Sensor (Digital In)

// 2. SLIDE-OUT TOOLBOX
#define DRAWER_RELEASE 22   // Solenoid for drawer latch
#define TASK_LED_STRIP 23   // PWM signal for toolbox lighting

// 3. CURIOS CABINET
#define CABINET_PROX 27     // IR or Hall Effect sensor for new items

