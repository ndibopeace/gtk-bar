
export const powerMenuOptions = {
    reboot: "systemctl reboot",
    shutdown: "systemctl poweroff",
    suspend: "systemctl suspend",
    hibernate: "systemctl hibernate", 
    logout: "swaymsg exit", // confirm for sway lock
    lock: "swaylock",  // confirm for sway lock
} 