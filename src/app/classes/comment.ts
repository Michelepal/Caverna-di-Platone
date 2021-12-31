export class Comment {

      postId?: number;
      id: number;
      name: string;
      title: string;
      body: string;

      constructor(postId: number, id: number, name: string, title:string, body:string) {
      this.userId = userId;
      this.id = id;
      this.name = name;
      this.title = title;
      this.body = body;
      }
}
