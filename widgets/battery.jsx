import Battery from "gi://AstalBattery";
import { createBinding } from "ags";

export default function BatteryStats() {
  const battery = Battery.get_default();
  
  const batLevel = createBinding(battery, "percentage");
  const batPercentage = batLevel((level) => {
    return `${Math.round(level * 100)}%`;
  });

  return (
    <box>bat
      <label label={batPercentage} />
    </box>
  );
}
