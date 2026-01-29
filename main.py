from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.properties import StringProperty

class KindsRoot(BoxLayout):
    active_lead = StringProperty("3H")
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.h_leads = ["3H", "4H", "5H"]
        self.h_index = 0

    def cycle_h_lead(self):
        # Cycles through 3H, 4H, 5H
        self.h_index = (self.h_index + 1) % len(self.h_leads)
        self.active_lead = self.h_leads[self.h_index]

    def toggle_drawer(self, drawer_name):
        # This is where we will trigger the drawer animations
        print(f"Opening Drawer {drawer_name}")

class KindsApp(App):
    def build(self):
        return KindsRoot()

if __name__ == '__main__':
    KindsApp().run()
    
class KindsRoot(BoxLayout):
    active_lead = StringProperty("3H")
    active_soft = StringProperty("2B") # Added for B leads
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.h_leads = ["3H", "4H", "5H"]
        self.b_leads = ["2B", "4B", "8B"] # Added list
        self.h_index = 0
        self.b_index = 0

    def cycle_h_lead(self):
        self.h_index = (self.h_index + 1) % len(self.h_leads)
        self.active_lead = self.h_leads[self.h_index]

    def cycle_b_lead(self): # Added function
        self.b_index = (self.b_index + 1) % len(self.b_leads)
        self.active_soft = self.b_leads[self.b_index]

    def toggle_drawer(self, drawer_name):
        print(f"Opening Drawer {drawer_name}")
        
