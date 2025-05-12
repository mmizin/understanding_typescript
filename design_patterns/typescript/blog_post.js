var BlogPost = /** @class */ (function () {
    function BlogPost(title, content) {
        this.title = title;
        this.content = content;
    }
    return BlogPost;
}());
var BlogPostService = /** @class */ (function () {
    function BlogPostService() {
        this.posts = [];
    }
    BlogPostService.prototype.addPost = function (post) {
        this.posts.push(post);
    };
    BlogPostService.prototype.getPosts = function () {
        return this.posts;
    };
    BlogPostService.prototype.deletePost = function (title) {
        this.posts = this.posts.filter(function (post) { return post.title !== title; });
    };
    BlogPostService.prototype.display = function () {
        console.log(this.getPosts().map(function (post) { return "".concat(post.title, ",  ").concat(post.content, ")}"); }));
    };
    return BlogPostService;
}());
var post1 = new BlogPost("My First Post", "This is the content of my first post.");
var post2 = new BlogPost("My Second Post", "This is the content of my second post.");
var blogService = new BlogPostService();
blogService.addPost(post1);
blogService.addPost(post2);
blogService.display();
