// import { app, Gtk, Astal } from "ags/gtk4";
import { Gtk, Astal } from "ags/gtk4";
import Clock from "./clock.jsx";
import BatteryStats from "./battery.jsx";
import BrightnessStatus from "./brightness.jsx";
import PowerBtn from "./power_btn.jsx";
import NetworkStatus from "./network/network.jsx";

export default function StatusBar({ monitor }) {
  const { TOP, BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor;
  const { EXCLUSIVE } = Astal.Exclusivity;
  const { CENTER, END, START } = Gtk.Align;

  return (
    <window
      visible
      namespace="primaryBar"
      anchor={TOP | LEFT | RIGHT}
      monitor={monitor}
      exclusivity={EXCLUSIVE}
      keymode={Astal.Keymode.ON_DEMAND}
    >
      <centerbox>
        <box $type="start" class="section">
          {/* left widgets */}
          <Clock />
        </box>

        <box $type="center" class="section">
          {/* center widgets*/}
          <Clock />
        </box>

        <box $type="end" class="section">
          {/* right widgets */}
          <NetworkStatus />
          <Clock />
          <BatteryStats />
          <BrightnessStatus />
          <PowerBtn />
        </box>
      </centerbox>
    </window>
  );
}
