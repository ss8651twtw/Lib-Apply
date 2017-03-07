import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { RequestService } from "../_services/request.service"

@Component( {
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: [ 'card.component.scss' ],
  host: { class: "app-wrapper" }
} )
export class CardComponent implements OnInit {

  constructor( private request: RequestService ) { }
  
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

}
