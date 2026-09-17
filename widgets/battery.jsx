import Battery from "gi://AstalBattery";
import { createBinding } from "ags";

export default function BatteryStats() {
  /* 
  Usage:
      astal-battery [flags]  
  Flags:
      -h, --help        Print this help and exit
      -v, --version     Print version number and exit
      -m, --monitor     Monitor property changes
      -p, --pretty      Pretty print json output
  */

  const battery = Battery.get_default();

  // -----------------------------Percentage-----------------------------------------------------------------------------------------------------
  const batLevel = createBinding(battery, "percentage");
  const batPercentage = batLevel((level) => {
    return `${Math.round(level * 100)}%`;
  });
  // ----------------------------------------------------------------------------------------------------------------------------------

 
  // --------------------------------Battery Icon--------------------------------------------------------------------------------------------------
  const breezeIcon = batLevel((p) => {
    
         const percentage = Math.round(p * 100)
         const isCharging = battery.charging
 
         // Floor to the nearest tens place to match Breeze files (010, 020, 030, etc.)
         const roundedTens = Math.floor(percentage / 10) * 10
         
         // Pad out string with leading zeros (e.g., 40 becomes "040", 0 becomes "000")
         const fileString = String(roundedTens).padStart(3, '0')
 
         if (isCharging) {
             // Checks full thresholds or falls back to standard charging strings
             if (percentage >= 95) return "battery-full-charging-symbolic"
             return `battery-${fileString}-charging-symbolic` //icon name to search for in breeze icons
         } else {
             if (percentage >= 95) return "battery-full-symbolic"
             return `battery-${fileString}-symbolic`
         }
     })
  // ----------------------------------------------------------------------------------------------------------------------------------


  return (
    <box>
      <label label={batPercentage} />
      <image iconName={breezeIcon} visible />
    </box>
  );
}
