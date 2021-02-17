import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { HostConfig } from '../utils/host.config';

const httpOptions = {
    headers: new HttpHeaders({
        'Authorization': window.localStorage.getItem("token"),
    })
};

@Injectable()
export class UsersService {

    private url: string;

    constructor(private http: HttpClient, private host: HostConfig) {
        this.url = this.host.getHostUrl();
    }

    // Error handling
    private handleError(error: HttpErrorResponse): Observable<any> {
        return throwError(error.message || error);
    }

    findUser(idUser: number): Observable<any> {
        httpOptions.headers.append("Host", this.url);
        return this.http.get(this.url + "/usuario/" + idUser, httpOptions).pipe(catchError(this.handleError));
    }

    findAllUsers() {
        httpOptions.headers.append("Host", this.url);
        return this.http.get(this.url + "/usuario", httpOptions).pipe(catchError(this.handleError));
    }
}