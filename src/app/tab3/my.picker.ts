import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";

@Component({
  selector: "my-picker",
  templateUrl: "my.picker.html"
})
export class MyPicker {
  @Input("cancelBtn") cancelBtn: string = "Cancel";
  @Input("okBtn") okBtn: string = "OK";
  @Input("columnName") columnName: string;
  @Input("content") content: any[] = [];
  @Output() onPickerSelection = new EventEmitter();
  private picker: any;

  constructor(private pickerCtrl: PickerController) {}

  async showPicker() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: this.cancelBtn,
          role: "cancel"
        },
        {
          text: this.okBtn,
          handler: (value: any) => {
            console.log(value, "from picker options");
            this.pickerSelection(value);
          }
        }
      ],
      columns: [
        {
          name: this.columnName,
          options: this.getColumnOptions()
        }
      ]
    };
    this.picker = await this.pickerCtrl.create(opts);
    this.picker.present();
  }

  getColumnOptions() {
    let options = [];
    this.content.forEach(c => {
      options.push({ text: c.text, value: c.value });
    });
    return options;
  }
  pickerSelection(value) {
    const data: any = {
      text: value[this.columnName].text,
      value: value[this.columnName].value,
    };
    console.log(data, "from picker");
    this.picker.dismiss();
    this.onPickerSelection.emit(data);
  }
}
