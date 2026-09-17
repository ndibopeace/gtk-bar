import { Gtk, Astal } from "ags/gtk4";

export default function PowerOptions() {
  const { TOP, BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor;
  const { CENTER, END, START } = Gtk.Align;
  const { EXCLUSIVE, IGNORE } = Astal.Exclusivity;
  const {BACKGROUND, OVERLAY } = Astal.Layer

  return (
    
      <box>
        <label label="reboot" />
        <label label="shutdown" />
        <label label="suspend" />
        <label label="hibernate" />
      </box>
    
    // <window layer={OVERLAY} anchor={BOTTOM | LEFT | RIGHT} exclusivity={IGNORE} visible>
    //   <box>
    //     <label label="reboot" />
    //     <label label="shutdown" />
    //     <label label="suspend" />
    //     <label label="hibernate" />
    //   </box>
    // </window>
  );
}
