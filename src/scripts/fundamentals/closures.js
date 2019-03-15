import { log } from "./utils.js";

export function run(){
    let app = (function(){
        let carId = 123;
        let getId = function(){
            return carId;
        }

        return {
            getAppId: getId
        };
    })();
    log(app.getAppId());
}