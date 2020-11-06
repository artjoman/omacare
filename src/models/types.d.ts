declare module 'Models' {
    export interface Todo {
      id: number;
      text: string;
      done: boolean;
    };
  
    export type TodoList = Todo[];
  }