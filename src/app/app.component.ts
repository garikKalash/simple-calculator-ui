import {Component, OnInit} from '@angular/core';
import {CalculatorService} from './service/CalculatorService';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _expression = '';
  result: number = null;
  errorMessage = '';

  evaluatorForm: FormGroup;

  constructor(private calculatorService: CalculatorService) {}

  evaluateExpression() {
    this.calculatorService.getResult(this._expression).subscribe(value => {
      this.result = value;
      this.errorMessage = '';
    },
    error => {
      if ( error.status === 404) {
        this.errorMessage = 'The passed expression is incorrect, please read the rules of evaluator';
      } else {
        this.errorMessage = error.error;
        this.result = null;
      }
    });
  }

  ngOnInit(): void {
    this.evaluatorForm =  new FormGroup({
      'expression': new FormControl(this._expression, [Validators.required,
        Validators.minLength(3)])
    });
  }

  get expression() {
    return this.evaluatorForm.get('expression');
  }

}
