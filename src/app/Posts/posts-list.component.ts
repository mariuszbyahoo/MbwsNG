import { Component } from "@angular/core";

@Component({
    selector: 'ws-posts',
    templateUrl: './posts-list.component.html'
})

export class PostsListComponent{
    pageTitle: string = 'Posts List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'Lorem';
    posts: any[] = [
        {
            "title":"Lorem Ipsum",
            "publicationDate":"03-01-2020",
            "content":"Dolor Samet Et Cetera",
            "imageUrl": "assets/images/lorem-ipsum.png"
        },
        {
            "title":"Jaś Kowalski",
            "publicationDate":"03-01-2000",
            "content":"Ma dwadzieścia lat i lubi grać w piłkę",
            "imageUrl": "assets/images/boy.jpeg"
        },
        {
            "title":"Ania Nowak",
            "publicationDate":"03-01-2000",
            "content":"Ma dwadzieścia lat i lubi tańczyć salsę",
            "imageUrl": "assets/images/girl.jpeg"
        }
    ]; 

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}