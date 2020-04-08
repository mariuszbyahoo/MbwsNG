import { Component } from "@angular/core";

@Component({
    selector: 'ws-posts',
    templateUrl: './posts-list.component.html'
})

export class PostsListComponent{
    pageTitle: string = 'Posts List';
    posts: any[] = [
        {
            "title":"Lorem Ipsum",
            "publicationDate":"03-01-2020",
            "content":"Dolor Samet Et Cetera"
        },
        {
            "title":"Jaś Kowalski",
            "publicationDate":"03-01-2000",
            "content":"Ma dwadzieścia lat i lubi grać w piłkę"
        }
    ]; 
}