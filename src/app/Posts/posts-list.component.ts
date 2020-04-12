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
    _listFilter: string ;
    get listFilter() : string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredPosts = this.listFilter ? this.performFilter(this.listFilter) : this.posts;
    }
    filteredPosts: IPost[];
    posts: IPost[] = [
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
    ]; 

    constructor(){
        this.filteredPosts = this.posts;
        this.listFilter = '';
    }

    performFilter(filterBy: string): IPost[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.posts.filter((post: IPost) => 
            post.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("Posts list component initialized");
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    } 
}