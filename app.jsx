import app from "ags/gtk4/app";
// import { Astal } from "ags/gtk4";
import StatusBar from "./widgets/status_bar.jsx";

app.start({
  main() {      
        app.get_monitors().forEach(StatusBar)    
  },
});
