import { useRecoilValueLoadable } from "recoil";
import { todoAtomFamily } from "../store/atoms/todo";

export const Todo = ({ id }) => {
  const currentTodo = useRecoilValueLoadable(todoAtomFamily(id));
  if (currentTodo.state == "loading") <div>Loading...</div>;
  else if (currentTodo.state == "hasValue") {
    return (
      <div>
        {currentTodo.contents.title} <br />
        {currentTodo.contents.description} <br />
      </div>
    );
  } else if (currentTodo.state == "hasError")
    <div>Error while getting data from backend</div>;
};
