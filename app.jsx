#!/usr/bin/env -S ags run

import app from "ags/gtk4/app";
// import { Astal } from "ags/gtk4";
import StatusBar from "./widgets/status_bar.jsx";
import css from "./style.css"
import { monitorFile } from "ags/file"

const cssPath = `./style.css`


function reloadCss() {
  console.log("Reloading CSS...");
  app.apply_css(cssPath);
}

// reloadCss();

monitorFile(cssPath, () => {
  reloadCss();
});

app.start({
  css: css,
  main() {      
        app.get_monitors().forEach(StatusBar)    
  },
});
