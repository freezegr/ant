import { Ant } from "../src/index"


test('index', () => {
    const ant = new Ant()
    ant.lootAt(90)
    ant.walk(50);
    ant.lootAt(180)
    ant.walk(50)
    ant.lootAt(270)
    ant.walk(50)
    ant.lootAt(0)
    ant.walk(50)
    ant.save();
});