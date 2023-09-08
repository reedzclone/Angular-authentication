import { ApiService } from '../shared/api.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class ProfileResolver implements Resolve<any> {
    constructor(private apiService: ApiService) {
    }
    resolve(route: ActivatedRouteSnapshot) {
        const dt = this.apiService.getProfile(route.params['id']);

        console.log("Resolved data", dt, route.params['id']);

        return dt;
    }
}



