import expect from "expect";
import {
  setSearchText,
  toggleShowCompleted,
  addTodo,
  addTodos,
  toggleTodo
} from "actions";

describe("Actions", () => {
  it("should generate search text action", () => {
    const action = {
      type: "SET_SEARCH_TEXT",
      searchText: "Some search text"
    };
    const res = setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it("should generate toggle show completed action", () => {
    const action = {
      type: "TOGGLE_SHOW_COMPLETED"
    };
    const res = toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it("should generate add todo action", () =>  {
    const action = {
      type: "ADD_TODO",
      text: "Thing to do"
    };
    const res = addTodo(action.text);

    expect(res).toEqual(action);
  });

  it("should generate add todos action object", () => {
    const todos = [{
      id: "111",
      text: "anything",
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    const action = {
      type: "ADD_TODOS",
      todos
    };
    const res = addTodos(todos);

    expect(res).toEqual(action);
  });

  it("should generate toggle todo action", () => {
    const action = {
      type: "TOGGLE_TODO",
      id: 1
    };
    const res = toggleTodo(action.id);

    expect(res).toEqual(action)
  })
});
