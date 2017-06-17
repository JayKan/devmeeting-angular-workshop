import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../../app.module';

@Component({
  selector: 'product-cmp',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() product: IProduct;
}

