from kivy.graphics import Line, Color

class KindsRoot(BoxLayout):
    active_tool_name = StringProperty("3H")
    active_snap_tool = StringProperty("None")
    eraser_active = BooleanProperty(False)

    def on_touch_down(self, touch):
        # Only draw if we are in Area A (The Canvas)
        if touch.y > self.height * 0.35:
            with self.canvas:
                Color(0, 0, 0, 1) # Tool color
                # If Ruler is active, we use the Geometry Engine logic
                if self.active_snap_tool == "Ruler":
                    # This is where the infinite_ruler.js math kicks in
                    touch.ud['line'] = Line(points=(touch.x, touch.y))
                else:
                    # Normal free-hand drawing
                    touch.ud['line'] = Line(points=(touch.x, touch.y))
        return super().on_touch_down(touch)

    def on_touch_move(self, touch):
        if 'line' in touch.ud:
            if self.active_snap_tool == "Ruler":
                # Force the line to stay perfectly straight (Snap)
                # Based on the initial touch point
                pass 
            else:
                touch.ud['line'].points += [touch.x, touch.y]
                
