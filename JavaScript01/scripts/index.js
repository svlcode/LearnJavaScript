import * as numbers from './numbers.js';
import * as arrays from './arrays.js';
import { Truthy, Falsy } from './booleans.js';
import * as thisKey from './thisKeyword.js';
import * as objects from './objects.js';
import * as bf from './functions/basicFunctions.js';
import * as ff from './functions/factoryFunctions.js';
import * as cf from './functions/constructorFunctions.js';
import * as vlc from './var_let_const.js';
import * as rst from './rest_parameters.js';

numbers.divide();
arrays.mixedValues();
arrays.pushPop();
arrays.removeFirstElement();
arrays.splice();
Truthy();
Falsy();

thisKey.Run();
objects.run();
ff.run();
cf.run();
vlc.run();
bf.run();
rst.run();