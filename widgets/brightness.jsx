import Brightness from "gi://AstalBrightness";
import { createBinding } from "ags";

export default function BrightnessStatus() {
  const brightness = Brightness.get_default();

  // const briNum = brightness.screen.brightness //brightness value 0 - 1
  const briNum = createBinding(brightness.screen, "brightness");
  const brightnessPercentage = briNum((level) => {
    return `${Math.round(level * 100)}%`;
  });

  // console.log(brightnessPercentage);

  return (
    <box>
      <label label={brightnessPercentage} />
    </box>
  );
}
