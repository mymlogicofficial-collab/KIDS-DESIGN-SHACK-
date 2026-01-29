# Logic for the Multi-Press Lead Selection in Drawer E
class LeadSelector:
    def __init__(self):
        # Define the cycles for different lead types
        self.h_leads = ["3H", "4H", "5H"]
        self.b_leads = ["2B", "4B", "8B"]
        self.h_index = 0
        self.b_index = 0

    def cycle_h_lead(self):
        # Advances the H-lead and loops back to the start
        self.h_index = (self.h_index + 1) % len(self.h_leads)
        active_lead = self.h_leads[self.h_index]
        return f"Selected Lead: {active_lead}"

    def cycle_b_lead(self):
        # Advances the B-lead and loops back to the start
        self.b_index = (self.b_index + 1) % len(self.b_leads)
        active_lead = self.b_leads[self.b_index]
        return f"Selected Lead: {active_lead}"

# Logic for the "Tap Anywhere" Dismissal
def on_canvas_touch(instance, touch):
    # If the user touches the top 70% of the screen (Area A)
    if touch.y > (Window.height * 0.3):
        # Send signal to close all open drawers
        app.close_all_drawers()
        # Resume drawing immediately
        return True 
      
