import { Gtk } from "ags/gtk4";

export default function CenterHeader(props) {
  const { isWifiEnabled, setIsWifiEnabled, wifi, setAccessPoints } = props;
  const { HORIZONTAL, VERTICAL } = Gtk.Orientation;

  const wifiSwitch = ({ active }) => {
    //function that runs every time the wifi toggle is clicked. on or off
    // active referes to the current state of the switch. true for on, false for off

    setIsWifiEnabled(active);
    wifi.set_enabled(active);
    setAccessPoints(wifi.access_points);

    setTimeout(() => {
      setAccessPoints(wifi.access_points);
    }, 7000);
  };

  const refreshBtnFx = () => {
    //function that runs every time the refresh btn is clicked.
    wifi.scan();
    setAccessPoints(wifi.access_points);

    setTimeout(() => {
      setAccessPoints(wifi.access_points);
    }, 6000);
  };

  return (
    <centerbox orientation={HORIZONTAL}>
      <box $type="start">
        <switch active={isWifiEnabled()} onNotifyActive={wifiSwitch} />
        <image iconName="network-wireless-connected-100-symbolic" />
      </box>

      <box $type="end">
        <button onClicked={refreshBtnFx}>
          <image iconName="view-refresh-symbolic" />
        </button>
      </box>
    </centerbox>
  );
}

// wifi.connect("notify::enabled", (wifi) => {
//   // update this. the if logic should check for the first 3 states before it could begin to scan. in an interval.
//   // also move this to the parent network file
//   console.log(wifi.get_state(), "state num response");
//   console.log(wifi.enabled, "is wifi enabled?");

//   if (wifi.enabled) {
//     print("inside the if logic");
//     // wifi.scan();
//     setTimeout(() => {
//       // print("3seconds done")
//       setAccessPoints(wifi.access_points);
//     }, 5000);
//   }
// });
