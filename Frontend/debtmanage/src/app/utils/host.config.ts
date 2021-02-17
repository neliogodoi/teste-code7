import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class HostConfig {

    protocol = "http";
    domain  = "localhost"
    port = 8080;

    constructor(){}

    getHostUrl(){
        return this.protocol + "://" + this.domain + ":" + this.port;
    }
}