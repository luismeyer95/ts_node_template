import * as module from './module/module.js'; // Don't forget the .js extension //
import type { Person } from './module/module';

const greeting = module.presentPerson(module.luis);
console.log(greeting);
console.log(greeting);
