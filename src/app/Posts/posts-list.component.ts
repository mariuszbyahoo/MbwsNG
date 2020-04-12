import { Component, OnInit } from "@angular/core";
import { IPost } from './post';
import { PostService } from './post.service';

@Component({
    selector: 'ws-posts',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list-component.css'],
    providers: [PostService]
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
    posts: IPost[]; 

    constructor(private postService : PostService){
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
        this.posts = this.postService.getProducts();
        this.filteredPosts = this.posts;
        console.log("Posts list component initialized");
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    } 
}