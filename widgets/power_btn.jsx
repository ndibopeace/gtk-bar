import { Gtk, Astal } from "ags/gtk4";
import { execAsync } from "ags/process";
import { pointer } from "../utils/pointer.js";
import { powerMenuOptions } from "../data/menu_options.js";

export default function PowerBtn() {
  let popoverRef;
  // delete this, currently unused

  return (
    <menubutton class="power-btn" $={pointer} direction={Gtk.ArrowType.NONE}>
      <image iconName="system-shutdown-symbolic" visible />

      <popover
        class="power-options-popover"
        hasArrow={!false}
        $={(self) => (popoverRef = self)}
      >
        <box orientation={Gtk.Orientation.VERTICAL}>
          {Object.entries(powerMenuOptions).map(([label, command]) => {
            return (
              <button
                $={pointer}
                label={label}
                onClicked={() => {
                  // popoverRef.popdown();  // hides popover on click
                  execAsync("command").catch((err) => console.error(err));
                }}
              ></button>
            );
          })}
        </box>
      </popover>
    </menubutton>
  );
}
