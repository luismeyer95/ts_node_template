import * as module from 'src/module';

describe('test', () => {
    test('testing person object', async () => {
        expect(module.luis.name).toStrictEqual('Luis');
    });

    test('testing present person', async () => {
        const greeting = module.presentPerson(module.luis);
        expect(greeting.includes('Luis')).toBeTruthy();
        expect(greeting.includes('26')).toBeTruthy();
        expect(greeting.includes('Lyon')).toBeTruthy();
    });
});
