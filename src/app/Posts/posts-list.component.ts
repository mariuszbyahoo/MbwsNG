import { Component, OnInit } from "@angular/core";
import { IPost } from './post';

@Component({
    selector: 'ws-posts',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list-component.css']
})

export class PostsListComponent implements OnInit{
    pageTitle: string = 'Posts List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'Lorem';
    posts: IPost[] = [
        {
            title:"Lorem Ipsum",
            publicationDate: "09-20-2019",
            content:"Dolor Samet Et Cetera",
            imageUrl: "assets/images/lorem-ipsum.png"
        },
        {
            title:"Jaś Kowalski",
            publicationDate:"01-03-1999",
            content:"Ma dwadzieścia jeden lat i lubi grać w piłkę",
            imageUrl: "assets/images/boy.jpeg"
        },
        {
            title:"Ania Nowak",
            publicationDate:"01-03-2001",
            content:"Ma dziewiętnaście lat i lubi tańczyć salsę",
            imageUrl: "assets/images/girl.jpeg"
        }
    ]; 

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("Posts list component initialized");
    }
}