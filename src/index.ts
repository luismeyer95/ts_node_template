import * as module from './module';
import type { Person } from './module';

const greeting = module.presentPerson(module.luis);
console.log(greeting);
