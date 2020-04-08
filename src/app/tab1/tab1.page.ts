import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tabMed=[];
  constructor(private callNumber: CallNumber) {
    this.afficherMedecins();
  }


  afficherMedecins()
  {
    this.tabMed.push({nom:'صفية بوزيد',num:"97604931",image:'1.png'});
    this.tabMed.push({nom:'عمر الغربي',num:"50661838",image:'4.png'});
    this.tabMed.push({nom:'راشد حمزاوي',num:"98453060",image:'5.png'});
    this.tabMed.push({nom:'سوسن بن عجمية',num:"92812770",image:'2.png'});
    this.tabMed.push({nom:'جليل بن يوسف',num:"20441044",image:'6.png'});
    this.tabMed.push({nom:'نادية',num:"52386389",image:'8.png'});
    this.tabMed.push({nom:'إيمان الكتاري',num:"26027294",image:'1.png'});
    this.tabMed.push({nom:'هاجر زخامة',num:"22879399",image:'7.png'});
    this.tabMed.push({nom:'هيديا ميساوي',num:"29369040",image:'9.png'});
    this.tabMed.push({nom:'وفاء شعبان',num:"9968096",image:'2.png'});
    this.tabMed.push({nom:'الشورفي بن حسن',num:"50271716",image:'4.png'});
    this.tabMed.push({nom:'سلمى كلسي',num:"27488039",image:'3.png'});
    this.tabMed.push({nom:'ويم معاذون',num:"98415018",image:'7.png'});
    this.tabMed.push({nom:'عتاب بن عمر',num:"24720760",image:'5.png'});
    this.tabMed.push({nom:'صلاح جدة',num:"94845013",image:'6.png'});
    this.tabMed.push({nom:'شكري عزوز ',num:"98339999",image:'8.png'});
    this.tabMed.push({nom:'ألفة زكار',num:"94041631",image:'9.png'});
    this.tabMed.push({nom:'أمل بن حليمة ',num:"98978936",image:'1.png'});
    this.tabMed.push({nom:'رابعة جوملي',num:"55024000",image:'2.png'});
    this.tabMed.push({nom:'سمية الجرموني',num:"52705522",image:'1.png'});
    this.tabMed.push({nom:'هدى خراط',num:"53359659",image:'2.png'});
    this.tabMed.push({nom:'خالد الجلاصي',num:"98706675",image:'4.png'});
    this.tabMed.push({nom:'نادية المزي',num:"55826848",image:'3.png'});
    this.tabMed.push({nom:' ليلى صفاقسي',num:"22483811",image:'7.png'});


  }

  telephoner(num)
  {
   this.callNumber.callNumber(num, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));

  
  }

}
