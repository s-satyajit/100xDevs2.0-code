import { useRecoilValue } from "recoil";
import { todosAtomFamily } from "../store/atoms/todo";

export const Todo = ({ id }) => {
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      <div> <br/>
        {currentTodo.title} <br/>
        {currentTodo.description}
      </div>
    </>
  );
};
