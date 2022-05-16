export class Todo {
  private static id = 0;
  public id: number;
  public editingMode = false;

  constructor(
    public message: string,
    public done = false,
  ) {
    this.id = ++Todo.id;
  }
}