export type Info = {
    name: string;
    age: number;
};

export const me: Info = {
    name: 'Luis',
    age: 26
};

console.log('salut');

[0, 3, 6, 3, 5, 7, 7, 6]
    .map((x) => x ** 2)
    .filter((x) => x > 30)
    .reduce((acc, el) => acc + el, 0);
