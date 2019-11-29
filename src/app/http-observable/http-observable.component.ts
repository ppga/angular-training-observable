import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {TagsList} from './tags-list'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://conduit.productionready.io/api';

@Component({
  selector: 'app-http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.css']
})
export class HttpObservableComponent implements OnInit {
  
  data : Observable<TagsList>;
  tagListError: boolean = false;
  tagListErrorMsg: String = '';
  articleError: boolean = false;
  articleErrorMsg: String = '';

  
  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTags(): Observable<TagsList> {
  this.tagListError = false;
  console.log('about to fetch tags')
  return this.http.get<any[]>(`${apiUrl}/tags`)
    .pipe(
      tap(tag => console.log('fetched tags')),
      catchError(this.handleError('getTags', []))
    );
  }

  getArticle(id: String): Observable<any> {
  this.articleError = false;
  const url = `${apiUrl}/articles/${id}`;
  return this.http.get<any>(url).pipe(
    tap(_ => console.log(`fetched product id=${id}`)),
    catchError(this.handleError<any>(`getProduct id=${id}`))
  );
  }

  ngOnInit() {
   this.data =  this.getTags();
  // this.data.subscribe((res: any) => {
  //   this.data = res;
  //   console.log('TAGS FETCHED: ');
  //   console.log(this.data);
  // }, err => {
  //   console.log('Tag list fetch error');
  //   console.log(err);
  //   this.tagListError = true;
  //   this.tagListErrorMsg = JSON.stringify(err);
  // });
  
  this.getArticle('anyTag')
  .subscribe((res: any) => {
    this.data = res;
    console.log(this.data);
    this.articleError = true;
  }, err => {
    console.log('Article fetch error:');
    console.log(err);
    this.articleError = true;
    this.articleErrorMsg = JSON.stringify(err);
  });
 
 }

}