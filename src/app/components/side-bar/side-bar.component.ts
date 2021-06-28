import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/common/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() menuCollapsed = false;

  tags!: Tag[];

  constructor (private tagService: TagService) {}

  ngOnInit() {
    this.tags = this.tagService.getTags();
  }
}
