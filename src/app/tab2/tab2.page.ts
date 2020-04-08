import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  reponse1;reponse2;reponse3;reponse4;reponse5;
  reponse6;reponse7;reponse8;reponse9;reponse10;
  constructor() {
  }

  test()
  {
    let corona=0;
    let grippe=0;

    if(this.reponse1)
      corona+=1;
    if(this.reponse2)
      grippe+=1;
    if(this.reponse3)
      corona+=1
    if(this.reponse4)
      corona+=1;
    if(this.reponse5)
      corona+=1;
    if(this.reponse6)
      grippe+=1;
    if(this.reponse7)
      corona+=1;
    if(this.reponse8)
      corona+=1;
    if(this.reponse9)
      grippe+=1;
    if(this.reponse10)
      grippe+=1;


    if(corona+grippe<2)
    {
        presentAlert("صحتك بخير .. تهنى و ما تقلقش روحك");  
    }
    else
    {
      if(Math.max(corona,grippe)==corona && this.reponse1)
      presentAlert("تظهر عليك أعراض فيروس كورونا ، كلم الجهات المختصة و حاول ما تحتك بحد لمدة هذه.");  
      else
         presentAlert("الأعراض إلي عندك أعراض ڤريب، إطمن و ما تقلقش و إن شاء الله لاباس");   
    }

      function presentAlert(msg) {
    const alert = document.createElement('ion-alert');
    alert.header = "نتيجة الفحص";
    alert.message = msg;

  
    document.body.appendChild(alert);
    return alert.present();
  }

  }


  
}
