import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
    fetch('http://localhost:3000/user', {
      method:  'get'
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log('parsed json: ', json);
    }).catch(function(ex) {
      console.log('parsing failed: ', ex);
    });
  }


}
