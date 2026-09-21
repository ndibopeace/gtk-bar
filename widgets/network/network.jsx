import Network from "gi://AstalNetwork";
import { createComputed, createBinding, createState, For } from "ags";
import { Gtk } from "ags/gtk4";
import { pointer } from "../../utils/pointer.js";
import CenterHeader from "./networkHeader/index.jsx";
import AccessPoints from "./access_points/index.jsx";

export default function NetworkStatus() {
  const wifi = Network.get_default().wifi;
  const { HORIZONTAL, VERTICAL } = Gtk.Orientation;
  const { CENTER, END, START } = Gtk.Align;
  const [accessPoints, setAccessPoints] = createState(wifi.access_points);

  const isWifiEnabled = () => {
    const isEnabled = wifi.enabled;

    return isEnabled;
  };

  const strength = createBinding(wifi, "strength");
  const isEnabled = createBinding(wifi, "enabled");
  const activeAccessPoint = createBinding(wifi, "active-access-point");

  const wifiIcon = createComputed(() => {
    // automatically updates the wifi icon to dispay depending on different wifi states
    // state 1 - isWifiOn, state 2- weather its connected if wifi is On, State 3 - wifi signal if wifi is connected to show strength
    const isWifiOn = isEnabled();
    const strengthValue = strength();
    const activeWifiConnection = activeAccessPoint();

    if (!isWifiOn) return "network-wireless-off";
    if (activeWifiConnection === null)
      return "network-wireless-disconnected-symbolic";
    if (strengthValue > 80) return "network-wireless-connected-100-symbolic";
    if (strengthValue > 60) return "network-wireless-connected-75-symbolic";
    if (strengthValue > 40) return "network-wireless-connected-50-symbolic";
    if (strengthValue > 20) return "network-wireless-connected-25-symbolic";
    if (strengthValue < 21) return "network-wireless-connected-00";
  });

  return (
    <menubutton $={pointer}>
      <image iconName={wifiIcon} pixelSize={20} />

      <popover
        hasArrow={true}
        onShow={() => {
          if (wifi.get_enabled()) {
            wifi.scan();
            console.log("scanning succesful");
          }

          setAccessPoints(wifi.access_points);
          setTimeout(() => {
            setAccessPoints(wifi.access_points);
          }, 10000);
        }}
      >
        <box class="network_popover" orientation={VERTICAL}>
          <CenterHeader isWifiEnabled={isWifiEnabled} wifi={wifi} />
          <AccessPoints
            wifi={wifi}
            accessPoints={accessPoints}
            setAccessPoints={setAccessPoints}
          />
        </box>
      </popover>
    </menubutton>
  );
}
