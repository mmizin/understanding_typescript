class BlogPost {
    constructor(public title: string, public content: string) {}
}

class BlogPostService {
    private posts: BlogPost[] = [];

    addPost(post: BlogPost): void {
        this.posts.push(post);
    }

    getPosts(): BlogPost[] {
        return this.posts;
    }

    deletePost(title: string): void {
        this.posts = this.posts.filter(post => post.title !== title);
    }

    display(): void {
        console.log(this.getPosts().map(post => `${post.title},  ${post.content})}`));

    }
}

const post1 = new BlogPost("My First Post", "This is the content of my first post.");
const post2 = new BlogPost("My Second Post", "This is the content of my second post.");

const blogService = new BlogPostService();
blogService.addPost(post1);
blogService.addPost(post2);
blogService.display();