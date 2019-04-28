import * as num from './fundamentals/numbers.js';
import * as arr from './fundamentals/arrays.js';
import { Truthy, Falsy } from './fundamentals/booleans.js';
import * as thisKey from './fundamentals/thisKeyword.js';
import * as obj from './fundamentals/objects.js';
import * as bf from './fundamentals/functions/basicFunctions.js';
import * as ff from './fundamentals/functions/factoryFunctions.js';
import * as cf from './fundamentals/functions/constructorFunctions.js';
import * as vlc from './fundamentals/var_let_const.js';
import * as sps from './fundamentals/spread_syntax.js';
import * as rst from './fundamentals/rest_parameters.js';
import * as cnv from './fundamentals/conversions.js';
import * as jsn from './fundamentals/working_with_JSON.js';
import * as cls from './fundamentals/classes.js';
import * as mod from './fundamentals/modules.js';
import * as opr from './fundamentals/operators.js';
import * as clo from './fundamentals/closures.js';
import * as arw from './fundamentals/functions/arrowFunctions.js';
import * as dfp from './fundamentals/functions/defaultParameters.js';
import * as pro from './fundamentals/prototypes.js';
import * as err from './fundamentals/errors.js';
import * as prm from './fundamentals/promises.js';
import * as http_jquery from './fundamentals/http_request_using_jquery.js';

// num.divide();
// Truthy();
// Falsy();
// thisKey.run();
// obj.run();
// ff.run();
// cf.run();
// vlc.run();
// bf.run();
// arr.run();
// sps.run();
// rst.run();
// cnv.run();
// jsn.run();
// cls.run();
// mod.run();
// opr.run();
// clo.run();
// arw.run();
// dfp.run();
// pro.run();
// err.run();
prm.run();
//http_jquery.run();

let ajaxDemoBtn = window.document.getElementById('ajax-demo');
ajaxDemoBtn.addEventListener('click', function(){
    window.location.href='ajax.html';
});

let timersDemoBtn = window.document.getElementById('timers-demo');
timersDemoBtn.addEventListener('click', function(){
    window.location.href = 'timers.html';
});

let formsDemoBtn = window.document.getElementById('forms-demo');
formsDemoBtn.addEventListener('click', function(){
    window.location.href = 'forms.html';
});