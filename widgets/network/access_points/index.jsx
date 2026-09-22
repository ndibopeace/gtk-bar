import { Gtk } from "ags/gtk4";
import { createComputed, createBinding, createState, For , With} from "ags";

export default function AccessPoints(prop) {

  const { wifi, accessPoints, setAccessPoints, isEnabled, isWifiEnabled } =  prop;

  const [selectedWifiName, setSelectedWifiName] = createState(null);
  const { HORIZONTAL, VERTICAL } = Gtk.Orientation;

  const reactive = isWifiEnabled((c) => c);
  print(typeof reactive, "reactive type");

  return (
    <box orientation={VERTICAL}>
      <box orientation={VERTICAL}>
        <With value={isWifiEnabled}>

          {(value) => (value ? (
            
            <box orientation={VERTICAL} >
            <For each={accessPoints}  >
          {(accessPointObj) => {
            const strength = createBinding(accessPointObj, "strength");
            const strengthPercentage = strength((value) => {
              return `${value}%`;
            });

            return (
              <box orientation={VERTICAL} class="accessPoints-con">
                <button
                  onClicked={() => {
                    setSelectedWifiName(
                      selectedWifiName() === accessPointObj.ssid
                        ? null
                        : accessPointObj.ssid,
                    );
                  }}
                >
                  <centerbox
                    orientation={HORIZONTAL}
                    class="accessPoints-details"
                  >
                    <box $type="start">
                      <label label={accessPointObj.ssid} xalign={0} />
                    </box>
                    <box $type="end">
                      <label
                        label={strengthPercentage}
                        halign={Gtk.Align.END}
                      />
                    </box>
                  </centerbox>
                </button>
                <entry
                  visibility={true}
                  visible={selectedWifiName.as(
                    (p) => p === accessPointObj.ssid,
                  )}
                />
              </box>
            );
          }}
        </For></box>) : <label label='Wireless is off'/>)}
        </With>
      </box>
      {/* <label label="Hey you" /> */}

      {/* <For each={accessPoints}  >
          {(accessPointObj) => {
            const strength = createBinding(accessPointObj, "strength");
            const strengthPercentage = strength((value) => {
              return `${value}%`;
            });

            return (
              <box orientation={VERTICAL} class="accessPoints-con">
                <button
                  onClicked={() => {
                    setSelectedWifiName(
                      selectedWifiName() === accessPointObj.ssid
                        ? null
                        : accessPointObj.ssid,
                    );
                  }}
                >
                  <centerbox
                    orientation={HORIZONTAL}
                    class="accessPoints-details"
                  >
                    <box $type="start">
                      <label label={accessPointObj.ssid} xalign={0} />
                    </box>
                    <box $type="end">
                      <label
                        label={strengthPercentage}
                        halign={Gtk.Align.END}
                      />
                    </box>
                  </centerbox>
                </button>
                <entry
                  visibility={true}
                  visible={selectedWifiName.as(
                    (p) => p === accessPointObj.ssid,
                  )}
                />
              </box>
            );
          }}
        </For> */}
    </box>
  );
}

//   return (
//     <For each={accessPoints}>
//       {(accessPointObj) => {
//         const strength = createBinding(accessPointObj, "strength");
//         const strengthPercentage = strength((value) => {
//           console.log(value, 55555);

//           return `${value}%`;
//         });

//         return (
//           <box orientation={VERTICAL} class="accessPoints-con">
//             <button
//               onClicked={() => {

//                 setSelectedWifiName(
//                   selectedWifiName() === accessPointObj.ssid
//                     ? null
//                     : accessPointObj.ssid,
//                 );
//               }}
//             >
//               <centerbox orientation={HORIZONTAL} class="accessPoints-details">
//                 <box $type="start">
//                   <label label={accessPointObj.ssid} xalign={0} />
//                 </box>
//                 <box $type="end">
//                   <label label={strengthPercentage} halign={Gtk.Align.END} />
//                 </box>
//               </centerbox>
//             </button>
//             <entry
//               visibility={true}
//               visible={selectedWifiName.as((p) => p === accessPointObj.ssid)}
//             />
//           </box>
//         );
//       }}
//     </For>
//   );
// }
