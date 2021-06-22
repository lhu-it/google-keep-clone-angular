import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent {
  @Input() mode: 'icon' | 'image' = 'icon';
  @Input() icon: string = '';
  @Input() imageUrl: string = '';
  @Input() small: boolean = false;
}
