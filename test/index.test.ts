import { Ant } from "../src/index"


test('index', () => {
    const ant = new Ant()
    .lootAt(90)
    .walk(100)
    .lootAt(180)
    .walk(100)
    .lootAt(270)
    .walk(100)
    .lootAt(0)
    .walk(100)
    .penDown(false)
    .walk(50)
    .penDown(true)
    .walk(50)
    .save();
});