import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page implements OnInit {
  accounts = [
    {
      account: "123456"
    },
    {
      account: "789456123"
    }
  ];

  external = [
    {
      ext: "333333"
    },
    {
      ext: "77777"
    }
  ];
  selectedType:string = "";

  ngOnInit(): void {
    this.preparePickerData();
  }

  pickerData: any[] = [];
  constructor() {}

  preparePickerData() {
    this.accounts.forEach(x => {
      var temp = {
        text:x.account,
        value: x.account,
        isExterna: false
      }
      this.pickerData.push(temp)
    });
    this.external.forEach(x => {
      var temp = {
        text: x.ext,
        value:x.ext,
        isExterna:true
      }
      this.pickerData.push(temp);
    })
  }

  pickerSelection(value){
     for(let index = 0;index < this.pickerData.length;index++){
       let pd = this.pickerData[index];
       if(pd.text === value.text){
        this.selectedType = pd.isExterna ? "External Selected":"Account Selected";
        break;
       }
     }
  }
}
