# GTK Bar

A lightweight, customizable GTK4 status bar built with [AGS](https://github.com/Aylur/ags) and [Astal](https://github.com/Aylur/astal).

The bar is designed for Wayland desktop environments and provides quick access to system information and common controls.

## Features

- Clock updated every second
- Battery percentage and battery status icon
- Screen brightness percentage
- Wi-Fi status and signal strength
- Wi-Fi enable/disable toggle
- Wi-Fi access-point popover
- Power menu
  - Reboot
  - Shutdown
  - Suspend
  - Hibernate
  - Logout
  - Lock
- GTK4 styling with CSS
- Automatic CSS reloading while developing
- Runs on every connected monitor

## Preview

_Add a screenshot or GIF of the bar here._

## Requirements

- Linux
- Wayland
- GTK4
- [AGS](https://github.com/Aylur/ags)
- Astal services:
  - Astal Battery
  - Astal Brightness
  - Astal Network
- A Breeze-compatible icon theme
- `systemctl` for power actions
- `swaymsg` for logout
- `swaylock` for screen locking

## Installation

Clone the repository:

```bash
git clone https://github.com/ndibopeace/gtk-bar.git
cd gtk-bar
```

Make sure AGS and the required Astal services are installed and available on your system.

Start the bar with:

```bash
ags run app.jsx
```

The application entry point is `app.jsx`.

## Project Structure

```text
.
├── app.jsx                       # Application entry point
├── style.css                     # Global GTK styling
├── data/
│   └── menu_options.js           # Power-menu commands
├── utils/
│   └── pointer.js                # Pointer cursor helper
└── widgets/
    ├── battery.jsx               # Battery percentage and icon
    ├── brightness.jsx             # Screen brightness
    ├── clock.jsx                 # Clock widget
    ├── power_btn.jsx              # Power menu button
    ├── power_options.jsx          # Experimental power-options widget
    ├── status_bar.jsx             # Main status-bar layout
    └── network/
        ├── network.jsx            # Wi-Fi status and popover
        ├── styles.css             # Network widget styles
        ├── access_points/
        │   └── index.jsx          # Available Wi-Fi networks
        └── networkHeader/
            └── index.jsx          # Wi-Fi toggle header
```

## Configuration

### Power commands

Power-menu commands are defined in:

```text
data/menu_options.js
```

You can change them to match your desktop environment. The default commands include:

```javascript
{
  reboot: "systemctl reboot",
  shutdown: "systemctl poweroff",
  suspend: "systemctl suspend",
  hibernate: "systemctl hibernate",
  logout: "swaymsg exit",
  lock: "swaylock",
}
```

### Styling

Global styles are located in:

```text
style.css
```

Network-specific styles are located in:

```text
widgets/network/styles.css
```

The application watches `style.css` and reloads it when changes are detected.

## Development

Run the bar using AGS:

```bash
ags run app.jsx
```

Then edit the JSX or CSS files and restart the application when necessary. CSS changes are automatically reloaded by the application.

## Known Limitations

- Wi-Fi password entry is still under development.
- The power-menu behavior may need additional configuration for different window managers.
- The project currently targets a Wayland environment.
- Some widgets depend on system services being available through Astal.

## Roadmap

- [ ] Add Wi-Fi password authentication
- [ ] Improve Wi-Fi access-point presentation
- [ ] Add volume and microphone controls
- [ ] Add workspace indicators
- [ ] Add configurable date and time formats
- [ ] Add theme and color configuration
- [ ] Add installation instructions for common distributions
- [ ] Add screenshots and demonstration videos

## Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b my-feature
   ```

3. Make your changes.
4. Test the bar in your Wayland environment.
5. Open a pull request.

## License

No license has been specified yet.
