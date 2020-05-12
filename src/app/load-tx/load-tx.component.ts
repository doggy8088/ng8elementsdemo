import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter  } from 'rxjs/operators';

@Component({
  selector: 'app-load-tx',
  templateUrl: './load-tx.component.html',
  styleUrls: ['./load-tx.component.css']
})
export class LoadTxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
