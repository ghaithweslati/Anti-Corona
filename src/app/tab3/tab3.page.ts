import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  sliderConfig = {
    spaceBetween:10,
    slidesPerView:2.5
  }

  tabConseil=[];
  constructor() {
    this.afficherConseil();
  }
  
  afficherConseil()
  {
    for(let i=1;i<=8;i++)
       this.tabConseil.push({image:i+'.png'});
  }
}

