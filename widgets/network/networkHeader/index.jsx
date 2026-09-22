import { Gtk } from "ags/gtk4";

export default function CenterHeader({
  isWifiEnabled,
  setIsWifiEnabled,
  wifi,
  setAccessPoints,
}) {
  const { HORIZONTAL, VERTICAL } = Gtk.Orientation;

  wifi.connect("notify::enabled", (wifi) => {
    // update this. the if logic should check for the first 3 states before it could begin to scan. in an interval.
    // also move this to the parent network file
    console.log(wifi.get_state(), "state num response");
    console.log(wifi.enabled, "is wifi enabled?");

    if (wifi.enabled) {
      print("inside the if logic");
      // wifi.scan();
      setTimeout(() => {
        // print("3seconds done")
        setAccessPoints(wifi.access_points);
      }, 5000);
    }
  });

  return (
    <centerbox orientation={HORIZONTAL}>
      <box $type="start">
        <switch
          active={isWifiEnabled()}
          onNotifyActive={({ active }) => {
            print("scanniing");

            setIsWifiEnabled(active);
            wifi.set_enabled(active);

            //      setTimeout(() => {
            // // print("3seconds done")
            //  setAccessPoints(wifi.access_points);

            //     }, 3000);
          }}
        />

        <image iconName="network-wireless-connected-100-symbolic" />
        <image iconName="view-refresh-symbolic" />
      </box>
    </centerbox>
  );
}
