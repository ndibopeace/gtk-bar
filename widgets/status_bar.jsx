// import { app, Gtk, Astal } from "ags/gtk4";
import { Gtk, Astal } from "ags/gtk4";
import Clock from "./clock.jsx";
import BatteryStats from "./battery.jsx";
import BrightnessStatus from "./brightness.jsx";
import PowerBtn from "./power_btn.jsx";
import NetworkStatus from "./network.jsx"

export default function StatusBar({ monitor }) {
  
  const { TOP, BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor;
  const { CENTER, END, START } = Gtk.Align;

  return (
    <window
      visible
      anchor={TOP | LEFT | RIGHT}
      // cssClasses={["statusbar"]}
      monitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      // application={App}
    >
      <centerbox>
        {/* Map children to specific GTK slots using $type */}
        <box $type="start" halign={START} class="section" valign={CENTER}>
          {/* left widgets go here */}
          <Clock />
        </box>

        <box $type="center" halign={CENTER} class="section" valign={CENTER}>
          {/* center widgets go here */}
          <Clock />
        </box>

        <box $type="end" halign={END} class="section" valign={CENTER}>
          {/* right widgets go here */}
          <NetworkStatus /> 
          <Clock />
          <BatteryStats />
          <BrightnessStatus />
          <PowerBtn />
          {/* <PowerOptions /> */}
        </box>
      </centerbox>
    </window>
  );
}
