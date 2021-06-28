import { Component, Input, OnInit } from '@angular/core';
import { Label } from 'src/app/common/label';
import { LabelService } from 'src/app/services/label.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() menuCollapsed = false;

  labels!: Label[];

  constructor (private labelService: LabelService) {}

  ngOnInit() {
    this.labels = this.labelService.getLabels();
  }
}
