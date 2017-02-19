import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../_services/http.service";

@Component( {
  selector: 'app-manage-book',
  templateUrl: 'manage-book.component.html',
  styleUrls: [ 'manage-book.component.scss' ],
  host: { class: "app-wrapper" },
  providers: [ HttpService ]
} )
export class ManageBookComponent implements OnInit {

  applyForms: any;

  constructor( private http: HttpService ) { }

  ngOnInit() { this.http.getBookData().subscribe( data => this.applyForms = data["data"] ); }

}
