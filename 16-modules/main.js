import {sayHello} from "./say-hello.js";
import myDefault from "./default.js";
import {data, noDefaultSayHello} from "./default.js";
import * as all from "./default.js";

sayHello();

myDefault();
console.log(data);
noDefaultSayHello();

all.default();
console.log(all.data);
all.noDefaultSayHello();
