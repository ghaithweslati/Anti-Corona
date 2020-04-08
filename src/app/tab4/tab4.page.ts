import { Component, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';

@Component({
  selector: 'app-ta4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page {

  
  readonly token = environment.dialogFlow.angularBot;
  readonly client = new ApiAiClient({accessToken:this.token});
  
  question;
  conversation=[];
  @ViewChild('content', { static: true }) private content: any;
  constructor() {
    this.conversation.push('مرحبا بيك ! شنوا تحب تعرف على كورونا ! إسئل و أحنا نجاوبوك');
   }

  talk()
  {
    this.conversation.push(this.question);
    this.content.scrollToBottom(150);
    this.client.textRequest(this.question).then(res=>
      {
      this.question="";
      let reponse = res.result.fulfillment.speech.slice(0);
      this.conversation.push(reponse);
      this.content.scrollToBottom(150);
      });

  }

}

