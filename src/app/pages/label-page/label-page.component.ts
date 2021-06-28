import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-label-page',
  templateUrl: './label-page.component.html',
  styleUrls: ['./label-page.component.scss']
})
export class LabelPageComponent implements OnInit {
  slug!: string;

  constructor (private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
  }
}
