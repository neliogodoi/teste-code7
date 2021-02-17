import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { HostConfig } from '../utils/host.config';

@Injectable()
export class LoginService {

    private url: string;

    constructor(private http: HttpClient, private host: HostConfig) {
        this.url = this.host.getHostUrl();
    }

    // Error handling
    private handleError(error: HttpErrorResponse): Observable<any> {
        return throwError(error.message || error);
    }

    login(username, password) {

        let creds = {
            "username": username,
            "password": password
        };

        return this.http.post(this.url + "/login", JSON.stringify(creds), { responseType: 'text' }).pipe(catchError(this.handleError));
    }

    isAuthenticated() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': window.localStorage.getItem("token"),
                'Content-Type': 'text/plain'
            })
        };
        return this.http.get(this.url + "/auth", httpOptions).pipe(catchError(this.handleError));
    }
}