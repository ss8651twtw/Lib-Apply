import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../_services/request.service";

@Component( {
  selector: 'app-manage-book',
  templateUrl: 'manage-book.component.html',
  styleUrls: [ 'manage-book.component.scss' ],
  host: { class: "app-wrapper" },
  providers: [ RequestService ]
} )
export class ManageBookComponent implements OnInit {

  applyForms: any;

  constructor( private request: RequestService ) { }

  ngOnInit() { this.request.getBookData().subscribe( data => this.applyForms = data["data"] ); }

}
