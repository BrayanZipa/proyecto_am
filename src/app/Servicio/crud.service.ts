import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Admin} from './Admin';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/AdminPF'
  constructor() { }
}
