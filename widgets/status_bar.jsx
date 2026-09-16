// import AstalBattery from 'gi://AstalBattery'; 

// const battery = AstalBattery.get_default();

// console.log(battery.isPresent)





// import { app, Gtk, Astal } from "ags/gtk4";
import { Gtk, Astal } from "ags/gtk4";
import Clock from "./clock.jsx";
import BatteryStats from "./battery.jsx";
import BrightnessStatus from "./brightness.jsx";


export default function StatusBar({ monitor }) {
  const { TOP, BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor;

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
        <box $type="start" halign={Gtk.Align.START}>
          {/* left widgets go here */}
          <Clock />
        </box>

        <box $type="center" halign={Gtk.Align.CENTER}>
          {/* center widgets go here */}
          <Clock />
        </box>

        <box $type="end" halign={Gtk.Align.END}>
          {/* right widgets go here */}
          <Clock />
          <BatteryStats />
          <BrightnessStatus />
        </box>
      </centerbox>
    </window>
  );
}
