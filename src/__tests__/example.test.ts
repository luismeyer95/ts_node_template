import * as module from 'src/module';
import untypedModule from 'untyped-npm-module';

describe('local js module typing', () => {
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

describe('node module typing', () => {
    test('testing person object', async () => {
        const greeting = untypedModule.hello('Luis');
        expect(greeting).toStrictEqual('Hello Luis!!');
    });
});
