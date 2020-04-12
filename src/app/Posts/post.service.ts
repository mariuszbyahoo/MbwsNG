import { Injectable } from '@angular/core';
import { IPost } from './post';

@Injectable()
export class PostService {
    getProducts(): IPost[] {
        return [
            {
                title:"Lorem Ipsum",
                publicationDate: "09-20-2019",
                content:"Dolor Samet Et Cetera",
                imageUrl: "assets/images/lorem-ipsum.png",
                rating: 3.4
            },
            {
                title:"Jaś Kowalski",
                publicationDate:"01-03-1999",
                content:"Ma dwadzieścia jeden lat i lubi grać w piłkę",
                imageUrl: "assets/images/boy.jpeg",
                rating: 4.5
            },
            {
                title:"Ania Nowak",
                publicationDate:"01-03-2001",
                content:"Ma dziewiętnaście lat i lubi tańczyć salsę",
                imageUrl: "assets/images/girl.jpeg",
                rating: 4.2
            }
        ]
    }
}