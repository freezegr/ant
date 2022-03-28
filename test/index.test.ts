import { Ant } from "../src/index"


test('index', () => {
    const ant = new Ant()
    .lootAt(56)
    .walk(100)
    .lootAt(80)
    .walk(100)
    .lootAt(290)
    .walk(100)
    .lootAt(0)
    .walk(100)
    .penDown(false)
    .walk(50)
    .penDown(true)
    .walk(50)
    .save();
});