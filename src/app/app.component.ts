import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

/*
var lat:number;
var long:number;*/

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
    //this.verification();
  /*  lat=0;
    long=0;*/
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  /*verification() {


    setInterval(function(){   
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
  
      function success(pos) {
        var crd = pos.coords;
        
        if(!lat||!long)
        {
          lat=crd.latitude;
          long=crd.longitude;
        }
        let  dist = Math.sqrt(Math.pow( crd.latitude-lat,2)+Math.pow((crd.longitude-long),2));
        lat=crd.latitude;
        long=crd.longitude;
        alert(dist);


      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
        
      navigator.geolocation.getCurrentPosition(success, error, options);}, 3000);
  }

  

*/

}
