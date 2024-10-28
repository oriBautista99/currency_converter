import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  @Input({required: true}) title = 'Conversion Result';
  @Input({required: true}) currencyTo = '1 USD';
  @Input({required: true}) currencyFrom = '1.1 EUR';

}
