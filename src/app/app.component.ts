import { Component } from '@angular/core';
import {
  Plugins,
  StatusBarBackgroundColorOptions,
  StatusBarStyle,
} from '@capacitor/core';

const { StatusBar } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isStatusBarLight = false;
  constructor() {
    StatusBar.setStyle({
      style: this.isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
    });
    this.isStatusBarLight = !this.isStatusBarLight;

    StatusBar.setBackgroundColor({
      color: "#f0f4f9"
    });

    StatusBar.setOverlaysWebView({
      overlay: false
    });

  }
}
