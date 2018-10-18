import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';

@Injectable()
export class CalculatorService {

  myUrl = environment.serviceUrl;

  constructor(private httpClient: HttpClient) {

  }

  getResult(expression: string): Observable<number> {
    return this.httpClient.get<number>(this.myUrl + 'api/agritaskcalculator/result/' + expression);
  }
}
