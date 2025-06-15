export const TrackTodo = ({todoElement}) => {
    return (
        <>
            <div>{todoElement.title}</div>
            <br />
            <div>{todoElement.description}</div>
        </>
    )
}