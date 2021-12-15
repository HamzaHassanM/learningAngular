import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor() { }
  constructor(private titleService: Title , private meta: Meta) {}

  setDocTitle(title: string) {
    console.log(title);
    this.titleService.setTitle(title);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@alligatorio' },
    ]);
 }
  ngOnInit(): void {
  }

}
