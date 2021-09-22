import { me } from 'src/info';

describe('test', () => {
    test('#1', async () => {
        expect(me.name).toBe('Luis');
    });
});
