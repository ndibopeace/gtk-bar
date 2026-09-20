import Network from "gi://AstalNetwork";
import { createBinding } from "ags";
import { Gtk } from "ags/gtk4";
import { pointer } from "../utils/pointer.js";
// import "./network/styles.css"

export default function NetworkStatus() {
  const { CENTER, END, START } = Gtk.Align;
  const wifi = Network.get_default().wifi;

  // const isWifiEnabled = createBinding(wifi, "enabled")
  const isWifiEnabled = () => {

    const isEnabled = wifi.enabled

    return isEnabled
  }
  // const

  print(typeof isWifiEnabled())

  const strength = createBinding(wifi, "strength");

  const strengthToString = strength((strength) => {
    console.log(wifi.strength);
    {console.log('wifi is enabled : ', wifi.enabled)}

    //this determines which icon to return depending on the wifi strength

    switch (true) {
      case strength > 80:
        return "network-wireless-connected-100-symbolic";
        break;

      case strength > 60:
        return "network-wireless-connected-75-symbolic";
        break;

      case strength > 40:
        return "network-wireless-connected-50-symbolic";
        break;
      case strength > 20:
        return "network-wireless-connected-25-symbolic";
        break;

      default:
        return "network-wireless-connected-00";
    }
  });

  return (
    <menubutton $={pointer}>
      <image iconName={strengthToString} pixelSize={20} /> 

      <popover hasArrow={true}>
        <box class="network_popover" orientation={Gtk.Orientation.VERTICAL}>
          <centerbox orientation={Gtk.Orientation.HORIZONTAL}>
            <box $type="start">
              <switch
                // active={true}
                active={isWifiEnabled()}

                onNotifyActive={({ active }) => {
                  const getEnabled = wifi.get_enabled()
                  wifi.set_enabled(!getEnabled)
                }}
              />

              <image iconName="network-wireless-connected-100-symbolic" />
            </box>
            {/* <box $type="center">
              <label label="1" />
            </box>2
            <box $type="end">
              <label label="1" />
            </box> */}
          </centerbox>

          <label xalign={0} label="hey" />
          <label xalign={0} label="hey" />
          <label xalign={0} label="hey" />
          <label xalign={0} label="hey" />
          <label xalign={0} label="hey" />
          <label xalign={0} label="hey" />
          <label xalign={0} label="hey" />
          <label xalign={0} label="hey" />
          <label xalign={0} label="hey" />
          <label xalign={0} label="hey" />
        </box>
      </popover>
    </menubutton>
  );
}
