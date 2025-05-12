var AdminBlogService = /** @class */ (function () {
    function AdminBlogService() {
        this.posts = []; // private posts = [] as Post[];
    }
    AdminBlogService.prototype.createPost = function (post) {
        post.id = this.posts.length + 1;
        this.posts.push(post);
    };
    AdminBlogService.prototype.commentPost = function (post, comment) {
        comment.id = post.comments.length + 1;
        comment.postId = post.id;
        post.comments.push(comment);
    };
    AdminBlogService.prototype.displayPosts = function () {
        this.posts.forEach(function (post) {
            console.log("Title: ".concat(post.title, "\n Content: ").concat(post.content));
            post.comments.forEach(function (comment) {
                console.log("Comment by ".concat(comment.author, "\n Content: ").concat(comment.content));
            });
        });
    };
    return AdminBlogService;
}());
var RegularUserBlogService = /** @class */ (function () {
    function RegularUserBlogService() {
    }
    RegularUserBlogService.prototype.commentPost = function (post, comment) {
        comment.id = post.comments.length + 1;
        comment.postId = post.id;
        post.comments.push(comment);
    };
    return RegularUserBlogService;
}());
var post3 = {
    title: "My First Post",
    content: "This is the content of my first post.",
    comments: []
};
var post4 = {
    title: "My Second Post",
    content: "This is the content of my second post.",
    comments: []
};
var adminService = new AdminBlogService();
var regularUserService = new RegularUserBlogService();
adminService.createPost(post3);
adminService.createPost(post4);
adminService.commentPost(post3, { author: "John", content: "Great post!" });
adminService.commentPost(post3, { author: "Allure", content: "Great post!" });
adminService.commentPost(post4, { author: "Jane", content: "Thanks for sharing!" });
adminService.commentPost(post4, { author: "Doe", content: "Thanks for sharing!" });
adminService.displayPosts();
