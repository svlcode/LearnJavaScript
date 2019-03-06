import { log } from "../utils.js";

// arrow functions do not have their own 'this' value
// 'this' refers to the enclosing context.
export function run(){
    log('arrow functions...');

    withoutParams();
    oneParameter();
    multipleParams();

    function multipleParams() {
        let getValue = (prefix, suffix) => prefix + 123 + suffix;
        log(getValue('Id: ', ' Vio'));
    }

    function oneParameter() {
        let getId = prefix => prefix + 123;
        log(getId('ID: '));
    }

    function withoutParams() {
        let getId = () => 123;
        // this is similar with:
        //let getId = _ => 123;

        log(getId());
    }
}

