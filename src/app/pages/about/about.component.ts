
import { Component, OnInit } from '@angular/core';
import {HttpClient , HttpClientModule} from '@angular/common/http';
import { BrowserModule, Title , Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  li:any;
  lis=[];
  constructor(private http : HttpClient,private titleService: Title , private meta: Meta){}

  ngOnInit(): void {

    this.http.get<any>('http://www.mocky.io/v2/5ea172973100002d001eeada').subscribe(data => {
        this.li = data.list;
        let index = 0;
        for (let key of this.li) {
          index += 1;
          console.log('index ',index);
          console.log(key.name);

          this.titleService.setTitle(key.name);
          this.meta.addTags([
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@alligatorio' },
          ]);
          break;

         }
    })


    


  }





}

