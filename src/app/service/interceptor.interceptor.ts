import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError,tap} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(
    private _snackBar: MatSnackBar
  ) {}

// intercept request and add token
intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

  // modify request
  request = request.clone({
    // setHeaders: {
    //   Authorization: `Bearer ${localStorage.getItem('MY_TOKEN')}`
    // }
  });

//    console.log("----request----");

//  console.log(request);

//  console.log("--- end of request---");


  return next.handle(request)
  .pipe(
      tap(event => {
        if (event instanceof HttpResponse) {

          // console.log(" all looks good");
          // http response status code
          // console.log(event.status);
        }
      }, error => {
       // http response status code
          // console.log("----response----");
          // console.error("status code:");
          console.error(error.status);
          console.error(error.message);
          console.error(error.error.error);
          // console.log("--- end of response---");

          if (error.error.error) {
            this.openSnackBar(`${error.error.error}`)
          }

      })
    )

};


  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5000,
      data: message,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

}
