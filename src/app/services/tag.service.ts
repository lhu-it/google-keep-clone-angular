import { Injectable } from '@angular/core';
import { Tag } from '../common/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  getTags(): Tag[] {
    return [
      { name: 'code', slug: 'code' },
      { name: 'nhật-ký', slug: 'nhat-ky' },
      { name: 'random', slug: 'random' }
    ];
  }
}
