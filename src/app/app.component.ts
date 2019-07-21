import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Menu } from 'src/models/menu.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private httpClient: HttpClient){}
  
  title = 'THCMenus';
  fullMenu: Menu = new Menu();

  getFullMenu() {
    let baseUrl: string = 'https://api.crescolabs.com/p/inventory?limit=1000';
    let headers = new HttpHeaders();
    headers = headers.set('Accept', ['application/json','text/plain','*/*'])
      .set('ordering_app_id', 'fab9d05c-1bbd-47f0-a1e9-1d2ca132af0d')
      .set('store_id', '229')
      .set('x-api-key', 'wqrVgXbS7J1AalyxdMG6W4QIGRQrnptP2PnV2KfV');

    const options = { headers: headers };
     this.httpClient.get<Menu>(baseUrl, options)
      .subscribe(res => {
        this.fullMenu = res;
       
      });
      
  }
}
