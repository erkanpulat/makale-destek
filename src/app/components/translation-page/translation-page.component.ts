import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
declare var jQuery: any;

@Component({
  selector: 'app-translation-page',
  templateUrl: './translation-page.component.html',
  styleUrls: ['./translation-page.component.css']
})
export class TranslationPageComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  fileProgress = 0;
  fileUploadMessage = '';
  isHiddenSaveOrderForm: boolean;

  orderFormGroup = new FormGroup({
    file: new FormControl('', Validators.required),
    customerNameSurname: new FormControl('', Validators.required),
    customerPhoneNumber: new FormControl('', Validators.required),
    customerEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    orderType: new FormControl('')
  });

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.jqueryScript();
    this.isHiddenSaveOrderForm = true;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.orderFormGroup.controls['file'].setValue(this.selectedFiles[0] ? this.selectedFiles[0].name : '');
  }

  submit() {
    this.fileUploadMessage = 'Lütfen Bekleyiniz...';
    this.fileProgress = 0;
    this.currentFile = this.selectedFiles[0];
    this.orderFormGroup.get('file').setValue(this.currentFile);
    this.orderFormGroup.get('orderType').setValue("Çeviri Siparişi");
    this.orderService.upload(this.orderFormGroup).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.fileProgress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileUploadMessage = event.body.message;
          this.isHiddenSaveOrderForm = false;
        }
      },
      err => {
        this.fileProgress = 0;
        this.fileUploadMessage = 'Dosya yükleme işlemi başarısız!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }

  jqueryScript() {
    (function ($) {
      $(document).ready(function () {
        $(document).on('change', '.custom-file-input', function (event) {
          $(this).next('.custom-file-label').html(event.target.files[0].name);
        });
        // $('#personPhoneNumber').keyup(function(){
        //   $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3'))
        // });
      });
    })(jQuery);
  }

  get customerEmail() {
    return this.orderFormGroup.get('customerEmail');
  }

  get customerNameSurname() {
    return this.orderFormGroup.get('customerNameSurname');
  }

  get customerPhoneNumber() {
    return this.orderFormGroup.get('customerPhoneNumber');
  }

}
