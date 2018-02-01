import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PostService {

    domain = 'http://localhost:3000'

    constructor(
        private http: Http
    ) { }

    addPost(post) {
        return this.http.post(`${this.domain}/posts`, post)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }

    getAllPosts() {
        return this.http.get(`${this.domain}/posts`)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }


}