interface TodoProp{
  title: string,
  description: string,
  done: boolean,
}

export const Todo = (props: TodoProp) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.done}</h2>
    </>
  )
}