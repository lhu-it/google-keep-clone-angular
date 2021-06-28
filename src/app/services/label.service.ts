import { Injectable } from '@angular/core';
import { Label } from '../common/label';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  getLabels(): Label[] {
    return [
      { name: 'code', slug: 'code' },
      { name: 'nhật-ký', slug: 'nhat-ky' },
      { name: 'random', slug: 'random' }
    ];
  }
}
