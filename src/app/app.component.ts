import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const paths = this.router.url.split('/');
        const cname = paths.pop();

        if (cname) {
          this.addScript(`${cname}/main.js`);
          document.getElementById('tx').innerHTML = `<app-${cname}></app-${cname}>`;
        }

      });
  }

  addScript(filename) {
    const body = document.getElementsByTagName('body')[0];
    const script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';

    let jsFound = false;
    const scripts = body.getElementsByTagName('script');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].src === script.src) {
        jsFound = true;
      }
    }
    if (!jsFound) {
      body.append(script);
    }
  }

}
