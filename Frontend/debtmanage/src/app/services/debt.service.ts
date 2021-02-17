import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Debt } from '../debts/debt';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HostConfig } from '../utils/host.config';

const httpOptions = {
    headers: new HttpHeaders({
        'Authorization': window.localStorage.getItem("token"),
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class DebtService {

    private url: string;

    constructor(private http: HttpClient, private host: HostConfig) {
        this.url = this.host.getHostUrl();
    }

    // Error handling
    private handleError(error: HttpErrorResponse): Observable<any> {
        return throwError(error.message || error);
    }

    findDebtsByUser(idUser: number): Observable<Debt[]> {
        return this.http.get(this.url + "/divida/devedor/" + idUser, httpOptions).pipe(catchError(this.handleError));
    }

    findDebt(id: string): Observable<Debt> {
        return this.http.get(this.url + "/divida/" + id, httpOptions).pipe(catchError(this.handleError));
    }

    saveDebt(debt: Debt): Observable<Debt> {
        let json: string = JSON.stringify(debt).replace(/\_/gi,"");
        if(debt.id === undefined)
            return this.http.post(this.url + "/divida", json, httpOptions).pipe(catchError(this.handleError));
        else
            return this.http.put(this.url + "/divida", json, httpOptions).pipe(catchError(this.handleError));
    }

    deleteDebt(id: string) {
        return this.http.delete(this.url + "/divida/" + id, httpOptions).pipe(catchError(this.handleError));
    }
}