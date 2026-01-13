enum Direction {
    Up,
    Down,
    Left,
    Right
}

const gameController = (control: Direction): Direction => {
    switch(control) {
        case Direction.Up:
            console.log("Moving Up");
            break;
        case Direction.Down:
            console.log("Moving Down");
            break;
        case Direction.Left:
            console.log("Moving Left");
            break;
        case Direction.Right:
            console.log("Moving Right");
            break;
        default:
            console.log("Wrong Input");
    }
    return control;
}

const value: Direction = gameController(Direction.Up);
console.log(value);