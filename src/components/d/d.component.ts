import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navegacion1()
  {
    this.router.navigate(['web1'])
  }
  navegacion2()
  {
    this.router.navigate(['web2'])
  }
}
