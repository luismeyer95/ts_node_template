import { me } from "./info";

console.log(me);

function generateTwoStepCounter() {
    let count = 0;
    return () => (count += 2);
}

const increment = generateTwoStepCounter();

for (let i = 0; i < 5; ++i) console.log(increment());
