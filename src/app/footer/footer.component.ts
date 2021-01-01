import { Component, OnInit } from '@angular/core';
import { StateManagementService } from "../state-management.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;
  host: string;
  constructor(private state: StateManagementService) { }

  ngOnInit() {
    this.year = new Date().getFullYear();
    this.host = window.location.host;
  }

}
