import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({

})
export class InterceptorService implements HttpInterceptor {

    constructor(private dataService: DataService) { }


  }
}
