from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.properties import StringProperty, NumericProperty, BooleanProperty, ListProperty

class KindsRoot(BoxLayout):
    active_lead = StringProperty("3H")
    active_soft = StringProperty("2B")
    active_tip = StringProperty("°")
    active_tool_name = StringProperty("None") # Current tool from the grid
    
    # Drawer States
    drawer_e_open = BooleanProperty(False)
    drawer_f_open = BooleanProperty(False)
    drawer_g_open = BooleanProperty(False)
    
    # Tool Properties
    tip_size = NumericProperty(10)
    tip_opacity = NumericProperty(100)
    tip_gression = NumericProperty(50)
    current_color = ListProperty([1, 1, 1, 1])

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.h_leads = ["3H", "4H", "5H"]
        self.b_leads = ["2B", "4B", "8B"]
        self.tip_shapes = ["°", "\\", "/", "÷", "L"]
        self.h_index = 0
        self.b_index = 0
        self.tip_index = 0

    def cycle_h_lead(self):
        self.h_index = (self.h_index + 1) % len(self.h_leads)
        self.active_lead = self.h_leads[self.h_index]
        self.active_tool_name = self.active_lead

    def cycle_b_lead(self):
        self.b_index = (self.b_index + 1) % len(self.b_leads)
        self.active_soft = self.b_leads[self.b_index]
        self.active_tool_name = self.active_soft

    def cycle_tip_shape(self):
        self.tip_index = (self.tip_index + 1) % len(self.tip_shapes)
        self.active_tip = self.tip_shapes[self.tip_index]

    def select_tool(self, name):
        self.active_tool_name = name

    def toggle_drawer(self, drawer):
        self.drawer_e_open = (drawer == 'E' and not self.drawer_e_open)
        self.drawer_f_open = (drawer == 'F' and not self.drawer_f_open)
        self.drawer_g_open = (drawer == 'G' and not self.drawer_g_open)

class KindsApp(App):
    def build(self):
        return KindsRoot()

if __name__ == '__main__':
    KindsApp().run()
    
