import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class HostConfig {

    protocol = "http";
    domain  = window.location.host.split(":")[0];
    port = 8080;

    constructor(){}

    getHostUrl(){
        let url = this.protocol + "://" + this.domain + ":" + this.port;
        
        return url;
    }
}