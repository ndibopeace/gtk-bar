import { createState } from "ags";
import Gdk from "gi://Gdk?version=4.0"; // Import Gdk for cursor manipulation
import { Gtk, Astal } from "ags/gtk4";

export default function PowerBtn() {

  // const [isClicked, setIsClicked] = createState(false);
  const pointer = (self) => {
    self.set_cursor(Gdk.Cursor.new_from_name("pointer", null));
  };

  return (
 
   <menubutton class="power-btn" $={pointer} direction={Gtk.ArrowType.NONE}>
      <label label="⏻" />

      <popover class="power-options-popover" hasArrow={false}>
        <box orientation={Gtk.Orientation.VERTICAL}>
          <button onClicked={() => console.log("reboot")}>
            <label label="reboot" />
          </button>

          <button onClicked={() => console.log("shutdown")}>
            <label label="shutdown" />
          </button>

          <button onClicked={() => console.log("suspend")}>
            <label label="suspend" />
          </button>

          <button onClicked={() => console.log("hibernate")}>
            <label label="hibernate" />
          </button>
        </box>
      </popover>
    </menubutton>
  );
}

// orientation={Gtk.Orientation.VERTICAL}for arranging the buttons vertically in the popover.

/*
const pointer = (self) => {
                self.set_cursor(Gdk.Cursor.new_from_name("pointer", null),)
            }


// pointer function
// Changes the mouse cursor to a pointer (usually the hand cursor).
// It takes a single argument, self, which is the widget that the cursor is being set for.
// $={pointer} means "When this widget is created, give the widget to the pointer function."
//The widget becomes self. If attached to a button, self would be the button object.
// so self.set_cursor = button.set_cursor in this case
//null is fallback
// Gdk.Cursor.new_from_name("pointer", null) reates a cursor object. 1st a argument = cursor style, 2nd argument = display (null means default display).
// basically,  Create a function called pointer. When given a widget, change that widget's mouse cursor to the pointer/hand cursor.
// 
// <button $={pointer} />
// AGS interprets this as:
// "Run the function provided to $ and give it this widget."
// This allows you to directly access and modify the underlying GTK widget.
Without $, you might have to manually create the widget and modify it afterward.
For example, conceptually:
const button = new Gtk.Button();
button.set_cursor(...);
*/
