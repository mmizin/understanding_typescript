
// The above code demonstrates the Interface Segregation Principle (ISP) in action.
// The ISP states that no client should be forced to depend on methods it does not use.
// In this case, we have separate interfaces for different functionalities (DisplayPosts, CommentPost, CreatePost).
// The AdminBlogService class implements all three interfaces, while the RegularUserBlogService class only implements the CommentPost interface.
// This allows us to create a more modular and flexible design, where each class only implements the methods it needs.
// This makes the code easier to maintain and understand, as each class has a clear responsibility.
// By adhering to the ISP, we can avoid creating large, monolithic classes that implement many methods that are not relevant to their functionality.
// This leads to better separation of concerns and a more organized codebase.

interface Post {
    title: string;
    content: string;
    comments: { author: string; content: string }[];
    id?: number;

}

interface Comment {
    author: string;
    content: string;
    id?: number;
    postId?: number;

}

interface DisplayPosts  {
    displayPosts(): void;
}

interface CommentPost {
    commentPost(post: Post, comment: Comment): void;
}

interface CreatePost {
    createPost(post: Post): void;
}

class AdminBlogService implements DisplayPosts, CommentPost, CreatePost {
    private posts: Post[] = []; // private posts = [] as Post[];


    createPost(post: Post): void {
        post.id = this.posts.length + 1;
        this.posts.push(post);
    }

    commentPost(post: Post, comment: Comment): void {
        comment.id = post.comments.length + 1;
        comment.postId = post.id;
        post.comments.push(comment);
        
    }

    displayPosts(): void {
        this.posts.forEach(post => {
            console.log(`Title: ${post.title}\n Content: ${post.content}`);
            post.comments.forEach(comment => {
                console.log(`Comment by ${comment.author}\n Content: ${comment.content}`);
            })});
    }
}

class RegularUserBlogService implements CommentPost {
    commentPost(post: Post, comment: Comment): void {
        comment.id = post.comments.length + 1;
        comment.postId = post.id;
        post.comments.push(comment);
        
    }
}

const post3: Post = {
    title: "My First Post",
    content: "This is the content of my first post.",
    comments: []
};
const post4: Post = {
    title: "My Second Post",
    content: "This is the content of my second post.",
    comments: []
};

const adminService = new AdminBlogService();
const regularUserService = new RegularUserBlogService();
adminService.createPost(post3);
adminService.createPost(post4);

adminService.commentPost(post3, { author: "John", content: "Great post!" } as Comment);
adminService.commentPost(post3, { author: "Allure", content: "Great post!" } as Comment);

adminService.commentPost(post4, { author: "Jane", content: "Thanks for sharing!" } as Comment);
adminService.commentPost(post4, { author: "Doe", content: "Thanks for sharing!" } as Comment);

adminService.displayPosts();
