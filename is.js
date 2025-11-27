is.num = (arg) => (typeof(arg) === "number");

is.nan = (arg) => Number.isNaN(arg);

is.str = (arg) => (typeof(arg) === "string");

is.bool = (arg) => (typeof(arg) === "boolean");

is.undef = (arg) => arg === undefined;

is.def = (arg) => arg !== undefined;

is.arr = (arg) => Array.isArray(arg);

is.obj = (arg) => (typeof(arg) === "object" && !Array.isArray(arg) && arg !== null);

is.fun = (arg) => (typeof(arg) === "function");

is.truthy = (arg) => (arg) ? true : false;

is.falsy = (arg) => !is.truthy(arg);

console.log(is.falsy(0))