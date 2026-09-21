import { Gtk } from "ags/gtk4";


export default function CenterHeader({isWifiEnabled, wifi}) {

      const { HORIZONTAL, VERTICAL } = Gtk.Orientation;

    return (
        <centerbox orientation={HORIZONTAL}>
                    <box $type="start">
                      <switch
                        active={isWifiEnabled()}
                        onNotifyActive={({ active }) => {
                          const getEnabled = wifi.get_enabled();
                          wifi.set_enabled(!getEnabled);
                        }}
                      />
        
                      <image iconName="network-wireless-connected-100-symbolic" />
                      <image iconName="view-refresh-symbolic" />
                    </box>
                    {/* <box $type="center">
                      <label label="1" />
                    </box>2
                    <box $type="end">
                      <label label="1" />
                    </box> */}
                  </centerbox>
    )
}