import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // scannerEnabled : boolean;
  // autofocusEnabled : boolean;
  //     selectedDevice: MediaDeviceInfo;

  displayCameras(e) {
      console.log(e);
  }

}
