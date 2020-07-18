import { Component, NgModule } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

@NgModule({
  imports: [
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],
})

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  async initializeApp(): Promise<void> {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
    await this.platform.ready();
   
    this.platform.backButton.subscribeWithPriority(1, () => { // to disable hardware back button on whole app
    });

  }
}
