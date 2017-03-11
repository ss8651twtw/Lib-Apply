import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { RequestService } from "../_services/request.service";
import { FileUploader } from "ng2-file-upload";

declare var Materialize: any;

@Component( {
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: [ 'card.component.scss' ],
  host: { class: "app-wrapper" }
} )
export class CardComponent implements OnInit {

  constructor( private request: RequestService, private router: Router ) { }
  
  current_page: number = 0;
  applydate: string;

  ngOnInit() {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    this.applydate = y + '-' + m + '-' + d;
  }

  prevPage() {
    this.current_page--;
  }

  nextPage() {
    this.current_page++;
  }

  apiurl = '';
  public uploader: FileUploader = new FileUploader({url: this.apiurl});

  checkPerson: boolean = false;
  person() { this.checkPerson = true; }
  money() { this.checkPerson = false; }

  checkMale: boolean = false;
  male() { this.checkMale = true; }
  female() { this.checkMale = false; }

  onSubmitted( form: NgForm ) {
    let formData = form['value'];
    formData['time'] = this.applydate;
    formData['gender'] = this.checkMale ? 'male' : 'female';
    formData['guarantee'] = this.checkPerson;
    formData['gmoney'] = !this.checkPerson;
  }

  showMessage(data: string) {
    console.log(data);
    if (JSON.parse(data["_body"]).status == 200) {
      Materialize.toast("已成功送出", 1000);
      setTimeout( () => this.router.navigate([""]), 1500);
    }
    else Materialize.toast("送出失敗，請稍後再試", 1000);
  }
}
