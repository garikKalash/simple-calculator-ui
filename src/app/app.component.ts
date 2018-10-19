import { Component } from '@angular/core';
import {CalculatorService} from './service/CalculatorService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expression = '';
  result: number = null;
  errorMessage: string = '';
  constructor(private calculatorService: CalculatorService) {}

  evaluateExpression() {
    this.calculatorService.getResult(this.expression).subscribe(value => {
      this.result = value;
      this.errorMessage = '';
    },
    error => {
        this.errorMessage = error.error;
        this.result = null;
    });
  }

}
