import { Gtk } from "ags/gtk4";
import { createBinding, createState, For } from "ags";

export default function AccessPoints(prop) {
  const { wifi, accessPoints, setAccessPoints } = prop;
  const [selectedWifiName, setSelectedWifiName] = createState(null);
  const { HORIZONTAL, VERTICAL } = Gtk.Orientation;

  return (
    <For each={accessPoints}>
      {(accessPointObj) => (
        <box orientation={VERTICAL}>
          <button
            onClicked={() => {
              //   console.log(selectedWifiName());

              setSelectedWifiName(
                selectedWifiName() === accessPointObj.ssid
                  ? null
                  : accessPointObj.ssid,
              );

              // console.log(selectedWifiName());
            }}
          >
            <label label={accessPointObj.ssid} xalign={0} />
          </button>
          <entry
            visibility={false}
            visible={selectedWifiName.as((p) => p === accessPointObj.ssid)}
          />
        </box>
      )}
    </For>
  );
}
