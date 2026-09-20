import Gdk from "gi://Gdk?version=4.0"; // Import Gdk for cursor manipulation

export const pointer = (self) => {
    self.set_cursor(Gdk.Cursor.new_from_name("pointer", null));
  };