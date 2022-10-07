function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Picker", function () { return $7be3f6ba01507d21$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "Emoji", function () { return $9c6cf3620cfad306$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "SearchIndex", function () { return $8f9034744078e207$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "FrequentlyUsed", function () { return $26c4208b83093c27$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "init", function () { return $b79b4feb8fc394aa$export$2cd8252107eb640b; });
$parcel$export(module.exports, "Data", function () { return $b79b4feb8fc394aa$export$2d0294657ab35f1b; });
$parcel$export(module.exports, "I18n", function () { return $b79b4feb8fc394aa$export$dbe3113d60765c1a; });
$parcel$export(module.exports, "getEmojiDataFromNative", function () { return $98790827c4982bdf$export$5ef5574deca44bc0; });
function $0f6de0ee06d6d662$export$2e2bcd8739ae039(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}

function $22bbea2e4f5d5dfd$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $22bbea2e4f5d5dfd$export$2e2bcd8739ae039(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $22bbea2e4f5d5dfd$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $22bbea2e4f5d5dfd$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}

function $c79c945e654c9102$export$2e2bcd8739ae039(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function $22c4dbb765f86cca$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $22c4dbb765f86cca$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
    if (protoProps) $22c4dbb765f86cca$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $22c4dbb765f86cca$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}

function $1459522e281add88$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

function $12e0ddbeed14aa26$var$setPrototypeOf(o1, p1) {
    $12e0ddbeed14aa26$var$setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $12e0ddbeed14aa26$var$setPrototypeOf(o1, p1);
}
function $12e0ddbeed14aa26$export$2e2bcd8739ae039(o, p) {
    return $12e0ddbeed14aa26$var$setPrototypeOf(o, p);
}


function $429f412a5e3c4d49$export$2e2bcd8739ae039(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $12e0ddbeed14aa26$export$2e2bcd8739ae039(subClass, superClass);
}


function $a5d09c5d3015221e$export$2e2bcd8739ae039(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $1459522e281add88$export$2e2bcd8739ae039(target, key, source[key]);
        });
    }
    return target;
}

function $6aaffd5eb8b4f7e0$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return arr;
}


function $4d2a739ffac57e07$export$2e2bcd8739ae039(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}


function $31ccfc08500cc60d$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}


function $d6ed1bc06105b202$export$2e2bcd8739ae039(arr, i) {
    return $6aaffd5eb8b4f7e0$export$2e2bcd8739ae039(arr) || $4d2a739ffac57e07$export$2e2bcd8739ae039(arr, i) || $31ccfc08500cc60d$export$2e2bcd8739ae039();
}

function $799ee58817e742fb$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}



function $01cb59c6f70d9056$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}


function $ca7087421909e81d$export$2e2bcd8739ae039(arr) {
    return $799ee58817e742fb$export$2e2bcd8739ae039(arr) || $4d2a739ffac57e07$export$2e2bcd8739ae039(arr) || $01cb59c6f70d9056$export$2e2bcd8739ae039();
}

function $78738e43ceaeaba0$export$2e2bcd8739ae039(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}

function $d49f3a4770943dfe$var$isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function $d49f3a4770943dfe$var$construct(Parent1, args1, Class1) {
    if ($d49f3a4770943dfe$var$isNativeReflectConstruct()) $d49f3a4770943dfe$var$construct = Reflect.construct;
    else $d49f3a4770943dfe$var$construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return $d49f3a4770943dfe$var$construct.apply(null, arguments);
}
function $d49f3a4770943dfe$export$2e2bcd8739ae039(Parent, args, Class) {
    return $d49f3a4770943dfe$var$construct.apply(null, arguments);
}


function $14e7541a7fc647ae$export$2e2bcd8739ae039(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}


function $e68907a916278483$var$getPrototypeOf(o1) {
    $e68907a916278483$var$getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $e68907a916278483$var$getPrototypeOf(o1);
}
function $e68907a916278483$export$2e2bcd8739ae039(o) {
    return $e68907a916278483$var$getPrototypeOf(o);
}



function $8ff3341b97dd3f49$var$wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    $8ff3341b97dd3f49$var$wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !$14e7541a7fc647ae$export$2e2bcd8739ae039(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return $d49f3a4770943dfe$export$2e2bcd8739ae039(Class, arguments, $e68907a916278483$export$2e2bcd8739ae039(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return $12e0ddbeed14aa26$export$2e2bcd8739ae039(Wrapper, Class);
    };
    return $8ff3341b97dd3f49$var$wrapNativeSuper(Class1);
}
function $8ff3341b97dd3f49$export$2e2bcd8739ae039(Class) {
    return $8ff3341b97dd3f49$var$wrapNativeSuper(Class);
}

function $932d6de2acd2c49d$export$2e2bcd8739ae039() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}





function $7879a474a3860768$export$2e2bcd8739ae039(self, call) {
    if (call && ($78738e43ceaeaba0$export$2e2bcd8739ae039(call) === "object" || typeof call === "function")) return call;
    return $0f6de0ee06d6d662$export$2e2bcd8739ae039(self);
}


function $36345c11dd10297b$export$2e2bcd8739ae039(Derived) {
    var hasNativeReflectConstruct = $932d6de2acd2c49d$export$2e2bcd8739ae039();
    return function _createSuperInternal() {
        var Super = $e68907a916278483$export$2e2bcd8739ae039(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = $e68907a916278483$export$2e2bcd8739ae039(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return $7879a474a3860768$export$2e2bcd8739ae039(this, result);
    };
}



var $f5fc4923ef4118c4$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $f5fc4923ef4118c4$var$runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {
    };
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({
        }, "");
    } catch (err1) {
        define = function define(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {
    };
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {
    };
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value1 = result.value;
                if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value1).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {
        };
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key1 in object)keys.push(key1);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next1 = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next1.next = next1;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function abrupt(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {
            };
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
"object" === "object" ? $f5fc4923ef4118c4$exports : {
});
try {
    regeneratorRuntime = $f5fc4923ef4118c4$var$runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = $f5fc4923ef4118c4$var$runtime;
    else Function("r", "regeneratorRuntime = r")($f5fc4923ef4118c4$var$runtime);
}



var $d5fc6ac583bc94a1$var$n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, $d5fc6ac583bc94a1$var$u, $d5fc6ac583bc94a1$export$a8257692ac88316c, $d5fc6ac583bc94a1$var$t, $d5fc6ac583bc94a1$var$r, $d5fc6ac583bc94a1$var$o, $d5fc6ac583bc94a1$var$f, $d5fc6ac583bc94a1$var$e = {
}, $d5fc6ac583bc94a1$var$c = [], $d5fc6ac583bc94a1$var$s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function $d5fc6ac583bc94a1$var$a(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    for(var u in $d5fc6ac583bc94a1$export$41c562ebe57d11e2)n[u] = $d5fc6ac583bc94a1$export$41c562ebe57d11e2[u];
    return n;
}
function $d5fc6ac583bc94a1$var$h(n) {
    var $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = n.parentNode;
    $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.removeChild(n);
}
function $d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c) {
    var t, r, o, f = {
    };
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? $d5fc6ac583bc94a1$var$n.call(arguments, 2) : $d5fc6ac583bc94a1$export$a8257692ac88316c), "function" == typeof $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && null != $d5fc6ac583bc94a1$export$41c562ebe57d11e2.defaultProps) for(o in $d5fc6ac583bc94a1$export$41c562ebe57d11e2.defaultProps)void 0 === f[o] && (f[o] = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.defaultProps[o]);
    return $d5fc6ac583bc94a1$var$y($d5fc6ac583bc94a1$export$41c562ebe57d11e2, f, t, r, null);
}
function $d5fc6ac583bc94a1$var$y(n, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o) {
    var f = {
        type: n,
        props: $d5fc6ac583bc94a1$export$a8257692ac88316c,
        key: t,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++$d5fc6ac583bc94a1$var$u : o
    };
    return null == o && null != $d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode(f), f;
}
function $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43() {
    return {
        current: null
    };
}
function $d5fc6ac583bc94a1$export$ffb0004e005737fa(n) {
    return n.children;
}
function $d5fc6ac583bc94a1$export$16fa2f45be04daa8(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    this.props = n, this.context = $d5fc6ac583bc94a1$export$41c562ebe57d11e2;
}
function $d5fc6ac583bc94a1$var$k(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    if (null == $d5fc6ac583bc94a1$export$41c562ebe57d11e2) return n.__ ? $d5fc6ac583bc94a1$var$k(n.__, n.__.__k.indexOf(n) + 1) : null;
    for(var u; $d5fc6ac583bc94a1$export$41c562ebe57d11e2 < n.__k.length; $d5fc6ac583bc94a1$export$41c562ebe57d11e2++)if (null != (u = n.__k[$d5fc6ac583bc94a1$export$41c562ebe57d11e2]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? $d5fc6ac583bc94a1$var$k(n) : null;
}
function $d5fc6ac583bc94a1$var$b(n) {
    var $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = 0; $d5fc6ac583bc94a1$export$41c562ebe57d11e2 < n.__k.length; $d5fc6ac583bc94a1$export$41c562ebe57d11e2++)if (null != (u = n.__k[$d5fc6ac583bc94a1$export$41c562ebe57d11e2]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return $d5fc6ac583bc94a1$var$b(n);
    }
}
function $d5fc6ac583bc94a1$var$m(n) {
    (!n.__d && (n.__d = !0) && $d5fc6ac583bc94a1$var$t.push(n) && !$d5fc6ac583bc94a1$var$g.__r++ || $d5fc6ac583bc94a1$var$o !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2.debounceRendering) && (($d5fc6ac583bc94a1$var$o = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.debounceRendering) || $d5fc6ac583bc94a1$var$r)($d5fc6ac583bc94a1$var$g);
}
function $d5fc6ac583bc94a1$var$g() {
    for(var n1; $d5fc6ac583bc94a1$var$g.__r = $d5fc6ac583bc94a1$var$t.length;)n1 = $d5fc6ac583bc94a1$var$t.sort(function(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
        return n.__v.__b - $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__v.__b;
    }), $d5fc6ac583bc94a1$var$t = [], n1.some(function(n) {
        var $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o;
        n.__d && (r = (t = ($d5fc6ac583bc94a1$export$41c562ebe57d11e2 = n).__v).__e, (o = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__P) && (u = [], ($d5fc6ac583bc94a1$export$a8257692ac88316c = $d5fc6ac583bc94a1$var$a({
        }, t)).__v = t.__v + 1, $d5fc6ac583bc94a1$var$j(o, t, $d5fc6ac583bc94a1$export$a8257692ac88316c, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [
            r
        ] : null, u, null == r ? $d5fc6ac583bc94a1$var$k(t) : r, t.__h), $d5fc6ac583bc94a1$var$z(u, t), t.__e != r && $d5fc6ac583bc94a1$var$b(t)));
    });
}
function $d5fc6ac583bc94a1$var$w(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o, f, s, a) {
    var h, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43, $d5fc6ac583bc94a1$export$16fa2f45be04daa8, b, m, g, w = $d5fc6ac583bc94a1$export$a8257692ac88316c && $d5fc6ac583bc94a1$export$a8257692ac88316c.__k || $d5fc6ac583bc94a1$var$c, $d5fc6ac583bc94a1$export$47e4c5b300681277 = w.length;
    for(u.__k = [], h = 0; h < $d5fc6ac583bc94a1$export$41c562ebe57d11e2.length; h++)if (null != ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = u.__k[h] = null == ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2[h]) || "boolean" == typeof $d5fc6ac583bc94a1$export$16fa2f45be04daa8 ? null : "string" == typeof $d5fc6ac583bc94a1$export$16fa2f45be04daa8 || "number" == typeof $d5fc6ac583bc94a1$export$16fa2f45be04daa8 || "bigint" == (typeof $d5fc6ac583bc94a1$export$16fa2f45be04daa8 === "undefined" ? "undefined" : $78738e43ceaeaba0$export$2e2bcd8739ae039($d5fc6ac583bc94a1$export$16fa2f45be04daa8)) ? $d5fc6ac583bc94a1$var$y(null, $d5fc6ac583bc94a1$export$16fa2f45be04daa8, null, null, $d5fc6ac583bc94a1$export$16fa2f45be04daa8) : Array.isArray($d5fc6ac583bc94a1$export$16fa2f45be04daa8) ? $d5fc6ac583bc94a1$var$y($d5fc6ac583bc94a1$export$ffb0004e005737fa, {
        children: $d5fc6ac583bc94a1$export$16fa2f45be04daa8
    }, null, null, null) : $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__b > 0 ? $d5fc6ac583bc94a1$var$y($d5fc6ac583bc94a1$export$16fa2f45be04daa8.type, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.props, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.key, null, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__v) : $d5fc6ac583bc94a1$export$16fa2f45be04daa8)) {
        if ($d5fc6ac583bc94a1$export$16fa2f45be04daa8.__ = u, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__b = u.__b + 1, null === ($d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = w[h]) || $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 && $d5fc6ac583bc94a1$export$16fa2f45be04daa8.key == $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.key && $d5fc6ac583bc94a1$export$16fa2f45be04daa8.type === $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.type) w[h] = void 0;
        else for($d5fc6ac583bc94a1$export$c8a8987d4410bf2d = 0; $d5fc6ac583bc94a1$export$c8a8987d4410bf2d < $d5fc6ac583bc94a1$export$47e4c5b300681277; $d5fc6ac583bc94a1$export$c8a8987d4410bf2d++){
            if (($d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = w[$d5fc6ac583bc94a1$export$c8a8987d4410bf2d]) && $d5fc6ac583bc94a1$export$16fa2f45be04daa8.key == $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.key && $d5fc6ac583bc94a1$export$16fa2f45be04daa8.type === $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.type) {
                w[$d5fc6ac583bc94a1$export$c8a8987d4410bf2d] = void 0;
                break;
            }
            $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = null;
        }
        $d5fc6ac583bc94a1$var$j(n, $d5fc6ac583bc94a1$export$16fa2f45be04daa8, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 || $d5fc6ac583bc94a1$var$e, t, r, o, f, s, a), b = $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__e, ($d5fc6ac583bc94a1$export$c8a8987d4410bf2d = $d5fc6ac583bc94a1$export$16fa2f45be04daa8.ref) && $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.ref != $d5fc6ac583bc94a1$export$c8a8987d4410bf2d && (g || (g = []), $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.ref && g.push($d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.ref, null, $d5fc6ac583bc94a1$export$16fa2f45be04daa8), g.push($d5fc6ac583bc94a1$export$c8a8987d4410bf2d, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__c || b, $d5fc6ac583bc94a1$export$16fa2f45be04daa8)), null != b ? (null == m && (m = b), "function" == typeof $d5fc6ac583bc94a1$export$16fa2f45be04daa8.type && $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__k === $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.__k ? $d5fc6ac583bc94a1$export$16fa2f45be04daa8.__d = s = $d5fc6ac583bc94a1$var$x($d5fc6ac583bc94a1$export$16fa2f45be04daa8, s, n) : s = $d5fc6ac583bc94a1$var$P(n, $d5fc6ac583bc94a1$export$16fa2f45be04daa8, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.__e == s && s.parentNode != n && (s = $d5fc6ac583bc94a1$var$k($d5fc6ac583bc94a1$export$7d1e3a5e95ceca43));
    }
    for(u.__e = m, h = $d5fc6ac583bc94a1$export$47e4c5b300681277; h--;)null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = $d5fc6ac583bc94a1$var$k($d5fc6ac583bc94a1$export$a8257692ac88316c, h + 1)), $d5fc6ac583bc94a1$var$N(w[h], w[h]));
    if (g) for(h = 0; h < g.length; h++)$d5fc6ac583bc94a1$var$M(g[h], g[++h], g[++h]);
}
function $d5fc6ac583bc94a1$var$x(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) {
    for(var $d5fc6ac583bc94a1$export$a8257692ac88316c, t = n.__k, r = 0; t && r < t.length; r++)($d5fc6ac583bc94a1$export$a8257692ac88316c = t[r]) && ($d5fc6ac583bc94a1$export$a8257692ac88316c.__ = n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = "function" == typeof $d5fc6ac583bc94a1$export$a8257692ac88316c.type ? $d5fc6ac583bc94a1$var$x($d5fc6ac583bc94a1$export$a8257692ac88316c, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) : $d5fc6ac583bc94a1$var$P(u, $d5fc6ac583bc94a1$export$a8257692ac88316c, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, $d5fc6ac583bc94a1$export$a8257692ac88316c.__e, $d5fc6ac583bc94a1$export$41c562ebe57d11e2));
    return $d5fc6ac583bc94a1$export$41c562ebe57d11e2;
}
function $d5fc6ac583bc94a1$export$47e4c5b300681277(n2, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    return $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n) {
        $d5fc6ac583bc94a1$export$47e4c5b300681277(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2);
    }) : $d5fc6ac583bc94a1$export$41c562ebe57d11e2.push(n2)), $d5fc6ac583bc94a1$export$41c562ebe57d11e2;
}
function $d5fc6ac583bc94a1$var$P(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r) {
    var o, f, e;
    if (void 0 !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__d) o = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__d, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__d = void 0;
    else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;
    else {
        for(f = r, e = 0; (f = f.nextSibling) && e < $d5fc6ac583bc94a1$export$a8257692ac88316c.length; e += 2)if (f == t) break n;
        n.insertBefore(t, r), o = r;
    }
    return void 0 !== o ? o : t.nextSibling;
}
function $d5fc6ac583bc94a1$var$C(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t) {
    var r;
    for(r in u)"children" === r || "key" === r || r in $d5fc6ac583bc94a1$export$41c562ebe57d11e2 || $d5fc6ac583bc94a1$var$H(n, r, null, u[r], $d5fc6ac583bc94a1$export$a8257692ac88316c);
    for(r in $d5fc6ac583bc94a1$export$41c562ebe57d11e2)t && "function" != typeof $d5fc6ac583bc94a1$export$41c562ebe57d11e2[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[r] || $d5fc6ac583bc94a1$var$H(n, r, $d5fc6ac583bc94a1$export$41c562ebe57d11e2[r], u[r], $d5fc6ac583bc94a1$export$a8257692ac88316c);
}
function $d5fc6ac583bc94a1$var$$(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) {
    "-" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[0] ? n.setProperty($d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) : n[$d5fc6ac583bc94a1$export$41c562ebe57d11e2] = null == u ? "" : "number" != typeof u || $d5fc6ac583bc94a1$var$s.test($d5fc6ac583bc94a1$export$41c562ebe57d11e2) ? u : u + "px";
}
function $d5fc6ac583bc94a1$var$H(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t) {
    var r;
    n: if ("style" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof $d5fc6ac583bc94a1$export$a8257692ac88316c && (n.style.cssText = $d5fc6ac583bc94a1$export$a8257692ac88316c = ""), $d5fc6ac583bc94a1$export$a8257692ac88316c) for($d5fc6ac583bc94a1$export$41c562ebe57d11e2 in $d5fc6ac583bc94a1$export$a8257692ac88316c)u && $d5fc6ac583bc94a1$export$41c562ebe57d11e2 in u || $d5fc6ac583bc94a1$var$$(n.style, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, "");
            if (u) for($d5fc6ac583bc94a1$export$41c562ebe57d11e2 in u)$d5fc6ac583bc94a1$export$a8257692ac88316c && u[$d5fc6ac583bc94a1$export$41c562ebe57d11e2] === $d5fc6ac583bc94a1$export$a8257692ac88316c[$d5fc6ac583bc94a1$export$41c562ebe57d11e2] || $d5fc6ac583bc94a1$var$$(n.style, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u[$d5fc6ac583bc94a1$export$41c562ebe57d11e2]);
        }
    } else if ("o" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[0] && "n" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[1]) r = $d5fc6ac583bc94a1$export$41c562ebe57d11e2 !== ($d5fc6ac583bc94a1$export$41c562ebe57d11e2 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.replace(/Capture$/, "")), $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.toLowerCase() in n ? $d5fc6ac583bc94a1$export$41c562ebe57d11e2.toLowerCase().slice(2) : $d5fc6ac583bc94a1$export$41c562ebe57d11e2.slice(2), n.l || (n.l = {
    }), n.l[$d5fc6ac583bc94a1$export$41c562ebe57d11e2 + r] = u, u ? $d5fc6ac583bc94a1$export$a8257692ac88316c || n.addEventListener($d5fc6ac583bc94a1$export$41c562ebe57d11e2, r ? $d5fc6ac583bc94a1$var$T : $d5fc6ac583bc94a1$var$I, r) : n.removeEventListener($d5fc6ac583bc94a1$export$41c562ebe57d11e2, r ? $d5fc6ac583bc94a1$var$T : $d5fc6ac583bc94a1$var$I, r);
    else if ("dangerouslySetInnerHTML" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
        if (t) $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && "list" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && "form" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && "tabIndex" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && "download" !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && $d5fc6ac583bc94a1$export$41c562ebe57d11e2 in n) try {
            n[$d5fc6ac583bc94a1$export$41c562ebe57d11e2] = null == u ? "" : u;
            break n;
        } catch (n3) {
        }
        "function" == typeof u || (null != u && (!1 !== u || "a" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[0] && "r" === $d5fc6ac583bc94a1$export$41c562ebe57d11e2[1]) ? n.setAttribute($d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) : n.removeAttribute($d5fc6ac583bc94a1$export$41c562ebe57d11e2));
    }
}
function $d5fc6ac583bc94a1$var$I(n) {
    this.l[n.type + !1]($d5fc6ac583bc94a1$export$41c562ebe57d11e2.event ? $d5fc6ac583bc94a1$export$41c562ebe57d11e2.event(n) : n);
}
function $d5fc6ac583bc94a1$var$T(n) {
    this.l[n.type + !0]($d5fc6ac583bc94a1$export$41c562ebe57d11e2.event ? $d5fc6ac583bc94a1$export$41c562ebe57d11e2.event(n) : n);
}
function $d5fc6ac583bc94a1$var$j(n4, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o, f, e, c) {
    var s, h, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d, y, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43, k, b, m, g, x, $d5fc6ac583bc94a1$export$47e4c5b300681277, P = u.type;
    if (void 0 !== u.constructor) return null;
    null != $d5fc6ac583bc94a1$export$a8257692ac88316c.__h && (c = $d5fc6ac583bc94a1$export$a8257692ac88316c.__h, e = u.__e = $d5fc6ac583bc94a1$export$a8257692ac88316c.__e, u.__h = null, o = [
        e
    ]), (s = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__b) && s(u);
    try {
        n: if ("function" == typeof P) {
            if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, $d5fc6ac583bc94a1$export$a8257692ac88316c.__c ? b = (h = u.__c = $d5fc6ac583bc94a1$export$a8257692ac88316c.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new $d5fc6ac583bc94a1$export$16fa2f45be04daa8(m, x), h.constructor = P, h.render = $d5fc6ac583bc94a1$var$O), g && g.sub(h), h.props = m, h.state || (h.state = {
            }), h.context = x, h.__n = t, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = $d5fc6ac583bc94a1$var$a({
            }, h.__s)), $d5fc6ac583bc94a1$var$a(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = h.state, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
                if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === $d5fc6ac583bc94a1$export$a8257692ac88316c.__v) {
                    h.props = m, h.state = h.__s, u.__v !== $d5fc6ac583bc94a1$export$a8257692ac88316c.__v && (h.__d = !1), h.__v = u, u.__e = $d5fc6ac583bc94a1$export$a8257692ac88316c.__e, u.__k = $d5fc6ac583bc94a1$export$a8257692ac88316c.__k, u.__k.forEach(function(n) {
                        n && (n.__ = u);
                    }), h.__h.length && f.push(h);
                    break n;
                }
                null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function() {
                    h.componentDidUpdate(y, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43, k);
                });
            }
            h.context = x, h.props = m, h.state = h.__s, (s = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n4, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = $d5fc6ac583bc94a1$var$a($d5fc6ac583bc94a1$var$a({
            }, t), h.getChildContext())), $d5fc6ac583bc94a1$export$c8a8987d4410bf2d || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43)), $d5fc6ac583bc94a1$export$47e4c5b300681277 = null != s && s.type === $d5fc6ac583bc94a1$export$ffb0004e005737fa && null == s.key ? s.props.children : s, $d5fc6ac583bc94a1$var$w(n4, Array.isArray($d5fc6ac583bc94a1$export$47e4c5b300681277) ? $d5fc6ac583bc94a1$export$47e4c5b300681277 : [
                $d5fc6ac583bc94a1$export$47e4c5b300681277
            ], u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
        } else null == o && u.__v === $d5fc6ac583bc94a1$export$a8257692ac88316c.__v ? (u.__k = $d5fc6ac583bc94a1$export$a8257692ac88316c.__k, u.__e = $d5fc6ac583bc94a1$export$a8257692ac88316c.__e) : u.__e = $d5fc6ac583bc94a1$var$L($d5fc6ac583bc94a1$export$a8257692ac88316c.__e, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o, f, c);
        (s = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.diffed) && s(u);
    } catch (n) {
        u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(n, u, $d5fc6ac583bc94a1$export$a8257692ac88316c);
    }
}
function $d5fc6ac583bc94a1$var$z(n5, u1) {
    $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__c && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__c(u1, n5), n5.some(function(u) {
        try {
            n5 = u.__h, u.__h = [], n5.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(n, u.__v);
        }
    });
}
function $d5fc6ac583bc94a1$var$L($d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r, o, f, c) {
    var s, a, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d, y = $d5fc6ac583bc94a1$export$a8257692ac88316c.props, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 = u.props, $d5fc6ac583bc94a1$export$ffb0004e005737fa = u.type, $d5fc6ac583bc94a1$export$16fa2f45be04daa8 = 0;
    if ("svg" === $d5fc6ac583bc94a1$export$ffb0004e005737fa && (r = !0), null != o) {
        for(; $d5fc6ac583bc94a1$export$16fa2f45be04daa8 < o.length; $d5fc6ac583bc94a1$export$16fa2f45be04daa8++)if ((s = o[$d5fc6ac583bc94a1$export$16fa2f45be04daa8]) && "setAttribute" in s == !!$d5fc6ac583bc94a1$export$ffb0004e005737fa && ($d5fc6ac583bc94a1$export$ffb0004e005737fa ? s.localName === $d5fc6ac583bc94a1$export$ffb0004e005737fa : 3 === s.nodeType)) {
            $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = s, o[$d5fc6ac583bc94a1$export$16fa2f45be04daa8] = null;
            break;
        }
    }
    if (null == $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
        if (null === $d5fc6ac583bc94a1$export$ffb0004e005737fa) return document.createTextNode($d5fc6ac583bc94a1$export$7d1e3a5e95ceca43);
        $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = r ? document.createElementNS("http://www.w3.org/2000/svg", $d5fc6ac583bc94a1$export$ffb0004e005737fa) : document.createElement($d5fc6ac583bc94a1$export$ffb0004e005737fa, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.is && $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43), o = null, c = !1;
    }
    if (null === $d5fc6ac583bc94a1$export$ffb0004e005737fa) y === $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 || c && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.data === $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 || ($d5fc6ac583bc94a1$export$41c562ebe57d11e2.data = $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43);
    else {
        if (o = o && $d5fc6ac583bc94a1$var$n.call($d5fc6ac583bc94a1$export$41c562ebe57d11e2.childNodes), a = (y = $d5fc6ac583bc94a1$export$a8257692ac88316c.props || $d5fc6ac583bc94a1$var$e).dangerouslySetInnerHTML, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d = $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.dangerouslySetInnerHTML, !c) {
            if (null != o) for(y = {
            }, $d5fc6ac583bc94a1$export$16fa2f45be04daa8 = 0; $d5fc6ac583bc94a1$export$16fa2f45be04daa8 < $d5fc6ac583bc94a1$export$41c562ebe57d11e2.attributes.length; $d5fc6ac583bc94a1$export$16fa2f45be04daa8++)y[$d5fc6ac583bc94a1$export$41c562ebe57d11e2.attributes[$d5fc6ac583bc94a1$export$16fa2f45be04daa8].name] = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.attributes[$d5fc6ac583bc94a1$export$16fa2f45be04daa8].value;
            ($d5fc6ac583bc94a1$export$c8a8987d4410bf2d || a) && ($d5fc6ac583bc94a1$export$c8a8987d4410bf2d && (a && $d5fc6ac583bc94a1$export$c8a8987d4410bf2d.__html == a.__html || $d5fc6ac583bc94a1$export$c8a8987d4410bf2d.__html === $d5fc6ac583bc94a1$export$41c562ebe57d11e2.innerHTML) || ($d5fc6ac583bc94a1$export$41c562ebe57d11e2.innerHTML = $d5fc6ac583bc94a1$export$c8a8987d4410bf2d && $d5fc6ac583bc94a1$export$c8a8987d4410bf2d.__html || ""));
        }
        if ($d5fc6ac583bc94a1$var$C($d5fc6ac583bc94a1$export$41c562ebe57d11e2, $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43, y, r, c), $d5fc6ac583bc94a1$export$c8a8987d4410bf2d) u.__k = [];
        else if ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = u.props.children, $d5fc6ac583bc94a1$var$w($d5fc6ac583bc94a1$export$41c562ebe57d11e2, Array.isArray($d5fc6ac583bc94a1$export$16fa2f45be04daa8) ? $d5fc6ac583bc94a1$export$16fa2f45be04daa8 : [
            $d5fc6ac583bc94a1$export$16fa2f45be04daa8
        ], u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t, r && "foreignObject" !== $d5fc6ac583bc94a1$export$ffb0004e005737fa, o, f, o ? o[0] : $d5fc6ac583bc94a1$export$a8257692ac88316c.__k && $d5fc6ac583bc94a1$var$k($d5fc6ac583bc94a1$export$a8257692ac88316c, 0), c), null != o) for($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = o.length; $d5fc6ac583bc94a1$export$16fa2f45be04daa8--;)null != o[$d5fc6ac583bc94a1$export$16fa2f45be04daa8] && $d5fc6ac583bc94a1$var$h(o[$d5fc6ac583bc94a1$export$16fa2f45be04daa8]);
        c || ("value" in $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 && void 0 !== ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.value) && ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 !== y.value || $d5fc6ac583bc94a1$export$16fa2f45be04daa8 !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2.value || "progress" === $d5fc6ac583bc94a1$export$ffb0004e005737fa && !$d5fc6ac583bc94a1$export$16fa2f45be04daa8) && $d5fc6ac583bc94a1$var$H($d5fc6ac583bc94a1$export$41c562ebe57d11e2, "value", $d5fc6ac583bc94a1$export$16fa2f45be04daa8, y.value, !1), "checked" in $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43 && void 0 !== ($d5fc6ac583bc94a1$export$16fa2f45be04daa8 = $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43.checked) && $d5fc6ac583bc94a1$export$16fa2f45be04daa8 !== $d5fc6ac583bc94a1$export$41c562ebe57d11e2.checked && $d5fc6ac583bc94a1$var$H($d5fc6ac583bc94a1$export$41c562ebe57d11e2, "checked", $d5fc6ac583bc94a1$export$16fa2f45be04daa8, y.checked, !1));
    }
    return $d5fc6ac583bc94a1$export$41c562ebe57d11e2;
}
function $d5fc6ac583bc94a1$var$M(n, u, $d5fc6ac583bc94a1$export$a8257692ac88316c) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n6) {
        $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(n6, $d5fc6ac583bc94a1$export$a8257692ac88316c);
    }
}
function $d5fc6ac583bc94a1$var$N(n, u, $d5fc6ac583bc94a1$export$a8257692ac88316c) {
    var t, r;
    if ($d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || $d5fc6ac583bc94a1$var$M(t, null, u)), null != (t = n.__c)) {
        if (t.componentWillUnmount) try {
            t.componentWillUnmount();
        } catch (n) {
            $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(n, u);
        }
        t.base = t.__P = null;
    }
    if (t = n.__k) for(r = 0; r < t.length; r++)t[r] && $d5fc6ac583bc94a1$var$N(t[r], u, "function" != typeof n.type);
    $d5fc6ac583bc94a1$export$a8257692ac88316c || null == n.__e || $d5fc6ac583bc94a1$var$h(n.__e), n.__e = n.__d = void 0;
}
function $d5fc6ac583bc94a1$var$O(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, u) {
    return this.constructor(n, u);
}
function $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t) {
    var r, o, f;
    $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__ && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__(u, $d5fc6ac583bc94a1$export$a8257692ac88316c), o = (r = "function" == typeof t) ? null : t && t.__k || $d5fc6ac583bc94a1$export$a8257692ac88316c.__k, f = [], $d5fc6ac583bc94a1$var$j($d5fc6ac583bc94a1$export$a8257692ac88316c, u = (!r && t || $d5fc6ac583bc94a1$export$a8257692ac88316c).__k = $d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d5fc6ac583bc94a1$export$ffb0004e005737fa, null, [
        u
    ]), o || $d5fc6ac583bc94a1$var$e, $d5fc6ac583bc94a1$var$e, void 0 !== $d5fc6ac583bc94a1$export$a8257692ac88316c.ownerSVGElement, !r && t ? [
        t
    ] : o ? null : $d5fc6ac583bc94a1$export$a8257692ac88316c.firstChild ? $d5fc6ac583bc94a1$var$n.call($d5fc6ac583bc94a1$export$a8257692ac88316c.childNodes) : null, f, !r && t ? t : o ? o.__e : $d5fc6ac583bc94a1$export$a8257692ac88316c.firstChild, r), $d5fc6ac583bc94a1$var$z(f, u);
}
function $d5fc6ac583bc94a1$export$fa8d919ba61d84db(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2, $d5fc6ac583bc94a1$export$fa8d919ba61d84db);
}
function $d5fc6ac583bc94a1$export$e530037191fcd5d7($d5fc6ac583bc94a1$export$41c562ebe57d11e2, u, $d5fc6ac583bc94a1$export$a8257692ac88316c) {
    var t, r, o, f = $d5fc6ac583bc94a1$var$a({
    }, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.props);
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? $d5fc6ac583bc94a1$var$n.call(arguments, 2) : $d5fc6ac583bc94a1$export$a8257692ac88316c), $d5fc6ac583bc94a1$var$y($d5fc6ac583bc94a1$export$41c562ebe57d11e2.type, f, t || $d5fc6ac583bc94a1$export$41c562ebe57d11e2.key, r || $d5fc6ac583bc94a1$export$41c562ebe57d11e2.ref, null);
}
function $d5fc6ac583bc94a1$export$fd42f52fd3ae1109(n7, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    var u2 = {
        __c: $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = "__cC" + $d5fc6ac583bc94a1$var$f++,
        __: n7,
        Consumer: function Consumer(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
            return n.children($d5fc6ac583bc94a1$export$41c562ebe57d11e2);
        },
        Provider: function Provider(n8) {
            var u, $d5fc6ac583bc94a1$export$a8257692ac88316c;
            return this.getChildContext || (u = [], ($d5fc6ac583bc94a1$export$a8257692ac88316c = {
            })[$d5fc6ac583bc94a1$export$41c562ebe57d11e2] = this, this.getChildContext = function() {
                return $d5fc6ac583bc94a1$export$a8257692ac88316c;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && u.some($d5fc6ac583bc94a1$var$m);
            }, this.sub = function(n) {
                u.push(n);
                var $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    u.splice(u.indexOf(n), 1), $d5fc6ac583bc94a1$export$41c562ebe57d11e2 && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.call(n);
                };
            }), n8.children;
        }
    };
    return u2.Provider.__ = u2.Consumer.contextType = u2;
}
$d5fc6ac583bc94a1$var$n = $d5fc6ac583bc94a1$var$c.slice, $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = {
    __e: function __e(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
        for(var u, $d5fc6ac583bc94a1$export$a8257692ac88316c, t; $d5fc6ac583bc94a1$export$41c562ebe57d11e2 = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__;)if ((u = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__c) && !u.__) try {
            if (($d5fc6ac583bc94a1$export$a8257692ac88316c = u.constructor) && null != $d5fc6ac583bc94a1$export$a8257692ac88316c.getDerivedStateFromError && (u.setState($d5fc6ac583bc94a1$export$a8257692ac88316c.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
        } catch ($d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
            n = $d5fc6ac583bc94a1$export$41c562ebe57d11e2;
        }
        throw n;
    }
}, $d5fc6ac583bc94a1$var$u = 0, $d5fc6ac583bc94a1$export$a8257692ac88316c = function $d5fc6ac583bc94a1$export$a8257692ac88316c(n) {
    return null != n && void 0 === n.constructor;
}, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.prototype.setState = function(n, $d5fc6ac583bc94a1$export$41c562ebe57d11e2) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = $d5fc6ac583bc94a1$var$a({
    }, this.state), "function" == typeof n && (n = n($d5fc6ac583bc94a1$var$a({
    }, u), this.props)), n && $d5fc6ac583bc94a1$var$a(u, n), null != n && this.__v && ($d5fc6ac583bc94a1$export$41c562ebe57d11e2 && this.__h.push($d5fc6ac583bc94a1$export$41c562ebe57d11e2), $d5fc6ac583bc94a1$var$m(this));
}, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), $d5fc6ac583bc94a1$var$m(this));
}, $d5fc6ac583bc94a1$export$16fa2f45be04daa8.prototype.render = $d5fc6ac583bc94a1$export$ffb0004e005737fa, $d5fc6ac583bc94a1$var$t = [], $d5fc6ac583bc94a1$var$r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $d5fc6ac583bc94a1$var$g.__r = 0, $d5fc6ac583bc94a1$var$f = 0;



var $55ec52987511209e$var$o = 0;
function $55ec52987511209e$export$34b9dba7ce09269b(_, $55ec52987511209e$export$34b9dba7ce09269b, n, t, f) {
    var l, s, u = {
    };
    for(s in $55ec52987511209e$export$34b9dba7ce09269b)"ref" == s ? l = $55ec52987511209e$export$34b9dba7ce09269b[s] : u[s] = $55ec52987511209e$export$34b9dba7ce09269b[s];
    var a = {
        type: _,
        props: u,
        key: n,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --$55ec52987511209e$var$o,
        __source: t,
        __self: f
    };
    if ("function" == typeof _ && (l = _.defaultProps)) for(s in l)void 0 === u[s] && (u[s] = l[s]);
    return $d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode(a), a;
}





function $642db0546df88ad7$var$set(key, value) {
    try {
        window.localStorage["emoji-mart.".concat(key)] = JSON.stringify(value);
    } catch (error) {
    }
}
function $642db0546df88ad7$var$get(key) {
    try {
        var value = window.localStorage["emoji-mart.".concat(key)];
        if (value) return JSON.parse(value);
    } catch (error) {
    }
}
var $642db0546df88ad7$export$2e2bcd8739ae039 = {
    set: $642db0546df88ad7$var$set,
    get: $642db0546df88ad7$var$get
};


var $d76d73d8437b44c4$var$CACHE = new Map();
var $d76d73d8437b44c4$var$VERSIONS = [
    {
        v: 14,
        emoji: '🫠'
    },
    {
        v: 13.1,
        emoji: '😶‍🌫️'
    },
    {
        v: 13,
        emoji: '🥸'
    },
    {
        v: 12.1,
        emoji: '🧑‍🦰'
    },
    {
        v: 12,
        emoji: '🥱'
    },
    {
        v: 11,
        emoji: '🥰'
    },
    {
        v: 5,
        emoji: '🤩'
    },
    {
        v: 4,
        emoji: '👱‍♀️'
    },
    {
        v: 3,
        emoji: '🤣'
    },
    {
        v: 2,
        emoji: '👋🏻'
    },
    {
        v: 1,
        emoji: '🙃'
    }, 
];
function $d76d73d8437b44c4$var$latestVersion() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = $d76d73d8437b44c4$var$VERSIONS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _value = _step.value, v = _value.v, emoji = _value.emoji;
            if ($d76d73d8437b44c4$var$isSupported(emoji)) return v;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function $d76d73d8437b44c4$var$noCountryFlags() {
    if ($d76d73d8437b44c4$var$isSupported('🇨🇦')) return false;
    return true;
}
function $d76d73d8437b44c4$var$isSupported(emoji) {
    if ($d76d73d8437b44c4$var$CACHE.has(emoji)) return $d76d73d8437b44c4$var$CACHE.get(emoji);
    var supported = $d76d73d8437b44c4$var$isEmojiSupported(emoji);
    $d76d73d8437b44c4$var$CACHE.set(emoji, supported);
    return supported;
}
// https://github.com/koala-interactive/is-emoji-supported
var $d76d73d8437b44c4$var$isEmojiSupported = function() {
    var ctx = null;
    try {
        if (!navigator.userAgent.includes('jsdom')) ctx = document.createElement('canvas').getContext('2d');
    } catch (e) {
    }
    // Not in browser env
    if (!ctx) return function() {
        return false;
    };
    var CANVAS_HEIGHT = 25;
    var CANVAS_WIDTH = 20;
    var textSize = Math.floor(CANVAS_HEIGHT / 2);
    // Initialize convas context
    ctx.font = textSize + 'px Arial, Sans-Serif';
    ctx.textBaseline = 'top';
    ctx.canvas.width = CANVAS_WIDTH * 2;
    ctx.canvas.height = CANVAS_HEIGHT;
    return function(unicode) {
        ctx.clearRect(0, 0, CANVAS_WIDTH * 2, CANVAS_HEIGHT);
        // Draw in red on the left
        ctx.fillStyle = '#FF0000';
        ctx.fillText(unicode, 0, 22);
        // Draw in blue on right
        ctx.fillStyle = '#0000FF';
        ctx.fillText(unicode, CANVAS_WIDTH, 22);
        var a = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT).data;
        var count = a.length;
        var i = 0;
        // Search the first visible pixel
        for(; i < count && !a[i + 3]; i += 4);
        // No visible pixel
        if (i >= count) return false;
        // Emoji has immutable color, so we check the color of the emoji in two different colors
        // the result show be the same.
        var x = CANVAS_WIDTH + i / 4 % CANVAS_WIDTH;
        var y = Math.floor(i / 4 / CANVAS_WIDTH);
        var b = ctx.getImageData(x, y, 1, 1).data;
        if (a[i] !== b[0] || a[i + 2] !== b[2]) return false;
        // Some emojis are a contraction of different ones, so if it's not
        // supported, it will show multiple characters
        if (ctx.measureText(unicode).width >= CANVAS_WIDTH) return false;
        // Supported
        return true;
    };
}();
var $d76d73d8437b44c4$export$2e2bcd8739ae039 = {
    latestVersion: $d76d73d8437b44c4$var$latestVersion,
    noCountryFlags: $d76d73d8437b44c4$var$noCountryFlags
};



var $26c4208b83093c27$var$DEFAULTS = [
    '+1',
    'grinning',
    'kissing_heart',
    'heart_eyes',
    'laughing',
    'stuck_out_tongue_winking_eye',
    'sweat_smile',
    'joy',
    'scream',
    'disappointed',
    'unamused',
    'weary',
    'sob',
    'sunglasses',
    'heart', 
];
var $26c4208b83093c27$var$Index = null;
function $26c4208b83093c27$var$add(emoji) {
    $26c4208b83093c27$var$Index || ($26c4208b83093c27$var$Index = $642db0546df88ad7$export$2e2bcd8739ae039.get('frequently') || {
    });
    var emojiId = emoji.id || emoji;
    if (!emojiId) return;
    $26c4208b83093c27$var$Index[emojiId] || ($26c4208b83093c27$var$Index[emojiId] = 0);
    $26c4208b83093c27$var$Index[emojiId] += 1;
    $642db0546df88ad7$export$2e2bcd8739ae039.set('last', emojiId);
    $642db0546df88ad7$export$2e2bcd8739ae039.set('frequently', $26c4208b83093c27$var$Index);
}
function $26c4208b83093c27$var$get(param) {
    var maxFrequentRows = param.maxFrequentRows, perLine = param.perLine;
    if (!maxFrequentRows) return [];
    $26c4208b83093c27$var$Index || ($26c4208b83093c27$var$Index = $642db0546df88ad7$export$2e2bcd8739ae039.get('frequently'));
    var emojiIds = [];
    if (!$26c4208b83093c27$var$Index) {
        $26c4208b83093c27$var$Index = {
        };
        for(var i in $26c4208b83093c27$var$DEFAULTS.slice(0, perLine)){
            var emojiId = $26c4208b83093c27$var$DEFAULTS[i];
            $26c4208b83093c27$var$Index[emojiId] = perLine - i;
            emojiIds.push(emojiId);
        }
        return emojiIds;
    }
    var max = maxFrequentRows * perLine;
    var last = $642db0546df88ad7$export$2e2bcd8739ae039.get('last');
    for(var emojiId1 in $26c4208b83093c27$var$Index)emojiIds.push(emojiId1);
    emojiIds.sort(function(a, b) {
        var aScore = $26c4208b83093c27$var$Index[b];
        var bScore = $26c4208b83093c27$var$Index[a];
        if (aScore == bScore) return a.localeCompare(b);
        return aScore - bScore;
    });
    if (emojiIds.length > max) {
        var removedIds = emojiIds.slice(max);
        emojiIds = emojiIds.slice(0, max);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = removedIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var removedId = _step.value;
                if (removedId == last) continue;
                delete $26c4208b83093c27$var$Index[removedId];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        if (last && emojiIds.indexOf(last) == -1) {
            delete $26c4208b83093c27$var$Index[emojiIds[emojiIds.length - 1]];
            emojiIds.splice(-1, 1, last);
        }
        $642db0546df88ad7$export$2e2bcd8739ae039.set('frequently', $26c4208b83093c27$var$Index);
    }
    return emojiIds;
}
var $26c4208b83093c27$export$2e2bcd8739ae039 = {
    add: $26c4208b83093c27$var$add,
    get: $26c4208b83093c27$var$get
};






var $128a97276525cf7f$exports = {};
$128a97276525cf7f$exports = JSON.parse("{\"search\":\"Search\",\"search_no_results_1\":\"Oh no!\",\"search_no_results_2\":\"That emoji couldn’t be found\",\"pick\":\"Pick an emoji…\",\"add_custom\":\"Add custom emoji\",\"categories\":{\"activity\":\"Activity\",\"custom\":\"Custom\",\"flags\":\"Flags\",\"foods\":\"Food & Drink\",\"frequent\":\"Frequently used\",\"nature\":\"Animals & Nature\",\"objects\":\"Objects\",\"people\":\"Smileys & People\",\"places\":\"Travel & Places\",\"search\":\"Search Results\",\"symbols\":\"Symbols\"},\"skins\":{\"1\":\"Default\",\"2\":\"Light\",\"3\":\"Medium-Light\",\"4\":\"Medium\",\"5\":\"Medium-Dark\",\"6\":\"Dark\",\"choose\":\"Choose default skin tone\"}}");


var $6191713a0c89d01b$export$2e2bcd8739ae039 = {
    autoFocus: {
        value: false
    },
    emojiButtonColors: {
        value: null
    },
    emojiButtonRadius: {
        value: '100%'
    },
    emojiButtonSize: {
        value: 36
    },
    emojiSize: {
        value: 24
    },
    emojiVersion: {
        value: 14,
        choices: [
            1,
            2,
            3,
            4,
            5,
            11,
            12,
            12.1,
            13,
            13.1,
            14
        ]
    },
    icons: {
        value: 'auto',
        choices: [
            'auto',
            'outline',
            'solid'
        ]
    },
    locale: {
        value: 'en',
        choices: [
            'en',
            'ar',
            'cs',
            'de',
            'es',
            'fa',
            'fi',
            'fr',
            'it',
            'ja',
            'nl',
            'pl',
            'pt',
            'ru',
            'uk',
            'zh', 
        ]
    },
    maxFrequentRows: {
        value: 4
    },
    navPosition: {
        value: 'top',
        choices: [
            'top',
            'bottom',
            'none'
        ]
    },
    noCountryFlags: {
        value: false
    },
    noResultsEmoji: {
        value: null
    },
    perLine: {
        value: 9
    },
    previewEmoji: {
        value: null
    },
    previewPosition: {
        value: 'bottom',
        choices: [
            'top',
            'bottom',
            'none'
        ]
    },
    searchPosition: {
        value: 'sticky',
        choices: [
            'sticky',
            'static',
            'none'
        ]
    },
    set: {
        value: 'native',
        choices: [
            'native',
            'apple',
            'facebook',
            'google',
            'twitter'
        ]
    },
    skin: {
        value: 1,
        choices: [
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    skinTonePosition: {
        value: 'preview',
        choices: [
            'preview',
            'search',
            'none'
        ]
    },
    theme: {
        value: 'auto',
        choices: [
            'auto',
            'light',
            'dark'
        ]
    },
    // Data
    categories: null,
    categoryIcons: null,
    custom: null,
    data: null,
    i18n: null,
    skinToneEmoji: null,
    skinToneLabel: null,
    // Callbacks
    getImageURL: null,
    getSpritesheetURL: null,
    onAddCustomEmoji: null,
    onClickOutside: null,
    onEmojiSelect: null,
    // Deprecated
    stickySearch: {
        deprecated: true,
        value: true
    }
};



var $b79b4feb8fc394aa$export$dbe3113d60765c1a = null;
var $b79b4feb8fc394aa$export$2d0294657ab35f1b = null;
var $b79b4feb8fc394aa$var$fetchCache = {
};
function $b79b4feb8fc394aa$var$fetchJSON(src) {
    return _fetchJSON.apply(this, arguments);
}
function _fetchJSON() {
    _fetchJSON = $22bbea2e4f5d5dfd$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).mark(function _callee(src) {
        var response, json;
        return (/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    if (!$b79b4feb8fc394aa$var$fetchCache[src]) {
                        _ctx.next = 2;
                        break;
                    }
                    return _ctx.abrupt("return", $b79b4feb8fc394aa$var$fetchCache[src]);
                case 2:
                    _ctx.next = 4;
                    return fetch(src);
                case 4:
                    response = _ctx.sent;
                    _ctx.next = 7;
                    return response.json();
                case 7:
                    json = _ctx.sent;
                    $b79b4feb8fc394aa$var$fetchCache[src] = json;
                    return _ctx.abrupt("return", json);
                case 10:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _fetchJSON.apply(this, arguments);
}
var $b79b4feb8fc394aa$var$promise = null;
var $b79b4feb8fc394aa$var$initCallback = null;
var $b79b4feb8fc394aa$var$initialized = false;
function $b79b4feb8fc394aa$export$2cd8252107eb640b(options) {
    var caller = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    }).caller;
    $b79b4feb8fc394aa$var$promise || ($b79b4feb8fc394aa$var$promise = new Promise(function(resolve) {
        $b79b4feb8fc394aa$var$initCallback = resolve;
    }));
    if (options) $b79b4feb8fc394aa$var$_init(options);
    else if (caller && !$b79b4feb8fc394aa$var$initialized) console.warn("`".concat(caller, "` requires data to be initialized first. Promise will be pending until `init` is called."));
    return $b79b4feb8fc394aa$var$promise;
}
function $b79b4feb8fc394aa$var$_init(props) {
    return __init.apply(this, arguments);
}
function __init() {
    __init = $22bbea2e4f5d5dfd$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).mark(function _callee(props) {
        var emojiVersion, set, locale, alias, emojiId, emoji, i, category, prevCategory, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, emoji1, latestVersionSupport, noCountryFlags, categoryIndex, resetSearchIndex, category1, maxFrequentRows, perLine, categoryIcons, icon, emojiIndex, emojiId1, emoji2, ignore, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, emoticon, skinIndex, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, skin, native, skinShortcodes;
        return (/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    $b79b4feb8fc394aa$var$initialized = true;
                    emojiVersion = props.emojiVersion, set = props.set, locale = props.locale;
                    emojiVersion || (emojiVersion = $6191713a0c89d01b$export$2e2bcd8739ae039.emojiVersion.value);
                    set || (set = $6191713a0c89d01b$export$2e2bcd8739ae039.set.value);
                    locale || (locale = $6191713a0c89d01b$export$2e2bcd8739ae039.locale.value);
                    if ($b79b4feb8fc394aa$export$2d0294657ab35f1b) {
                        _ctx.next = 35;
                        break;
                    }
                    if (!(typeof props.data === 'function')) {
                        _ctx.next = 12;
                        break;
                    }
                    _ctx.next = 9;
                    return props.data();
                case 9:
                    _ctx.t1 = _ctx.sent;
                    _ctx.next = 13;
                    break;
                case 12:
                    _ctx.t1 = props.data;
                case 13:
                    _ctx.t0 = _ctx.t1;
                    if (_ctx.t0) {
                        _ctx.next = 18;
                        break;
                    }
                    _ctx.next = 17;
                    return $b79b4feb8fc394aa$var$fetchJSON("https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/".concat(emojiVersion, "/").concat(set, ".json"));
                case 17:
                    _ctx.t0 = _ctx.sent;
                case 18:
                    $b79b4feb8fc394aa$export$2d0294657ab35f1b = _ctx.t0;
                    $b79b4feb8fc394aa$export$2d0294657ab35f1b.emoticons = {
                    };
                    $b79b4feb8fc394aa$export$2d0294657ab35f1b.natives = {
                    };
                    $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.unshift({
                        id: 'frequent',
                        emojis: []
                    });
                    _ctx.t2 = regeneratorRuntime.keys($b79b4feb8fc394aa$export$2d0294657ab35f1b.aliases);
                case 23:
                    if ((_ctx.t3 = _ctx.t2()).done) {
                        _ctx.next = 33;
                        break;
                    }
                    alias = _ctx.t3.value;
                    emojiId = $b79b4feb8fc394aa$export$2d0294657ab35f1b.aliases[alias];
                    emoji = $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[emojiId];
                    if (emoji) {
                        _ctx.next = 29;
                        break;
                    }
                    return _ctx.abrupt("continue", 23);
                case 29:
                    emoji.aliases || (emoji.aliases = []);
                    emoji.aliases.push(alias);
                    _ctx.next = 23;
                    break;
                case 33:
                    _ctx.next = 36;
                    break;
                case 35:
                    $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.filter(function(c) {
                        var isCustom = !!c.name;
                        if (!isCustom) return true;
                        return false;
                    });
                case 36:
                    if (!(typeof props.i18n === 'function')) {
                        _ctx.next = 42;
                        break;
                    }
                    _ctx.next = 39;
                    return props.i18n();
                case 39:
                    _ctx.t5 = _ctx.sent;
                    _ctx.next = 43;
                    break;
                case 42:
                    _ctx.t5 = props.i18n;
                case 43:
                    _ctx.t4 = _ctx.t5;
                    if (_ctx.t4) {
                        _ctx.next = 53;
                        break;
                    }
                    if (!(locale == 'en')) {
                        _ctx.next = 49;
                        break;
                    }
                    _ctx.t6 = (/*@__PURE__*/$parcel$interopDefault($128a97276525cf7f$exports));
                    _ctx.next = 52;
                    break;
                case 49:
                    _ctx.next = 51;
                    return $b79b4feb8fc394aa$var$fetchJSON("https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/".concat(locale, ".json"));
                case 51:
                    _ctx.t6 = _ctx.sent;
                case 52:
                    _ctx.t4 = _ctx.t6;
                case 53:
                    $b79b4feb8fc394aa$export$dbe3113d60765c1a = _ctx.t4;
                    if (!props.custom) {
                        _ctx.next = 86;
                        break;
                    }
                    _ctx.t7 = regeneratorRuntime.keys(props.custom);
                case 56:
                    if ((_ctx.t8 = _ctx.t7()).done) {
                        _ctx.next = 86;
                        break;
                    }
                    i = _ctx.t8.value;
                    i = parseInt(i);
                    category = props.custom[i];
                    prevCategory = props.custom[i - 1];
                    if (!(!category.emojis || !category.emojis.length)) {
                        _ctx.next = 63;
                        break;
                    }
                    return _ctx.abrupt("continue", 56);
                case 63:
                    category.id || (category.id = "custom_".concat(i + 1));
                    category.name || (category.name = $b79b4feb8fc394aa$export$dbe3113d60765c1a.categories.custom);
                    if (prevCategory && !category.icon) category.target = prevCategory.target || prevCategory;
                    $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.push(category);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _ctx.prev = 68;
                    for(_iterator = category.emojis[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        emoji1 = _step.value;
                        $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[emoji1.id] = emoji1;
                    }
                    _ctx.next = 76;
                    break;
                case 72:
                    _ctx.prev = 72;
                    _ctx.t9 = _ctx["catch"](68);
                    _didIteratorError = true;
                    _iteratorError = _ctx.t9;
                case 76:
                    _ctx.prev = 76;
                    _ctx.prev = 77;
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                case 79:
                    _ctx.prev = 79;
                    if (!_didIteratorError) {
                        _ctx.next = 82;
                        break;
                    }
                    throw _iteratorError;
                case 82:
                    return _ctx.finish(79);
                case 83:
                    return _ctx.finish(76);
                case 84:
                    _ctx.next = 56;
                    break;
                case 86:
                    if (props.categories) $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.filter(function(c) {
                        return props.categories.indexOf(c.id) != -1;
                    }).sort(function(c1, c2) {
                        var i1 = props.categories.indexOf(c1.id);
                        var i2 = props.categories.indexOf(c2.id);
                        return i1 - i2;
                    });
                    latestVersionSupport = null;
                    noCountryFlags = null;
                    if (set == 'native') {
                        latestVersionSupport = $d76d73d8437b44c4$export$2e2bcd8739ae039.latestVersion();
                        noCountryFlags = props.noCountryFlags || $d76d73d8437b44c4$export$2e2bcd8739ae039.noCountryFlags();
                    }
                    categoryIndex = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.length;
                    resetSearchIndex = false;
                case 92:
                    if (!categoryIndex--) {
                        _ctx.next = 178;
                        break;
                    }
                    category1 = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories[categoryIndex];
                    if (category1.id == 'frequent') {
                        maxFrequentRows = props.maxFrequentRows, perLine = props.perLine;
                        maxFrequentRows || (maxFrequentRows = $6191713a0c89d01b$export$2e2bcd8739ae039.maxFrequentRows.value);
                        perLine || (perLine = $6191713a0c89d01b$export$2e2bcd8739ae039.perLine.value);
                        category1.emojis = $26c4208b83093c27$export$2e2bcd8739ae039.get({
                            maxFrequentRows: maxFrequentRows,
                            perLine: perLine
                        });
                    }
                    if (!(!category1.emojis || !category1.emojis.length)) {
                        _ctx.next = 98;
                        break;
                    }
                    $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.splice(categoryIndex, 1);
                    return _ctx.abrupt("continue", 92);
                case 98:
                    categoryIcons = props.categoryIcons;
                    if (categoryIcons) {
                        icon = categoryIcons[category1.id];
                        if (icon && !category1.icon) category1.icon = icon;
                    }
                    emojiIndex = category1.emojis.length;
                case 101:
                    if (!emojiIndex--) {
                        _ctx.next = 176;
                        break;
                    }
                    emojiId1 = category1.emojis[emojiIndex];
                    emoji2 = emojiId1.id ? emojiId1 : $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[emojiId1];
                    ignore = function() {
                        category1.emojis.splice(emojiIndex, 1);
                    };
                    if (emoji2) {
                        _ctx.next = 108;
                        break;
                    }
                    ignore();
                    return _ctx.abrupt("continue", 101);
                case 108:
                    if (!(latestVersionSupport && emoji2.version > latestVersionSupport)) {
                        _ctx.next = 111;
                        break;
                    }
                    ignore();
                    return _ctx.abrupt("continue", 101);
                case 111:
                    if (!(noCountryFlags && category1.id == 'flags')) {
                        _ctx.next = 115;
                        break;
                    }
                    if ($66f5f6dfb6c0e3cd$export$bcb25aa587e9cb13.includes(emoji2.id)) {
                        _ctx.next = 115;
                        break;
                    }
                    ignore();
                    return _ctx.abrupt("continue", 101);
                case 115:
                    if (emoji2.search) {
                        _ctx.next = 174;
                        break;
                    }
                    resetSearchIndex = true;
                    emoji2.search = ',' + [
                        [
                            emoji2.id,
                            false
                        ],
                        [
                            emoji2.name,
                            true
                        ],
                        [
                            emoji2.keywords,
                            false
                        ],
                        [
                            emoji2.emoticons,
                            false
                        ], 
                    ].map(function(param) {
                        var _param = $d6ed1bc06105b202$export$2e2bcd8739ae039(param, 2), strings = _param[0], split = _param[1];
                        if (!strings) return;
                        return (Array.isArray(strings) ? strings : [
                            strings
                        ]).map(function(string) {
                            return (split ? string.split(/[-|_|\s]+/) : [
                                string
                            ]).map(function(s) {
                                return s.toLowerCase();
                            });
                        }).flat();
                    }).flat().filter(function(a) {
                        return a && a.trim();
                    }).join(',');
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    if (!emoji2.emoticons) {
                        _ctx.next = 144;
                        break;
                    }
                    _ctx.prev = 120;
                    _iterator1 = emoji2.emoticons[Symbol.iterator]();
                case 122:
                    if (_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done) {
                        _ctx.next = 130;
                        break;
                    }
                    emoticon = _step1.value;
                    if (!$b79b4feb8fc394aa$export$2d0294657ab35f1b.emoticons[emoticon]) {
                        _ctx.next = 126;
                        break;
                    }
                    return _ctx.abrupt("continue", 127);
                case 126:
                    $b79b4feb8fc394aa$export$2d0294657ab35f1b.emoticons[emoticon] = emoji2.id;
                case 127:
                    _iteratorNormalCompletion1 = true;
                    _ctx.next = 122;
                    break;
                case 130:
                    _ctx.next = 136;
                    break;
                case 132:
                    _ctx.prev = 132;
                    _ctx.t10 = _ctx["catch"](120);
                    _didIteratorError1 = true;
                    _iteratorError1 = _ctx.t10;
                case 136:
                    _ctx.prev = 136;
                    _ctx.prev = 137;
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                case 139:
                    _ctx.prev = 139;
                    if (!_didIteratorError1) {
                        _ctx.next = 142;
                        break;
                    }
                    throw _iteratorError1;
                case 142:
                    return _ctx.finish(139);
                case 143:
                    return _ctx.finish(136);
                case 144:
                    skinIndex = 0;
                    _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    _ctx.prev = 146;
                    _iterator2 = emoji2.skins[Symbol.iterator]();
                case 148:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        _ctx.next = 160;
                        break;
                    }
                    skin = _step2.value;
                    if (skin) {
                        _ctx.next = 152;
                        break;
                    }
                    return _ctx.abrupt("continue", 157);
                case 152:
                    skinIndex++;
                    native = skin.native;
                    if (native) {
                        $b79b4feb8fc394aa$export$2d0294657ab35f1b.natives[native] = emoji2.id;
                        emoji2.search += ",".concat(native);
                    }
                    skinShortcodes = skinIndex == 1 ? '' : ":skin-tone-".concat(skinIndex, ":");
                    skin.shortcodes = ":".concat(emoji2.id, ":").concat(skinShortcodes);
                case 157:
                    _iteratorNormalCompletion2 = true;
                    _ctx.next = 148;
                    break;
                case 160:
                    _ctx.next = 166;
                    break;
                case 162:
                    _ctx.prev = 162;
                    _ctx.t11 = _ctx["catch"](146);
                    _didIteratorError2 = true;
                    _iteratorError2 = _ctx.t11;
                case 166:
                    _ctx.prev = 166;
                    _ctx.prev = 167;
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                case 169:
                    _ctx.prev = 169;
                    if (!_didIteratorError2) {
                        _ctx.next = 172;
                        break;
                    }
                    throw _iteratorError2;
                case 172:
                    return _ctx.finish(169);
                case 173:
                    return _ctx.finish(166);
                case 174:
                    _ctx.next = 101;
                    break;
                case 176:
                    _ctx.next = 92;
                    break;
                case 178:
                    if (resetSearchIndex) $8f9034744078e207$export$2e2bcd8739ae039.reset();
                    $b79b4feb8fc394aa$var$initCallback();
                case 180:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                68,
                72,
                76,
                84
            ],
            [
                77,
                ,
                79,
                83
            ],
            [
                120,
                132,
                136,
                144
            ],
            [
                137,
                ,
                139,
                143
            ],
            [
                146,
                162,
                166,
                174
            ],
            [
                167,
                ,
                169,
                173
            ]
        ]);
    }));
    return __init.apply(this, arguments);
}
function $b79b4feb8fc394aa$export$75fe5f91d452f94b(props, defaultProps, element) {
    props || (props = {
    });
    var _props = {
    };
    for(var k in defaultProps)_props[k] = $b79b4feb8fc394aa$export$88c9ddb45cea7241(k, props, defaultProps, element);
    return _props;
}
function $b79b4feb8fc394aa$export$88c9ddb45cea7241(propName, props, defaultProps, element) {
    var defaults = defaultProps[propName];
    var value = element && element.getAttribute(propName) || (props[propName] != null && props[propName] != undefined ? props[propName] : null);
    if (!defaults) return value;
    if (value != null && defaults.value && $78738e43ceaeaba0$export$2e2bcd8739ae039(defaults.value) != (typeof value === "undefined" ? "undefined" : $78738e43ceaeaba0$export$2e2bcd8739ae039(value))) {
        if (typeof defaults.value == 'boolean') value = value == 'false' ? false : true;
        else value = defaults.value.constructor(value);
    }
    if (defaults.transform && value) value = defaults.transform(value);
    if (value == null || defaults.choices && defaults.choices.indexOf(value) == -1) value = defaults.value;
    return value;
}


var $8f9034744078e207$var$SHORTCODES_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
var $8f9034744078e207$var$Pool = null;
function $8f9034744078e207$var$get(emojiId) {
    if (emojiId.id) return emojiId;
    return $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[emojiId] || $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[$b79b4feb8fc394aa$export$2d0294657ab35f1b.aliases[emojiId]] || $b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis[$b79b4feb8fc394aa$export$2d0294657ab35f1b.natives[emojiId]];
}
function $8f9034744078e207$var$reset() {
    $8f9034744078e207$var$Pool = null;
}
function $8f9034744078e207$var$search(value) {
    return _search.apply(this, arguments);
}
function _search() {
    _search = $22bbea2e4f5d5dfd$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).mark(function _callee(value) {
        var ref, maxResults, caller, values, pool, results, scores, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value1, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, emoji, score, _args = arguments;
        return (/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    ref = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {
                    }, maxResults = ref.maxResults, caller = ref.caller;
                    if (!(!value || !value.trim().length)) {
                        _ctx.next = 3;
                        break;
                    }
                    return _ctx.abrupt("return", null);
                case 3:
                    maxResults || (maxResults = 90);
                    _ctx.next = 6;
                    return $b79b4feb8fc394aa$export$2cd8252107eb640b(null, {
                        caller: caller || 'SearchIndex.search'
                    });
                case 6:
                    values = value.toLowerCase().replace(/(\w)-/, '$1 ').split(/[\s|,]+/).filter(function(word, i, words) {
                        return word.trim() && words.indexOf(word) == i;
                    });
                    if (values.length) {
                        _ctx.next = 9;
                        break;
                    }
                    return _ctx.abrupt("return");
                case 9:
                    pool = $8f9034744078e207$var$Pool || ($8f9034744078e207$var$Pool = Object.values($b79b4feb8fc394aa$export$2d0294657ab35f1b.emojis));
                    ;
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _ctx.prev = 12;
                    _iterator = values[Symbol.iterator]();
                case 14:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _ctx.next = 54;
                        break;
                    }
                    value1 = _step.value;
                    if (pool.length) {
                        _ctx.next = 18;
                        break;
                    }
                    return _ctx.abrupt("break", 54);
                case 18:
                    results = [];
                    scores = {
                    };
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    _ctx.prev = 21;
                    _iterator1 = pool[Symbol.iterator]();
                case 23:
                    if (_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done) {
                        _ctx.next = 36;
                        break;
                    }
                    emoji = _step1.value;
                    if (emoji.search) {
                        _ctx.next = 27;
                        break;
                    }
                    return _ctx.abrupt("continue", 33);
                case 27:
                    score = emoji.search.indexOf(",".concat(value1));
                    if (!(score == -1)) {
                        _ctx.next = 30;
                        break;
                    }
                    return _ctx.abrupt("continue", 33);
                case 30:
                    results.push(emoji);
                    scores[emoji.id] || (scores[emoji.id] = 0);
                    scores[emoji.id] += emoji.id == value1 ? 0 : score + 1;
                case 33:
                    _iteratorNormalCompletion1 = true;
                    _ctx.next = 23;
                    break;
                case 36:
                    _ctx.next = 42;
                    break;
                case 38:
                    _ctx.prev = 38;
                    _ctx.t0 = _ctx["catch"](21);
                    _didIteratorError1 = true;
                    _iteratorError1 = _ctx.t0;
                case 42:
                    _ctx.prev = 42;
                    _ctx.prev = 43;
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                case 45:
                    _ctx.prev = 45;
                    if (!_didIteratorError1) {
                        _ctx.next = 48;
                        break;
                    }
                    throw _iteratorError1;
                case 48:
                    return _ctx.finish(45);
                case 49:
                    return _ctx.finish(42);
                case 50:
                    pool = results;
                case 51:
                    _iteratorNormalCompletion = true;
                    _ctx.next = 14;
                    break;
                case 54:
                    _ctx.next = 60;
                    break;
                case 56:
                    _ctx.prev = 56;
                    _ctx.t1 = _ctx["catch"](12);
                    _didIteratorError = true;
                    _iteratorError = _ctx.t1;
                case 60:
                    _ctx.prev = 60;
                    _ctx.prev = 61;
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                case 63:
                    _ctx.prev = 63;
                    if (!_didIteratorError) {
                        _ctx.next = 66;
                        break;
                    }
                    throw _iteratorError;
                case 66:
                    return _ctx.finish(63);
                case 67:
                    return _ctx.finish(60);
                case 68:
                    if (!(results.length < 2)) {
                        _ctx.next = 70;
                        break;
                    }
                    return _ctx.abrupt("return", results);
                case 70:
                    results.sort(function(a, b) {
                        var aScore = scores[a.id];
                        var bScore = scores[b.id];
                        if (aScore == bScore) return a.id.localeCompare(b.id);
                        return aScore - bScore;
                    });
                    if (results.length > maxResults) results = results.slice(0, maxResults);
                    return _ctx.abrupt("return", results);
                case 73:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                12,
                56,
                60,
                68
            ],
            [
                21,
                38,
                42,
                50
            ],
            [
                43,
                ,
                45,
                49
            ],
            [
                61,
                ,
                63,
                67
            ]
        ]);
    }));
    return _search.apply(this, arguments);
}
var $8f9034744078e207$export$2e2bcd8739ae039 = {
    search: $8f9034744078e207$var$search,
    get: $8f9034744078e207$var$get,
    reset: $8f9034744078e207$var$reset,
    SHORTCODES_REGEX: $8f9034744078e207$var$SHORTCODES_REGEX
};


var $66f5f6dfb6c0e3cd$export$bcb25aa587e9cb13 = [
    'checkered_flag',
    'crossed_flags',
    'pirate_flag',
    'rainbow-flag',
    'transgender_flag',
    'triangular_flag_on_post',
    'waving_black_flag',
    'waving_white_flag', 
];


function $98790827c4982bdf$export$9cb4719e2e525b7a(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every(function(val, index) {
        return val == b[index];
    });
}
function $98790827c4982bdf$export$e772c8ff12451969() {
    return _sleep.apply(this, arguments);
}
function _sleep() {
    _sleep = $22bbea2e4f5d5dfd$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).mark(function _callee() {
        var frames, _, _args = arguments;
        return (/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    frames = _args.length > 0 && _args[0] !== void 0 ? _args[0] : 1;
                    _ctx.t0 = regeneratorRuntime.keys($ca7087421909e81d$export$2e2bcd8739ae039(Array(frames).keys()));
                case 2:
                    if ((_ctx.t1 = _ctx.t0()).done) {
                        _ctx.next = 8;
                        break;
                    }
                    _ = _ctx.t1.value;
                    _ctx.next = 6;
                    return new Promise(requestAnimationFrame);
                case 6:
                    _ctx.next = 2;
                    break;
                case 8:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _sleep.apply(this, arguments);
}
function $98790827c4982bdf$export$d10ac59fbe52a745(emoji) {
    var skinIndex = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    }).skinIndex;
    var skin = emoji.skins[skinIndex] || function() {
        skinIndex = 0;
        return emoji.skins[skinIndex];
    }();
    var emojiData = {
        id: emoji.id,
        name: emoji.name,
        native: skin.native,
        unified: skin.unified,
        keywords: emoji.keywords,
        shortcodes: skin.shortcodes || emoji.shortcodes
    };
    if (emoji.skins.length > 1) emojiData.skin = skinIndex + 1;
    if (skin.src) emojiData.src = skin.src;
    if (emoji.aliases && emoji.aliases.length) emojiData.aliases = emoji.aliases;
    if (emoji.emoticons && emoji.emoticons.length) emojiData.emoticons = emoji.emoticons;
    return emojiData;
}
function $98790827c4982bdf$export$5ef5574deca44bc0(nativeString) {
    return _getEmojiDataFromNative.apply(this, arguments);
}
function _getEmojiDataFromNative() {
    _getEmojiDataFromNative = $22bbea2e4f5d5dfd$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).mark(function _callee(nativeString) {
        var results, emoji, skinIndex, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, skin;
        return (/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return $8f9034744078e207$export$2e2bcd8739ae039.search(nativeString, {
                        maxResults: 1,
                        caller: 'getEmojiDataFromNative'
                    });
                case 2:
                    results = _ctx.sent;
                    if (!(!results || !results.length)) {
                        _ctx.next = 5;
                        break;
                    }
                    return _ctx.abrupt("return", null);
                case 5:
                    emoji = results[0];
                    skinIndex = 0;
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _ctx.prev = 8;
                    _iterator = emoji.skins[Symbol.iterator]();
                case 10:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _ctx.next = 18;
                        break;
                    }
                    skin = _step.value;
                    if (!(skin.native == nativeString)) {
                        _ctx.next = 14;
                        break;
                    }
                    return _ctx.abrupt("break", 18);
                case 14:
                    skinIndex++;
                case 15:
                    _iteratorNormalCompletion = true;
                    _ctx.next = 10;
                    break;
                case 18:
                    _ctx.next = 24;
                    break;
                case 20:
                    _ctx.prev = 20;
                    _ctx.t0 = _ctx["catch"](8);
                    _didIteratorError = true;
                    _iteratorError = _ctx.t0;
                case 24:
                    _ctx.prev = 24;
                    _ctx.prev = 25;
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                case 27:
                    _ctx.prev = 27;
                    if (!_didIteratorError) {
                        _ctx.next = 30;
                        break;
                    }
                    throw _iteratorError;
                case 30:
                    return _ctx.finish(27);
                case 31:
                    return _ctx.finish(24);
                case 32:
                    return _ctx.abrupt("return", $98790827c4982bdf$export$d10ac59fbe52a745(emoji, {
                        skinIndex: skinIndex
                    }));
                case 33:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                8,
                20,
                24,
                32
            ],
            [
                25,
                ,
                27,
                31
            ]
        ]);
    }));
    return _getEmojiDataFromNative.apply(this, arguments);
}





var $e0de45cc3cbe7f1d$var$categories = {
    activity: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
            })
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"
            })
        })
    },
    custom: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
            d: "M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"
        })
    }),
    flags: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
            })
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
            })
        })
    },
    foods: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
            })
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"
            })
        })
    },
    frequent: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
                })
            ]
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
            })
        })
    },
    nature: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
                })
            ]
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 576 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"
            })
        })
    },
    objects: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
                })
            ]
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"
            })
        })
    },
    people: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
                })
            ]
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"
            })
        })
    },
    places: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
                }),
                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                    d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
                })
            ]
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"
            })
        })
    },
    symbols: {
        outline: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
            })
        }),
        solid: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
                d: "M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"
            })
        })
    }
};
var $e0de45cc3cbe7f1d$var$search = {
    loupe: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
            d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        })
    }),
    delete: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("path", {
            d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
        })
    })
};
var $e0de45cc3cbe7f1d$export$2e2bcd8739ae039 = {
    categories: $e0de45cc3cbe7f1d$var$categories,
    search: $e0de45cc3cbe7f1d$var$search
};





var $77ce92f400311234$var$getImageSrc = function(props, emojiSkin) {
    if (emojiSkin.src) return emojiSkin.src;
    if (props.set === 'native' || props.spritesheet) return undefined;
    if (typeof props.getImageURL === 'function') return props.getImageURL(props.set, emojiSkin.unified);
    if (typeof props.imageURL === 'string') return props.imageURL;
    return "https://cdn.jsdelivr.net/npm/emoji-datasource-".concat(props.set, "@14.0.0/img/").concat(props.set, "/64/").concat(emojiSkin.unified, ".png");
};
var $77ce92f400311234$var$getSpritesheetSrc = function(props) {
    if (typeof props.getSpritesheetURL === 'function') return props.getSpritesheetURL(props.set);
    if (typeof props.spritesheetURL === 'string') return props.spritesheetURL;
    return "https://cdn.jsdelivr.net/npm/emoji-datasource-".concat(props.set, "@14.0.0/img/").concat(props.set, "/sheets-256/64.png");
};
function $77ce92f400311234$export$2e2bcd8739ae039(props) {
    var id = props.id, skin = props.skin, emoji = props.emoji;
    if (props.shortcodes) {
        var matches = props.shortcodes.match($8f9034744078e207$export$2e2bcd8739ae039.SHORTCODES_REGEX);
        if (matches) {
            id = matches[1];
            if (matches[2]) skin = matches[2];
        }
    }
    emoji || (emoji = $8f9034744078e207$export$2e2bcd8739ae039.get(id || props.native));
    if (!emoji) return props.fallback;
    var emojiSkin = emoji.skins[skin - 1] || emoji.skins[0];
    var imageSrc = $77ce92f400311234$var$getImageSrc(props, emojiSkin);
    var spritesheetSrc = $77ce92f400311234$var$getSpritesheetSrc(props);
    return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
        class: "emoji-mart-emoji",
        "data-emoji-set": props.set,
        children: imageSrc ? /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("img", {
            style: {
                maxWidth: props.size || '1em',
                maxHeight: props.size || '1em',
                display: 'inline-block',
                position: 'relative',
                top: '.1em'
            },
            alt: emojiSkin.native || emojiSkin.shortcodes,
            src: imageSrc
        }) : props.set == 'native' ? /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
            style: {
                fontSize: props.size,
                fontFamily: '"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'
            },
            children: emojiSkin.native
        }) : /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
            style: {
                display: 'block',
                width: props.size,
                height: props.size,
                backgroundImage: "url(".concat(spritesheetSrc, ")"),
                backgroundSize: "".concat(100 * $b79b4feb8fc394aa$export$2d0294657ab35f1b.sheet.cols, "% ").concat(100 * $b79b4feb8fc394aa$export$2d0294657ab35f1b.sheet.rows, "%"),
                backgroundPosition: "".concat(100 / ($b79b4feb8fc394aa$export$2d0294657ab35f1b.sheet.cols - 1) * emojiSkin.x, "% ").concat(100 / ($b79b4feb8fc394aa$export$2d0294657ab35f1b.sheet.rows - 1) * emojiSkin.y, "%")
            }
        })
    }));
}









var $5275416a750983b0$var$WindowHTMLElement = typeof window !== 'undefined' && window.HTMLElement !== undefined ? window.HTMLElement : Object;
var $5275416a750983b0$export$2e2bcd8739ae039 = /*#__PURE__*/ function(WindowHTMLElement) {
    "use strict";
    $429f412a5e3c4d49$export$2e2bcd8739ae039($5275416a750983b0$export$2e2bcd8739ae039, WindowHTMLElement);
    var _super = $36345c11dd10297b$export$2e2bcd8739ae039($5275416a750983b0$export$2e2bcd8739ae039);
    function $5275416a750983b0$export$2e2bcd8739ae039() {
        var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        };
        $c79c945e654c9102$export$2e2bcd8739ae039(this, $5275416a750983b0$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this);
        _this.props = props;
        if (props.parent || props.ref) {
            var ref = null;
            var parent = props.parent || (ref = props.ref && props.ref.current);
            if (ref) ref.innerHTML = '';
            if (parent) parent.appendChild($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this));
        }
        return _this;
    }
    $22c4dbb765f86cca$export$2e2bcd8739ae039($5275416a750983b0$export$2e2bcd8739ae039, [
        {
            key: "update",
            value: function update() {
                var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                };
                for(var k in props)this.attributeChangedCallback(k, null, props[k]);
            }
        },
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(attr, _, newValue) {
                if (!this.component) return;
                var value = $b79b4feb8fc394aa$export$88c9ddb45cea7241(attr, $1459522e281add88$export$2e2bcd8739ae039({
                }, attr, newValue), this.constructor.Props, this);
                if (this.component.componentWillReceiveProps) this.component.componentWillReceiveProps($1459522e281add88$export$2e2bcd8739ae039({
                }, attr, value));
                else {
                    this.component.props[attr] = value;
                    this.component.forceUpdate();
                }
            }
        }
    ], [
        {
            key: "observedAttributes",
            get: function get() {
                return Object.keys(this.Props);
            }
        }
    ]);
    return $5275416a750983b0$export$2e2bcd8739ae039;
}($5275416a750983b0$var$WindowHTMLElement);




var $327e158bf6bab5e8$export$2e2bcd8739ae039 = /*#__PURE__*/ function(HTMLElement) {
    "use strict";
    $429f412a5e3c4d49$export$2e2bcd8739ae039($327e158bf6bab5e8$export$2e2bcd8739ae039, HTMLElement);
    var _super = $36345c11dd10297b$export$2e2bcd8739ae039($327e158bf6bab5e8$export$2e2bcd8739ae039);
    function $327e158bf6bab5e8$export$2e2bcd8739ae039(props) {
        var styles = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        }).styles;
        $c79c945e654c9102$export$2e2bcd8739ae039(this, $327e158bf6bab5e8$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, props);
        _this.setShadow();
        _this.injectStyles(styles);
        return _this;
    }
    $22c4dbb765f86cca$export$2e2bcd8739ae039($327e158bf6bab5e8$export$2e2bcd8739ae039, [
        {
            key: "setShadow",
            value: function setShadow() {
                this.attachShadow({
                    mode: 'open'
                });
            }
        },
        {
            key: "injectStyles",
            value: function injectStyles(styles) {
                if (!styles) return;
                var style = document.createElement('style');
                style.textContent = styles;
                this.shadowRoot.insertBefore(style, this.shadowRoot.firstChild);
            }
        }
    ]);
    return $327e158bf6bab5e8$export$2e2bcd8739ae039;
}($8ff3341b97dd3f49$export$2e2bcd8739ae039($5275416a750983b0$export$2e2bcd8739ae039));






var $86ad3a680fe4d737$export$2e2bcd8739ae039 = {
    fallback: '',
    id: '',
    native: '',
    shortcodes: '',
    size: {
        value: '',
        transform: function(value) {
            // If the value is a number, then we assume it’s a pixel value.
            if (!/\D/.test(value)) return "".concat(value, "px");
            return value;
        }
    },
    imageURL: null,
    spritesheetURL: null,
    spritesheet: null,
    // Shared
    set: $6191713a0c89d01b$export$2e2bcd8739ae039.set,
    skin: $6191713a0c89d01b$export$2e2bcd8739ae039.skin
};


var $9c6cf3620cfad306$export$2e2bcd8739ae039 = /*#__PURE__*/ function(HTMLElement) {
    "use strict";
    $429f412a5e3c4d49$export$2e2bcd8739ae039($9c6cf3620cfad306$export$2e2bcd8739ae039, HTMLElement);
    var _super = $36345c11dd10297b$export$2e2bcd8739ae039($9c6cf3620cfad306$export$2e2bcd8739ae039);
    function $9c6cf3620cfad306$export$2e2bcd8739ae039(props) {
        $c79c945e654c9102$export$2e2bcd8739ae039(this, $9c6cf3620cfad306$export$2e2bcd8739ae039);
        return _super.call(this, props);
    }
    $22c4dbb765f86cca$export$2e2bcd8739ae039($9c6cf3620cfad306$export$2e2bcd8739ae039, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this = this;
                return $22bbea2e4f5d5dfd$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).mark(function _callee() {
                    var props;
                    return (/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                props = $b79b4feb8fc394aa$export$75fe5f91d452f94b(this.props, $86ad3a680fe4d737$export$2e2bcd8739ae039, this);
                                props.element = this;
                                props.ref = function(component) {
                                    _this.component = component;
                                };
                                _ctx.next = 5;
                                return $b79b4feb8fc394aa$export$2cd8252107eb640b();
                            case 5:
                                $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($77ce92f400311234$export$2e2bcd8739ae039, $a5d09c5d3015221e$export$2e2bcd8739ae039({
                                }, props)), this);
                            case 6:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this);
                }).bind(this))();
            }
        }
    ]);
    return $9c6cf3620cfad306$export$2e2bcd8739ae039;
}($8ff3341b97dd3f49$export$2e2bcd8739ae039($5275416a750983b0$export$2e2bcd8739ae039));
$1459522e281add88$export$2e2bcd8739ae039($9c6cf3620cfad306$export$2e2bcd8739ae039, "Props", $86ad3a680fe4d737$export$2e2bcd8739ae039);
if (typeof customElements !== 'undefined' && !customElements.get('em-emoji')) customElements.define('em-emoji', $9c6cf3620cfad306$export$2e2bcd8739ae039);








var $fcff12f1905ff4d3$var$t, $fcff12f1905ff4d3$var$u, $fcff12f1905ff4d3$var$r, $fcff12f1905ff4d3$var$o = 0, $fcff12f1905ff4d3$var$i = [], $fcff12f1905ff4d3$var$c = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__b, $fcff12f1905ff4d3$var$f = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__r, $fcff12f1905ff4d3$var$e = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.diffed, $fcff12f1905ff4d3$var$a = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__c, $fcff12f1905ff4d3$var$v = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount;
function $fcff12f1905ff4d3$var$m(t, r) {
    $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__h && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__h($fcff12f1905ff4d3$var$u, t, $fcff12f1905ff4d3$var$o || r), $fcff12f1905ff4d3$var$o = 0;
    var i = $fcff12f1905ff4d3$var$u.__H || ($fcff12f1905ff4d3$var$u.__H = {
        __: [],
        __h: []
    });
    return t >= i.__.length && i.__.push({
    }), i.__[t];
}
function $fcff12f1905ff4d3$export$60241385465d0a34(n) {
    return $fcff12f1905ff4d3$var$o = 1, $fcff12f1905ff4d3$export$13e3392192263954($fcff12f1905ff4d3$var$w, n);
}
function $fcff12f1905ff4d3$export$13e3392192263954(n1, r, o) {
    var i = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 2);
    return i.t = n1, i.__c || (i.__ = [
        o ? o(r) : $fcff12f1905ff4d3$var$w(void 0, r),
        function(n) {
            var t = i.t(i.__[0], n);
            i.__[0] !== t && (i.__ = [
                t,
                i.__[1]
            ], i.__c.setState({
            }));
        }
    ], i.__c = $fcff12f1905ff4d3$var$u), i.__;
}
function $fcff12f1905ff4d3$export$6d9c69b0de29b591(r, o) {
    var i = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 3);
    !$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__s && $fcff12f1905ff4d3$var$k(i.__H, o) && (i.__ = r, i.__H = o, $fcff12f1905ff4d3$var$u.__H.__h.push(i));
}
function $fcff12f1905ff4d3$export$e5c5a5f917a5871c(r, o) {
    var i = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 4);
    !$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__s && $fcff12f1905ff4d3$var$k(i.__H, o) && (i.__ = r, i.__H = o, $fcff12f1905ff4d3$var$u.__h.push(i));
}
function $fcff12f1905ff4d3$export$b8f5890fc79d6aca(n) {
    return $fcff12f1905ff4d3$var$o = 5, $fcff12f1905ff4d3$export$1538c33de8887b59(function() {
        return {
            current: n
        };
    }, []);
}
function $fcff12f1905ff4d3$export$d5a552a76deda3c2(n, t, u) {
    $fcff12f1905ff4d3$var$o = 6, $fcff12f1905ff4d3$export$e5c5a5f917a5871c(function() {
        "function" == typeof n ? n(t()) : n && (n.current = t());
    }, null == u ? u : u.concat(n));
}
function $fcff12f1905ff4d3$export$1538c33de8887b59(n, u) {
    var r = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 7);
    return $fcff12f1905ff4d3$var$k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}
function $fcff12f1905ff4d3$export$35808ee640e87ca7(n, t) {
    return $fcff12f1905ff4d3$var$o = 8, $fcff12f1905ff4d3$export$1538c33de8887b59(function() {
        return n;
    }, t);
}
function $fcff12f1905ff4d3$export$fae74005e78b1a27(n) {
    var r = $fcff12f1905ff4d3$var$u.context[n.__c], o = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 9);
    return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub($fcff12f1905ff4d3$var$u)), r.props.value) : n.__;
}
function $fcff12f1905ff4d3$export$dc8fbce3eb94dc1e(t, u) {
    $d5fc6ac583bc94a1$export$41c562ebe57d11e2.useDebugValue && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.useDebugValue(u ? u(t) : t);
}
function $fcff12f1905ff4d3$export$c052f6604b7d51fe(n2) {
    var r = $fcff12f1905ff4d3$var$m($fcff12f1905ff4d3$var$t++, 10), o = $fcff12f1905ff4d3$export$60241385465d0a34();
    return r.__ = n2, $fcff12f1905ff4d3$var$u.componentDidCatch || ($fcff12f1905ff4d3$var$u.componentDidCatch = function(n) {
        r.__ && r.__(n), o[1](n);
    }), [
        o[0],
        function() {
            o[1](void 0);
        }
    ];
}
function $fcff12f1905ff4d3$var$x() {
    var t1;
    for($fcff12f1905ff4d3$var$i.sort(function(n, t) {
        return n.__v.__b - t.__v.__b;
    }); t1 = $fcff12f1905ff4d3$var$i.pop();)if (t1.__P) try {
        t1.__H.__h.forEach($fcff12f1905ff4d3$var$g), t1.__H.__h.forEach($fcff12f1905ff4d3$var$j), t1.__H.__h = [];
    } catch (u) {
        t1.__H.__h = [], $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(u, t1.__v);
    }
}
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__b = function(n) {
    $fcff12f1905ff4d3$var$u = null, $fcff12f1905ff4d3$var$c && $fcff12f1905ff4d3$var$c(n);
}, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__r = function(n) {
    $fcff12f1905ff4d3$var$f && $fcff12f1905ff4d3$var$f(n), $fcff12f1905ff4d3$var$t = 0;
    var r = ($fcff12f1905ff4d3$var$u = n.__c).__H;
    r && (r.__h.forEach($fcff12f1905ff4d3$var$g), r.__h.forEach($fcff12f1905ff4d3$var$j), r.__h = []);
}, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.diffed = function(t2) {
    $fcff12f1905ff4d3$var$e && $fcff12f1905ff4d3$var$e(t2);
    var o = t2.__c;
    o && o.__H && o.__H.__h.length && (1 !== $fcff12f1905ff4d3$var$i.push(o) && $fcff12f1905ff4d3$var$r === $d5fc6ac583bc94a1$export$41c562ebe57d11e2.requestAnimationFrame || (($fcff12f1905ff4d3$var$r = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.requestAnimationFrame) || function(n) {
        var t, u = function u() {
            clearTimeout(r), $fcff12f1905ff4d3$var$b && cancelAnimationFrame(t), setTimeout(n);
        }, r = setTimeout(u, 100);
        $fcff12f1905ff4d3$var$b && (t = requestAnimationFrame(u));
    })($fcff12f1905ff4d3$var$x)), $fcff12f1905ff4d3$var$u = null;
}, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__c = function(t3, u) {
    u.some(function(t) {
        try {
            t.__h.forEach($fcff12f1905ff4d3$var$g), t.__h = t.__h.filter(function(n) {
                return !n.__ || $fcff12f1905ff4d3$var$j(n);
            });
        } catch (r) {
            u.some(function(n) {
                n.__h && (n.__h = []);
            }), u = [], $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(r, t.__v);
        }
    }), $fcff12f1905ff4d3$var$a && $fcff12f1905ff4d3$var$a(t3, u);
}, $d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount = function(t) {
    $fcff12f1905ff4d3$var$v && $fcff12f1905ff4d3$var$v(t);
    var u, r = t.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            $fcff12f1905ff4d3$var$g(n);
        } catch (n3) {
            u = n3;
        }
    }), u && $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e(u, r.__v));
};
var $fcff12f1905ff4d3$var$b = "function" == typeof requestAnimationFrame;
function $fcff12f1905ff4d3$var$g(n) {
    var t = $fcff12f1905ff4d3$var$u, r = n.__c;
    "function" == typeof r && (n.__c = void 0, r()), $fcff12f1905ff4d3$var$u = t;
}
function $fcff12f1905ff4d3$var$j(n) {
    var t = $fcff12f1905ff4d3$var$u;
    n.__c = n.__(), $fcff12f1905ff4d3$var$u = t;
}
function $fcff12f1905ff4d3$var$k(n, t4) {
    return !n || n.length !== t4.length || t4.some(function(t, u) {
        return t !== n[u];
    });
}
function $fcff12f1905ff4d3$var$w(n, t) {
    return "function" == typeof t ? t(n) : t;
}





function $d7e5aa0d2b8fa1f1$var$S(n, t) {
    for(var e in t)n[e] = t[e];
    return n;
}
function $d7e5aa0d2b8fa1f1$var$C(n, t) {
    for(var e in n)if ("__source" !== e && !(e in t)) return !0;
    for(var r in t)if ("__source" !== r && n[r] !== t[r]) return !0;
    return !1;
}
function $d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd(n) {
    this.props = n;
}
function $d7e5aa0d2b8fa1f1$export$7c73462e0d25e514(n1, t1) {
    function e1(n) {
        var e = this.props.ref, r = e == n.ref;
        return !r && e && (e.call ? e(null) : e.current = null), t1 ? !t1(this.props, n) || !r : $d7e5aa0d2b8fa1f1$var$C(this.props, n);
    }
    function r1(t) {
        return this.shouldComponentUpdate = e1, $d5fc6ac583bc94a1$export$c8a8987d4410bf2d(n1, t);
    }
    return r1.displayName = "Memo(" + (n1.displayName || n1.name) + ")", r1.prototype.isReactComponent = !0, r1.__f = !0, r1;
}
($d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd.prototype = new $d5fc6ac583bc94a1$export$16fa2f45be04daa8).isPureReactComponent = !0, $d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd.prototype.shouldComponentUpdate = function(n, t) {
    return $d7e5aa0d2b8fa1f1$var$C(this.props, n) || $d7e5aa0d2b8fa1f1$var$C(this.state, t);
};
var $d7e5aa0d2b8fa1f1$var$w = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__b;
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__b = function(n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), $d7e5aa0d2b8fa1f1$var$w && $d7e5aa0d2b8fa1f1$var$w(n);
};
var $d7e5aa0d2b8fa1f1$var$R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function $d7e5aa0d2b8fa1f1$export$257a8862b851cb5b(n) {
    function t2(t, e) {
        var r = $d7e5aa0d2b8fa1f1$var$S({
        }, t);
        return delete r.ref, n(r, (e = t.ref || e) && ("object" != typeof e || "current" in e) ? e : null);
    }
    return t2.$$typeof = $d7e5aa0d2b8fa1f1$var$R, t2.render = t2, t2.prototype.isReactComponent = t2.__f = !0, t2.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t2;
}
var $d7e5aa0d2b8fa1f1$var$N = function $d7e5aa0d2b8fa1f1$var$N(n, t) {
    return null == n ? null : $d5fc6ac583bc94a1$export$47e4c5b300681277($d5fc6ac583bc94a1$export$47e4c5b300681277(n).map(t));
}, $d7e5aa0d2b8fa1f1$export$dca3b0875bd9a954 = {
    map: $d7e5aa0d2b8fa1f1$var$N,
    forEach: $d7e5aa0d2b8fa1f1$var$N,
    count: function count(n) {
        return n ? $d5fc6ac583bc94a1$export$47e4c5b300681277(n).length : 0;
    },
    only: function only(n) {
        var t = $d5fc6ac583bc94a1$export$47e4c5b300681277(n);
        if (1 !== t.length) throw "Children.only";
        return t[0];
    },
    toArray: $d5fc6ac583bc94a1$export$47e4c5b300681277
}, $d7e5aa0d2b8fa1f1$var$A = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e;
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__e = function(n, t, e) {
    if (n.then) {
        for(var r, u = t; u = u.__;)if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
    }
    $d7e5aa0d2b8fa1f1$var$A(n, t, e);
};
var $d7e5aa0d2b8fa1f1$var$O = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount;
function $d7e5aa0d2b8fa1f1$export$74bf444e3cd11ea5() {
    this.__u = 0, this.t = null, this.__b = null;
}
function $d7e5aa0d2b8fa1f1$var$U(n) {
    var t = n.__.__c;
    return t && t.__e && t.__e(n);
}
function $d7e5aa0d2b8fa1f1$export$488013bae63b21da(n2) {
    var t, e, r;
    function u1(u) {
        if (t || (t = n2()).then(function(n) {
            e = n.default || n;
        }, function(n) {
            r = n;
        }), r) throw r;
        if (!e) throw t;
        return $d5fc6ac583bc94a1$export$c8a8987d4410bf2d(e, u);
    }
    return u1.displayName = "Lazy", u1.__f = !0, u1;
}
function $d7e5aa0d2b8fa1f1$export$998bcd577473dd93() {
    this.u = null, this.o = null;
}
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.unmount = function(n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), $d7e5aa0d2b8fa1f1$var$O && $d7e5aa0d2b8fa1f1$var$O(n);
}, ($d7e5aa0d2b8fa1f1$export$74bf444e3cd11ea5.prototype = new $d5fc6ac583bc94a1$export$16fa2f45be04daa8).__c = function(n3, t3) {
    var e2 = t3.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(e2);
    var u = $d7e5aa0d2b8fa1f1$var$U(r2.__v), o = !1, i = function i() {
        o || (o = !0, e2.__R = null, u ? u(l) : l());
    };
    e2.__R = i;
    var l = function l() {
        if (!--r2.__u) {
            if (r2.state.__e) {
                var n4 = r2.state.__e;
                r2.__v.__k[0] = (function n(t6, e, r) {
                    return t6 && (t6.__v = null, t6.__k = t6.__k && t6.__k.map(function(t) {
                        return n(t, e, r);
                    }), t6.__c && t6.__c.__P === e && (t6.__e && r.insertBefore(t6.__e, t6.__d), t6.__c.__e = !0, t6.__c.__P = r)), t6;
                })(n4, n4.__c.__P, n4.__c.__O);
            }
            var t4;
            for(r2.setState({
                __e: r2.__b = null
            }); t4 = r2.t.pop();)t4.forceUpdate();
        }
    }, c = !0 === t3.__h;
    (r2.__u++) || c || r2.setState({
        __e: r2.__b = r2.__v.__k[0]
    }), n3.then(i, i);
}, $d7e5aa0d2b8fa1f1$export$74bf444e3cd11ea5.prototype.componentWillUnmount = function() {
    this.t = [];
}, $d7e5aa0d2b8fa1f1$export$74bf444e3cd11ea5.prototype.render = function(n7, t7) {
    if (this.__b) {
        if (this.__v.__k) {
            var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
            this.__v.__k[0] = (function n8(t8, e, r) {
                return t8 && (t8.__c && t8.__c.__H && (t8.__c.__H.__.forEach(function(n) {
                    "function" == typeof n.__c && n.__c();
                }), t8.__c.__H = null), null != (t8 = $d7e5aa0d2b8fa1f1$var$S({
                }, t8)).__c && (t8.__c.__P === r && (t8.__c.__P = e), t8.__c = null), t8.__k = t8.__k && t8.__k.map(function(t) {
                    return n8(t, e, r);
                })), t8;
            })(this.__b, e3, r3.__O = r3.__P);
        }
        this.__b = null;
    }
    var u = t7.__e && $d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d5fc6ac583bc94a1$export$ffb0004e005737fa, null, n7.fallback);
    return u && (u.__h = null), [
        $d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d5fc6ac583bc94a1$export$ffb0004e005737fa, null, t7.__e ? null : n7.children),
        u
    ];
};
var $d7e5aa0d2b8fa1f1$var$T = function $d7e5aa0d2b8fa1f1$var$T(n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for(e = n.u; e;){
        for(; e.length > 3;)e.pop()();
        if (e[1] < e[0]) break;
        n.u = e = e[2];
    }
};
function $d7e5aa0d2b8fa1f1$var$D(n) {
    return this.getChildContext = function() {
        return n.context;
    }, n.children;
}
function $d7e5aa0d2b8fa1f1$var$I(n9) {
    var t = this, e = n9.i;
    t.componentWillUnmount = function() {
        $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(null, t.l), t.l = null, t.i = null;
    }, t.i && t.i !== e && t.componentWillUnmount(), n9.__v ? (t.l || (t.i = e, t.l = {
        nodeType: 1,
        parentNode: e,
        childNodes: [],
        appendChild: function appendChild(n) {
            this.childNodes.push(n), t.i.appendChild(n);
        },
        insertBefore: function insertBefore(n, e) {
            this.childNodes.push(n), t.i.appendChild(n);
        },
        removeChild: function removeChild(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
        }
    }), $d5fc6ac583bc94a1$export$b3890eb0ae9dca99($d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d7e5aa0d2b8fa1f1$var$D, {
        context: t.context
    }, n9.__v), t.l)) : t.l && t.componentWillUnmount();
}
function $d7e5aa0d2b8fa1f1$export$d39a5bbd09211389(n, t) {
    return $d5fc6ac583bc94a1$export$c8a8987d4410bf2d($d7e5aa0d2b8fa1f1$var$I, {
        __v: n,
        i: t
    });
}
($d7e5aa0d2b8fa1f1$export$998bcd577473dd93.prototype = new $d5fc6ac583bc94a1$export$16fa2f45be04daa8).__e = function(n) {
    var t = this, e = $d7e5aa0d2b8fa1f1$var$U(t.__v), r = t.o.get(n);
    return r[0]++, function(u) {
        var o = function o() {
            t.props.revealOrder ? (r.push(u), $d7e5aa0d2b8fa1f1$var$T(t, n, r)) : u();
        };
        e ? e(o) : o();
    };
}, $d7e5aa0d2b8fa1f1$export$998bcd577473dd93.prototype.render = function(n) {
    this.u = null, this.o = new Map;
    var t = $d5fc6ac583bc94a1$export$47e4c5b300681277(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for(var e = t.length; e--;)this.o.set(t[e], this.u = [
        1,
        0,
        this.u
    ]);
    return n.children;
}, $d7e5aa0d2b8fa1f1$export$998bcd577473dd93.prototype.componentDidUpdate = $d7e5aa0d2b8fa1f1$export$998bcd577473dd93.prototype.componentDidMount = function() {
    var n = this;
    this.o.forEach(function(t, e) {
        $d7e5aa0d2b8fa1f1$var$T(n, e, t);
    });
};
var $d7e5aa0d2b8fa1f1$var$j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, $d7e5aa0d2b8fa1f1$var$P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, $d7e5aa0d2b8fa1f1$var$V = "undefined" != typeof document, $d7e5aa0d2b8fa1f1$var$z = function $d7e5aa0d2b8fa1f1$var$z(n) {
    return ("undefined" != typeof Symbol && "symbol" == $78738e43ceaeaba0$export$2e2bcd8739ae039(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(n);
};
function $d7e5aa0d2b8fa1f1$export$b3890eb0ae9dca99(n, t, e) {
    return null == t.__k && (t.textContent = ""), $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function $d7e5aa0d2b8fa1f1$export$fa8d919ba61d84db(n, t, e) {
    return $d5fc6ac583bc94a1$export$fa8d919ba61d84db(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
$d5fc6ac583bc94a1$export$16fa2f45be04daa8.prototype.isReactComponent = {
}, [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate"
].forEach(function(n) {
    Object.defineProperty($d5fc6ac583bc94a1$export$16fa2f45be04daa8.prototype, n, {
        configurable: !0,
        get: function get() {
            return this["UNSAFE_" + n];
        },
        set: function set(t) {
            Object.defineProperty(this, n, {
                configurable: !0,
                writable: !0,
                value: t
            });
        }
    });
});
var $d7e5aa0d2b8fa1f1$var$H = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.event;
function $d7e5aa0d2b8fa1f1$var$Z() {
}
function $d7e5aa0d2b8fa1f1$var$Y() {
    return this.cancelBubble;
}
function $d7e5aa0d2b8fa1f1$var$q() {
    return this.defaultPrevented;
}
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.event = function(n) {
    return $d7e5aa0d2b8fa1f1$var$H && (n = $d7e5aa0d2b8fa1f1$var$H(n)), n.persist = $d7e5aa0d2b8fa1f1$var$Z, n.isPropagationStopped = $d7e5aa0d2b8fa1f1$var$Y, n.isDefaultPrevented = $d7e5aa0d2b8fa1f1$var$q, n.nativeEvent = n;
};
var $d7e5aa0d2b8fa1f1$var$G, $d7e5aa0d2b8fa1f1$var$J = {
    configurable: !0,
    get: function get() {
        return this.class;
    }
}, $d7e5aa0d2b8fa1f1$var$K = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode;
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.vnode = function(n10) {
    var t = n10.type, e = n10.props, r = e;
    if ("string" == typeof t) {
        var u = -1 === t.indexOf("-");
        for(var o in r = {
        }, e){
            var i = e[o];
            $d7e5aa0d2b8fa1f1$var$V && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !$d7e5aa0d2b8fa1f1$var$z(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : u && $d7e5aa0d2b8fa1f1$var$P.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = $d5fc6ac583bc94a1$export$47e4c5b300681277(e.children).forEach(function(n) {
            n.props.selected = -1 != r.value.indexOf(n.props.value);
        })), "select" == t && null != r.defaultValue && (r.value = $d5fc6ac583bc94a1$export$47e4c5b300681277(e.children).forEach(function(n) {
            n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
        })), n10.props = r, e.class != e.className && ($d7e5aa0d2b8fa1f1$var$J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", $d7e5aa0d2b8fa1f1$var$J));
    }
    n10.$$typeof = $d7e5aa0d2b8fa1f1$var$j, $d7e5aa0d2b8fa1f1$var$K && $d7e5aa0d2b8fa1f1$var$K(n10);
};
var $d7e5aa0d2b8fa1f1$var$Q = $d5fc6ac583bc94a1$export$41c562ebe57d11e2.__r;
$d5fc6ac583bc94a1$export$41c562ebe57d11e2.__r = function(n) {
    $d7e5aa0d2b8fa1f1$var$Q && $d7e5aa0d2b8fa1f1$var$Q(n), $d7e5aa0d2b8fa1f1$var$G = n.__c;
};
var $d7e5aa0d2b8fa1f1$export$ae55be85d98224ed = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function readContext(n) {
                return $d7e5aa0d2b8fa1f1$var$G.__n[n.__c].props.value;
            }
        }
    }
}, $d7e5aa0d2b8fa1f1$export$83d89fbfd8236492 = "17.0.2";
function $d7e5aa0d2b8fa1f1$export$d38cd72104c1f0e9(n) {
    return $d5fc6ac583bc94a1$export$c8a8987d4410bf2d.bind(null, n);
}
function $d7e5aa0d2b8fa1f1$export$a8257692ac88316c(n) {
    return !!n && n.$$typeof === $d7e5aa0d2b8fa1f1$var$j;
}
function $d7e5aa0d2b8fa1f1$export$e530037191fcd5d7(n) {
    return $d7e5aa0d2b8fa1f1$export$a8257692ac88316c(n) ? $d5fc6ac583bc94a1$export$e530037191fcd5d7.apply(null, arguments) : n;
}
function $d7e5aa0d2b8fa1f1$export$502457920280e6be(n) {
    return !!n.__k && ($d5fc6ac583bc94a1$export$b3890eb0ae9dca99(null, n), !0);
}
function $d7e5aa0d2b8fa1f1$export$466bfc07425424d5(n) {
    return n && (n.base || 1 === n.nodeType && n) || null;
}
var $d7e5aa0d2b8fa1f1$export$c78a37762a8d58e1 = function $d7e5aa0d2b8fa1f1$export$c78a37762a8d58e1(n, t) {
    return n(t);
}, $d7e5aa0d2b8fa1f1$export$cd75ccfd720a3cd4 = function $d7e5aa0d2b8fa1f1$export$cd75ccfd720a3cd4(n, t) {
    return n(t);
}, $d7e5aa0d2b8fa1f1$export$5f8d39834fd61797 = $d5fc6ac583bc94a1$export$ffb0004e005737fa;
var $d7e5aa0d2b8fa1f1$export$2e2bcd8739ae039 = {
    useState: $fcff12f1905ff4d3$export$60241385465d0a34,
    useReducer: $fcff12f1905ff4d3$export$13e3392192263954,
    useEffect: $fcff12f1905ff4d3$export$6d9c69b0de29b591,
    useLayoutEffect: $fcff12f1905ff4d3$export$e5c5a5f917a5871c,
    useRef: $fcff12f1905ff4d3$export$b8f5890fc79d6aca,
    useImperativeHandle: $fcff12f1905ff4d3$export$d5a552a76deda3c2,
    useMemo: $fcff12f1905ff4d3$export$1538c33de8887b59,
    useCallback: $fcff12f1905ff4d3$export$35808ee640e87ca7,
    useContext: $fcff12f1905ff4d3$export$fae74005e78b1a27,
    useDebugValue: $fcff12f1905ff4d3$export$dc8fbce3eb94dc1e,
    version: "17.0.2",
    Children: $d7e5aa0d2b8fa1f1$export$dca3b0875bd9a954,
    render: $d7e5aa0d2b8fa1f1$export$b3890eb0ae9dca99,
    hydrate: $d7e5aa0d2b8fa1f1$export$fa8d919ba61d84db,
    unmountComponentAtNode: $d7e5aa0d2b8fa1f1$export$502457920280e6be,
    createPortal: $d7e5aa0d2b8fa1f1$export$d39a5bbd09211389,
    createElement: $d5fc6ac583bc94a1$export$c8a8987d4410bf2d,
    createContext: $d5fc6ac583bc94a1$export$fd42f52fd3ae1109,
    createFactory: $d7e5aa0d2b8fa1f1$export$d38cd72104c1f0e9,
    cloneElement: $d7e5aa0d2b8fa1f1$export$e530037191fcd5d7,
    createRef: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43,
    Fragment: $d5fc6ac583bc94a1$export$ffb0004e005737fa,
    isValidElement: $d7e5aa0d2b8fa1f1$export$a8257692ac88316c,
    findDOMNode: $d7e5aa0d2b8fa1f1$export$466bfc07425424d5,
    Component: $d5fc6ac583bc94a1$export$16fa2f45be04daa8,
    PureComponent: $d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd,
    memo: $d7e5aa0d2b8fa1f1$export$7c73462e0d25e514,
    forwardRef: $d7e5aa0d2b8fa1f1$export$257a8862b851cb5b,
    flushSync: $d7e5aa0d2b8fa1f1$export$cd75ccfd720a3cd4,
    unstable_batchedUpdates: $d7e5aa0d2b8fa1f1$export$c78a37762a8d58e1,
    StrictMode: $d5fc6ac583bc94a1$export$ffb0004e005737fa,
    Suspense: $d7e5aa0d2b8fa1f1$export$74bf444e3cd11ea5,
    SuspenseList: $d7e5aa0d2b8fa1f1$export$998bcd577473dd93,
    lazy: $d7e5aa0d2b8fa1f1$export$488013bae63b21da,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $d7e5aa0d2b8fa1f1$export$ae55be85d98224ed
};




var $14f6fe4cf86a9151$var$THEME_ICONS = {
    light: 'outline',
    dark: 'solid'
};
var $14f6fe4cf86a9151$export$2e2bcd8739ae039 = /*#__PURE__*/ function(PureComponent) {
    "use strict";
    $429f412a5e3c4d49$export$2e2bcd8739ae039($14f6fe4cf86a9151$export$2e2bcd8739ae039, PureComponent);
    var _super = $36345c11dd10297b$export$2e2bcd8739ae039($14f6fe4cf86a9151$export$2e2bcd8739ae039);
    function $14f6fe4cf86a9151$export$2e2bcd8739ae039() {
        $c79c945e654c9102$export$2e2bcd8739ae039(this, $14f6fe4cf86a9151$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this);
        _this.categories = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.filter(function(category) {
            return !category.target;
        });
        _this.state = {
            categoryId: _this.categories[0].id
        };
        return _this;
    }
    $22c4dbb765f86cca$export$2e2bcd8739ae039($14f6fe4cf86a9151$export$2e2bcd8739ae039, [
        {
            key: "renderIcon",
            value: function renderIcon(category) {
                var icon = category.icon;
                if (icon) {
                    if (icon.svg) return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
                        class: "flex",
                        dangerouslySetInnerHTML: {
                            __html: icon.svg
                        }
                    }));
                    if (icon.src) return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("img", {
                        src: icon.src
                    }));
                }
                var categoryIcons = $e0de45cc3cbe7f1d$export$2e2bcd8739ae039.categories[category.id] || $e0de45cc3cbe7f1d$export$2e2bcd8739ae039.categories.custom;
                var style = this.props.icons == 'auto' ? $14f6fe4cf86a9151$var$THEME_ICONS[this.props.theme] : this.props.icons;
                return categoryIcons[style] || categoryIcons;
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                var selectedCategoryIndex = null;
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("nav", {
                    id: "nav",
                    class: "padding",
                    "data-position": this.props.position,
                    children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                        class: "flex relative",
                        children: [
                            this.categories.map(function(category, i) {
                                var _this1 = _this;
                                var title = category.name || $b79b4feb8fc394aa$export$dbe3113d60765c1a.categories[category.id];
                                var selected = !_this.props.unfocused && category.id == _this.state.categoryId;
                                if (selected) selectedCategoryIndex = i;
                                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("button", {
                                    "aria-label": title,
                                    "aria-selected": selected || undefined,
                                    title: title,
                                    type: "button",
                                    class: "flex flex-grow flex-center",
                                    onMouseDown: function(e) {
                                        return e.preventDefault();
                                    },
                                    onClick: function() {
                                        _this1.props.onClick({
                                            category: category,
                                            i: i
                                        });
                                    },
                                    children: _this.renderIcon(category)
                                }));
                            }),
                            /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                class: "bar",
                                style: {
                                    width: "".concat(100 / this.categories.length, "%"),
                                    opacity: selectedCategoryIndex == null ? 0 : 1,
                                    transform: "translateX(".concat(selectedCategoryIndex * 100, "%)")
                                }
                            })
                        ]
                    })
                }));
            }
        }
    ]);
    return $14f6fe4cf86a9151$export$2e2bcd8739ae039;
}($d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd);






var $e12a0ebddac53324$export$2e2bcd8739ae039 = /*#__PURE__*/ function(PureComponent) {
    "use strict";
    $429f412a5e3c4d49$export$2e2bcd8739ae039($e12a0ebddac53324$export$2e2bcd8739ae039, PureComponent);
    var _super = $36345c11dd10297b$export$2e2bcd8739ae039($e12a0ebddac53324$export$2e2bcd8739ae039);
    function $e12a0ebddac53324$export$2e2bcd8739ae039() {
        $c79c945e654c9102$export$2e2bcd8739ae039(this, $e12a0ebddac53324$export$2e2bcd8739ae039);
        return _super.apply(this, arguments);
    }
    $22c4dbb765f86cca$export$2e2bcd8739ae039($e12a0ebddac53324$export$2e2bcd8739ae039, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                for(var k in nextProps){
                    if (k == 'children') continue;
                    if (nextProps[k] != this.props[k]) return true;
                }
                return false;
            }
        },
        {
            key: "render",
            value: function render() {
                return this.props.children;
            }
        }
    ]);
    return $e12a0ebddac53324$export$2e2bcd8739ae039;
}($d7e5aa0d2b8fa1f1$export$221d75b3f55bb0bd);




var $1221208eb78d1324$var$Performance = {
    rowsPerRender: 10
};
var $1221208eb78d1324$export$2e2bcd8739ae039 = /*#__PURE__*/ function(Component) {
    "use strict";
    $429f412a5e3c4d49$export$2e2bcd8739ae039($1221208eb78d1324$export$2e2bcd8739ae039, Component);
    var _super = $36345c11dd10297b$export$2e2bcd8739ae039($1221208eb78d1324$export$2e2bcd8739ae039);
    function $1221208eb78d1324$export$2e2bcd8739ae039(props) {
        $c79c945e654c9102$export$2e2bcd8739ae039(this, $1221208eb78d1324$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this);
        $1459522e281add88$export$2e2bcd8739ae039($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this), "handleClickOutside", function(e) {
            var element = _this.props.element;
            if (e.target != element) {
                if (_this.state.showSkins) _this.closeSkins();
                if (_this.props.onClickOutside) _this.props.onClickOutside();
            }
        });
        $1459522e281add88$export$2e2bcd8739ae039($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this), "handleBaseClick", function(e) {
            if (!_this.state.showSkins) return;
            if (!e.target.closest('.menu')) {
                e.preventDefault();
                e.stopImmediatePropagation();
                _this.closeSkins();
            }
        });
        $1459522e281add88$export$2e2bcd8739ae039($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this), "handleBaseKeydown", function(e) {
            if (!_this.state.showSkins) return;
            if (e.key == 'Escape') {
                e.preventDefault();
                e.stopImmediatePropagation();
                _this.closeSkins();
            }
        });
        $1459522e281add88$export$2e2bcd8739ae039($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this), "handleSearchClick", function() {
            var emoji = _this.getEmojiByPos(_this.state.pos);
            if (!emoji) return;
            _this.setState({
                pos: [
                    -1,
                    -1
                ]
            });
        });
        $1459522e281add88$export$2e2bcd8739ae039($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this), "handleSearchInput", $22bbea2e4f5d5dfd$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).mark(function _callee() {
            var ref, ref1, input, value, searchResults, afterRender, pos, grid, row, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, emoji;
            return (/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        ;
                        ;
                        input = (ref1 = (ref = _this.props.searchInputRef) === null || ref === void 0 ? void 0 : ref.current) !== null && ref1 !== void 0 ? ref1 : _this.refs.searchInput.current;
                        if (input) {
                            _ctx.next = 5;
                            break;
                        }
                        return _ctx.abrupt("return");
                    case 5:
                        value = input.value;
                        _ctx.next = 8;
                        return $8f9034744078e207$export$2e2bcd8739ae039.search(value);
                    case 8:
                        searchResults = _ctx.sent;
                        afterRender = function() {
                            if (!_this.refs.scroll.current) return;
                            _this.refs.scroll.current.scrollTop = 0;
                        };
                        if (searchResults) {
                            _ctx.next = 12;
                            break;
                        }
                        return _ctx.abrupt("return", _this.setState({
                            searchResults: searchResults,
                            pos: [
                                -1,
                                -1
                            ]
                        }, afterRender));
                    case 12:
                        pos = input.selectionStart == input.value.length ? [
                            0,
                            0
                        ] : [
                            -1,
                            -1
                        ];
                        grid = [];
                        grid.setsize = searchResults.length;
                        row = null;
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        _ctx.prev = 17;
                        for(_iterator = searchResults[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            emoji = _step.value;
                            if (!grid.length || row.length == _this.props.perLine) {
                                row = [];
                                row.__categoryId = 'search';
                                row.__index = grid.length;
                                grid.push(row);
                            }
                            row.push(emoji);
                        }
                        _ctx.next = 25;
                        break;
                    case 21:
                        _ctx.prev = 21;
                        _ctx.t0 = _ctx["catch"](17);
                        _didIteratorError = true;
                        _iteratorError = _ctx.t0;
                    case 25:
                        _ctx.prev = 25;
                        _ctx.prev = 26;
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    case 28:
                        _ctx.prev = 28;
                        if (!_didIteratorError) {
                            _ctx.next = 31;
                            break;
                        }
                        throw _iteratorError;
                    case 31:
                        return _ctx.finish(28);
                    case 32:
                        return _ctx.finish(25);
                    case 33:
                        _this.ignoreMouse();
                        _this.setState({
                            searchResults: grid,
                            pos: pos
                        }, afterRender);
                    case 35:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee, null, [
                [
                    17,
                    21,
                    25,
                    33
                ],
                [
                    26,
                    ,
                    28,
                    32
                ]
            ]);
        }).bind(_this)).bind($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this)));
        $1459522e281add88$export$2e2bcd8739ae039($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this), "handleSearchKeyDown", function(e) {
            // const specialKey = e.altKey || e.ctrlKey || e.metaKey
            var input = e.currentTarget;
            e.stopImmediatePropagation();
            switch(e.key){
                case 'ArrowLeft':
                    // if (specialKey) return
                    // e.preventDefault()
                    _this.navigate({
                        e: e,
                        input: input,
                        left: true
                    });
                    break;
                case 'ArrowRight':
                    // if (specialKey) return
                    // e.preventDefault()
                    _this.navigate({
                        e: e,
                        input: input,
                        right: true
                    });
                    break;
                case 'ArrowUp':
                    // if (specialKey) return
                    // e.preventDefault()
                    _this.navigate({
                        e: e,
                        input: input,
                        up: true
                    });
                    break;
                case 'ArrowDown':
                    // if (specialKey) return
                    // e.preventDefault()
                    _this.navigate({
                        e: e,
                        input: input,
                        down: true
                    });
                    break;
                case 'Enter':
                    e.preventDefault();
                    _this.handleEmojiClick({
                        pos: _this.state.pos
                    });
                    break;
                case 'Escape':
                    e.preventDefault();
                    if (_this.state.searchResults) _this.clearSearch();
                    else _this.unfocusSearch();
                    break;
                default:
                    break;
            }
        });
        $1459522e281add88$export$2e2bcd8739ae039($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this), "clearSearch", function() {
            var ref;
            var ref2;
            var input = (ref2 = (ref = _this.props.searchInputRef) === null || ref === void 0 ? void 0 : ref.current) !== null && ref2 !== void 0 ? ref2 : _this.refs.searchInput.current;
            if (!input) return;
            input.value = '';
            input.focus();
            _this.handleSearchInput();
        });
        $1459522e281add88$export$2e2bcd8739ae039($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this), "handleCategoryClick", function(param) {
            var category = param.category, i = param.i;
            _this.scrollTo(i == 0 ? {
                row: -1
            } : {
                categoryId: category.id
            });
        });
        $1459522e281add88$export$2e2bcd8739ae039($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this), "openSkins", function(e) {
            var currentTarget = e.currentTarget;
            var rect = currentTarget.getBoundingClientRect();
            _this.setState({
                showSkins: rect
            }, $22bbea2e4f5d5dfd$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).mark(function _callee() {
                var menu;
                return (/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            _ctx.next = 2;
                            return $98790827c4982bdf$export$e772c8ff12451969(2);
                        case 2:
                            menu = _this.refs.menu.current;
                            if (menu) {
                                _ctx.next = 5;
                                break;
                            }
                            return _ctx.abrupt("return");
                        case 5:
                            menu.classList.remove('hidden');
                            _this.refs.skinToneRadio.current.focus();
                            _this.base.addEventListener('click', _this.handleBaseClick, true);
                            _this.base.addEventListener('keydown', _this.handleBaseKeydown, true);
                        case 9:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }).bind(_this)).bind($0f6de0ee06d6d662$export$2e2bcd8739ae039(_this)));
        });
        _this.state = $a5d09c5d3015221e$export$2e2bcd8739ae039({
            pos: [
                -1,
                -1
            ],
            visibleRows: {
                0: true
            }
        }, _this.getInitialState(props));
        return _this;
    }
    $22c4dbb765f86cca$export$2e2bcd8739ae039($1221208eb78d1324$export$2e2bcd8739ae039, [
        {
            key: "getInitialState",
            value: function getInitialState() {
                var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
                return {
                    skin: props.skin || $642db0546df88ad7$export$2e2bcd8739ae039.get('skin'),
                    theme: this.initTheme(props.theme)
                };
            }
        },
        {
            key: "componentWillMount",
            value: function componentWillMount() {
                this.observers = [];
                this.dir = $b79b4feb8fc394aa$export$dbe3113d60765c1a.rtl ? 'rtl' : 'ltr';
                this.refs = {
                    menu: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
                    navigation: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
                    scroll: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
                    search: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
                    searchInput: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
                    skinToneButton: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
                    skinToneRadio: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43()
                };
                this.initGrid();
                if (this.props.stickySearch == false && this.props.searchPosition == 'sticky') {
                    console.warn('[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`.');
                    this.props.searchPosition = 'static';
                }
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.register();
                this.shadowRoot = this.base.parentNode;
                if (this.props.autoFocus) {
                    var searchInput = this.refs.searchInput;
                    if (searchInput.current) searchInput.current.focus();
                }
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var _this = this;
                this.nextState || (this.nextState = {
                });
                for(var k1 in nextProps)this.nextState[k1] = nextProps[k1];
                clearTimeout(this.nextStateTimer);
                this.nextStateTimer = setTimeout(function() {
                    var requiresGridReset = false;
                    for(var k in _this.nextState){
                        _this.props[k] = _this.nextState[k];
                        if (k === 'custom' || k === 'categories') requiresGridReset = true;
                    }
                    delete _this.nextState;
                    var nextState = _this.getInitialState();
                    if (requiresGridReset) return _this.reset(nextState);
                    _this.setState(nextState);
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.unregister();
            }
        },
        {
            key: "reset",
            value: function reset() {
                var nextState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                };
                var _this = this;
                return $22bbea2e4f5d5dfd$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).mark(function _callee() {
                    return (/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return $b79b4feb8fc394aa$export$2cd8252107eb640b(this.props);
                            case 2:
                                this.initGrid();
                                this.unobserve();
                                this.setState(nextState, function() {
                                    _this.observeCategories();
                                    _this.observeRows();
                                });
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this);
                }).bind(this))();
            }
        },
        {
            key: "register",
            value: function register() {
                document.addEventListener('click', this.handleClickOutside);
                this.observe();
            }
        },
        {
            key: "unregister",
            value: function unregister() {
                document.removeEventListener('click', this.handleClickOutside);
                this.unobserve();
            }
        },
        {
            key: "observe",
            value: function observe() {
                this.observeCategories();
                this.observeRows();
            }
        },
        {
            key: "unobserve",
            value: function unobserve() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.observers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var observer = _step.value;
                        observer.disconnect();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "initGrid",
            value: function initGrid() {
                var _this = this;
                var categories = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories;
                this.refs.categories = new Map();
                var navKey = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories.map(function(category) {
                    return category.id;
                }).join(',');
                if (this.navKey && this.navKey != navKey) this.refs.scroll.current && (this.refs.scroll.current.scrollTop = 0);
                this.navKey = navKey;
                this.grid = [];
                this.grid.setsize = 0;
                var addRow = function(rows, category) {
                    var row = [];
                    row.__categoryId = category.id;
                    row.__index = rows.length;
                    _this.grid.push(row);
                    var rowIndex = _this.grid.length - 1;
                    var rowRef = rowIndex % $1221208eb78d1324$var$Performance.rowsPerRender ? {
                    } : $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43();
                    rowRef.index = rowIndex;
                    rowRef.posinset = _this.grid.setsize + 1;
                    rows.push(rowRef);
                    return row;
                };
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var category1 = _step.value;
                        var rows1 = [];
                        var row1 = addRow(rows1, category1);
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = category1.emojis[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var emoji = _step1.value;
                                if (row1.length == this.props.perLine) row1 = addRow(rows1, category1);
                                this.grid.setsize += 1;
                                row1.push(emoji);
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                        this.refs.categories.set(category1.id, {
                            root: $d5fc6ac583bc94a1$export$7d1e3a5e95ceca43(),
                            rows: rows1
                        });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "initTheme",
            value: function initTheme(theme) {
                if (theme != 'auto') return theme;
                if (!this.darkMedia) {
                    var _this = this;
                    this.darkMedia = matchMedia('(prefers-color-scheme: dark)');
                    if (this.darkMedia.media.match(/^not/)) return 'light';
                    this.darkMedia.addListener(function() {
                        if (_this.props.theme != 'auto') return;
                        _this.setState({
                            theme: _this.darkMedia.matches ? 'dark' : 'light'
                        });
                    });
                }
                return this.darkMedia.matches ? 'dark' : 'light';
            }
        },
        {
            key: "getEmojiByPos",
            value: function getEmojiByPos(param) {
                var _param = $d6ed1bc06105b202$export$2e2bcd8739ae039(param, 2), p1 = _param[0], p2 = _param[1];
                var grid = this.state.searchResults || this.grid;
                var emoji = grid[p1] && grid[p1][p2];
                if (!emoji) return;
                return $8f9034744078e207$export$2e2bcd8739ae039.get(emoji);
            }
        },
        {
            key: "observeCategories",
            value: function observeCategories() {
                var navigation = this.refs.navigation.current;
                if (!navigation) return;
                var visibleCategories = new Map();
                var setFocusedCategory = function(categoryId) {
                    if (categoryId != navigation.state.categoryId) navigation.setState({
                        categoryId: categoryId
                    });
                };
                var observerOptions = {
                    root: this.refs.scroll.current,
                    threshold: [
                        0,
                        1
                    ]
                };
                var observer = new IntersectionObserver(function(entries) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var entry = _step.value;
                            var id = entry.target.dataset.id;
                            visibleCategories.set(id, entry.intersectionRatio);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    var ratios = $ca7087421909e81d$export$2e2bcd8739ae039(visibleCategories);
                    var lastCategory = ratios[ratios.length - 1];
                    if (lastCategory[1] == 1) return setFocusedCategory(lastCategory[0]);
                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(var _iterator2 = ratios[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            var _value = $d6ed1bc06105b202$export$2e2bcd8739ae039(_step2.value, 2), id1 = _value[0], ratio = _value[1];
                            if (ratio) {
                                setFocusedCategory(id1);
                                break;
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                _iterator2.return();
                            }
                        } finally{
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }, observerOptions);
                var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                try {
                    for(var _iterator3 = this.refs.categories.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                        var root = _step3.value.root;
                        observer.observe(root.current);
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                            _iterator3.return();
                        }
                    } finally{
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
                this.observers.push(observer);
            }
        },
        {
            key: "observeRows",
            value: function observeRows() {
                var _this = this;
                var visibleRows = $a5d09c5d3015221e$export$2e2bcd8739ae039({
                }, this.state.visibleRows);
                var observer = new IntersectionObserver(function(entries) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var entry = _step.value;
                            var index = parseInt(entry.target.dataset.index);
                            if (entry.isIntersecting) visibleRows[index] = true;
                            else delete visibleRows[index];
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    _this.setState({
                        visibleRows: visibleRows
                    });
                }, {
                    root: this.refs.scroll.current,
                    rootMargin: "".concat(this.props.emojiButtonSize * ($1221208eb78d1324$var$Performance.rowsPerRender + 5), "px 0px ").concat(this.props.emojiButtonSize * $1221208eb78d1324$var$Performance.rowsPerRender, "px")
                });
                var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                try {
                    for(var _iterator5 = this.refs.categories.values()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                        var rows = _step5.value.rows;
                        var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                        try {
                            for(var _iterator4 = rows[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                                var row = _step4.value;
                                if (row.current) observer.observe(row.current);
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                    _iterator4.return();
                                }
                            } finally{
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                            _iterator5.return();
                        }
                    } finally{
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }
                this.observers.push(observer);
            }
        },
        {
            key: "preventDefault",
            value: function preventDefault(e) {
                e.preventDefault();
            }
        },
        {
            key: "unfocusSearch",
            value: function unfocusSearch() {
                var ref;
                var ref3;
                var input = (ref3 = (ref = this.props.searchInputRef) === null || ref === void 0 ? void 0 : ref.current) !== null && ref3 !== void 0 ? ref3 : this.refs.searchInput.current;
                if (!input) return;
                input.blur();
            }
        },
        {
            key: "navigate",
            value: function navigate(param) {
                var e = param.e, input = param.input, left = param.left, right = param.right, up = param.up, down = param.down;
                var _this = this;
                var grid = this.state.searchResults || this.grid;
                if (!grid.length) return;
                var _pos = $d6ed1bc06105b202$export$2e2bcd8739ae039(this.state.pos, 2), p1 = _pos[0], p2 = _pos[1];
                var pos = function() {
                    if (p1 == 0) {
                        if (p2 == 0 && !e.repeat && (left || up)) return null;
                    }
                    if (p1 == -1) {
                        if (!e.repeat && (right || down) && input.selectionStart == input.value.length) return [
                            0,
                            0
                        ];
                        return null;
                    }
                    if (left || right) {
                        var row = grid[p1];
                        var increment = left ? -1 : 1;
                        p2 += increment;
                        if (!row[p2]) {
                            p1 += increment;
                            row = grid[p1];
                            if (!row) {
                                p1 = left ? 0 : grid.length - 1;
                                p2 = left ? 0 : grid[p1].length - 1;
                                return [
                                    p1,
                                    p2
                                ];
                            }
                            p2 = left ? row.length - 1 : 0;
                        }
                        return [
                            p1,
                            p2
                        ];
                    }
                    if (up || down) {
                        p1 += up ? -1 : 1;
                        var row2 = grid[p1];
                        if (!row2) {
                            p1 = up ? 0 : grid.length - 1;
                            p2 = up ? 0 : grid[p1].length - 1;
                            return [
                                p1,
                                p2
                            ];
                        }
                        if (!row2[p2]) p2 = row2.length - 1;
                        return [
                            p1,
                            p2
                        ];
                    }
                }();
                if (pos) e.preventDefault();
                else {
                    if (this.state.pos[0] > -1) this.setState({
                        pos: [
                            -1,
                            -1
                        ]
                    });
                    return;
                }
                this.setState({
                    pos: pos,
                    keyboard: true
                }, function() {
                    _this.scrollTo({
                        row: pos[0]
                    });
                });
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(param) {
                var categoryId = param.categoryId, row = param.row;
                var grid = this.state.searchResults || this.grid;
                if (!grid.length) return;
                var scroll = this.refs.scroll.current;
                var scrollRect = scroll.getBoundingClientRect();
                var scrollTop = 0;
                if (row >= 0) categoryId = grid[row].__categoryId;
                if (categoryId) {
                    var ref = this.refs[categoryId] || this.refs.categories.get(categoryId).root;
                    var categoryRect = ref.current.getBoundingClientRect();
                    scrollTop = categoryRect.top - (scrollRect.top - scroll.scrollTop) + 1;
                }
                if (row >= 0) {
                    if (!row) scrollTop = 0;
                    else {
                        var rowIndex = grid[row].__index;
                        var rowTop = scrollTop + rowIndex * this.props.emojiButtonSize;
                        var rowBot = rowTop + this.props.emojiButtonSize + this.props.emojiButtonSize * 0.88;
                        if (rowTop < scroll.scrollTop) scrollTop = rowTop;
                        else if (rowBot > scroll.scrollTop + scrollRect.height) scrollTop = rowBot - scrollRect.height;
                        else return;
                    }
                }
                this.ignoreMouse();
                scroll.scrollTop = scrollTop;
            }
        },
        {
            key: "ignoreMouse",
            value: function ignoreMouse() {
                var _this = this;
                this.mouseIsIgnored = true;
                clearTimeout(this.ignoreMouseTimer);
                this.ignoreMouseTimer = setTimeout(function() {
                    delete _this.mouseIsIgnored;
                }, 100);
            }
        },
        {
            key: "handleEmojiOver",
            value: function handleEmojiOver(pos) {
                if (this.mouseIsIgnored || this.state.showSkins) return;
                this.setState({
                    pos: pos || [
                        -1,
                        -1
                    ],
                    keyboard: false
                });
            }
        },
        {
            key: "handleEmojiClick",
            value: function handleEmojiClick(param) {
                var emoji = param.emoji, pos = param.pos;
                if (!this.props.onEmojiSelect) return;
                if (!emoji && pos) emoji = this.getEmojiByPos(pos);
                if (emoji) {
                    var emojiData = $98790827c4982bdf$export$d10ac59fbe52a745(emoji, {
                        skinIndex: this.state.skin - 1
                    });
                    if (this.props.maxFrequentRows) $26c4208b83093c27$export$2e2bcd8739ae039.add(emojiData, this.props);
                    this.props.onEmojiSelect(emojiData);
                }
            }
        },
        {
            key: "closeSkins",
            value: function closeSkins() {
                if (!this.state.showSkins) return;
                this.setState({
                    showSkins: null,
                    tempSkin: null
                });
                this.base.removeEventListener('click', this.handleBaseClick);
                this.base.removeEventListener('keydown', this.handleBaseKeydown);
            }
        },
        {
            key: "handleSkinMouseOver",
            value: function handleSkinMouseOver(tempSkin) {
                this.setState({
                    tempSkin: tempSkin
                });
            }
        },
        {
            key: "handleSkinClick",
            value: function handleSkinClick(skin) {
                this.ignoreMouse();
                this.closeSkins();
                this.setState({
                    skin: skin,
                    tempSkin: null
                });
                if (this.props.onSkinSelect) this.props.onSkinSelect(skin);
                else $642db0546df88ad7$export$2e2bcd8739ae039.set('skin', skin);
            }
        },
        {
            key: "renderNav",
            value: function renderNav() {
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($14f6fe4cf86a9151$export$2e2bcd8739ae039, {
                    ref: this.refs.navigation,
                    icons: this.props.icons,
                    theme: this.state.theme,
                    unfocused: !!this.state.searchResults,
                    position: this.props.navPosition,
                    onClick: this.handleCategoryClick
                }, this.navKey));
            }
        },
        {
            key: "renderPreview",
            value: function renderPreview() {
                var emoji = this.getEmojiByPos(this.state.pos);
                var noSearchResults = this.state.searchResults && !this.state.searchResults.length;
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    id: "preview",
                    class: "flex flex-middle",
                    dir: this.dir,
                    "data-position": this.props.previewPosition,
                    children: [
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            class: "flex flex-middle flex-grow",
                            children: [
                                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                    class: "flex flex-auto flex-middle flex-center",
                                    style: {
                                        height: this.props.emojiButtonSize,
                                        fontSize: this.props.emojiButtonSize
                                    },
                                    children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($77ce92f400311234$export$2e2bcd8739ae039, {
                                        emoji: emoji,
                                        id: noSearchResults ? this.props.noResultsEmoji || 'cry' : this.props.previewEmoji || (this.props.previewPosition == 'top' ? 'point_down' : 'point_up'),
                                        set: this.props.set,
                                        size: this.props.emojiButtonSize,
                                        skin: this.state.tempSkin || this.state.skin,
                                        spritesheet: true,
                                        getSpritesheetURL: this.props.getSpritesheetURL
                                    })
                                }),
                                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                    class: "margin-".concat(this.dir[0]),
                                    children: emoji ? /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                        class: "padding-".concat(this.dir[2], " align-").concat(this.dir[0]),
                                        children: [
                                            /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                                class: "ellipsis",
                                                style: {
                                                    fontSize: '1.1em'
                                                },
                                                children: emoji.name
                                            }),
                                            /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                                class: "ellipsis color-c",
                                                style: {
                                                    fontSize: '.9em'
                                                },
                                                children: emoji.skins[0].shortcodes
                                            })
                                        ]
                                    }) : noSearchResults ? /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                        class: "padding-".concat(this.dir[2], " align-").concat(this.dir[0]),
                                        children: [
                                            /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                                class: "ellipsis",
                                                style: {
                                                    fontSize: '1.1em'
                                                },
                                                children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.search_no_results_1
                                            }),
                                            /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                                class: "ellipsis color-c",
                                                style: {
                                                    fontSize: '.9em'
                                                },
                                                children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.search_no_results_2
                                            })
                                        ]
                                    }) : /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                        class: "color-c",
                                        style: {
                                            fontSize: 21
                                        },
                                        children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.pick
                                    })
                                })
                            ]
                        }),
                        !emoji && this.props.skinTonePosition == 'preview' && this.renderSkinToneButton()
                    ]
                }));
            }
        },
        {
            key: "renderEmojiButton",
            value: function renderEmojiButton(emoji, param) {
                var pos = param.pos, posinset = param.posinset, grid = param.grid;
                var _this = this;
                var size = this.props.emojiButtonSize;
                var skin = this.state.tempSkin || this.state.skin;
                var emojiSkin = emoji.skins[skin - 1] || emoji.skins[0];
                var native = emojiSkin.native;
                var selected = $98790827c4982bdf$export$9cb4719e2e525b7a(this.state.pos, pos);
                var key = pos.concat(emoji.id).join('');
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($e12a0ebddac53324$export$2e2bcd8739ae039, {
                    selected: selected,
                    skin: skin,
                    size: size,
                    children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("button", {
                        "aria-label": native,
                        "aria-selected": selected || undefined,
                        "aria-posinset": posinset,
                        "aria-setsize": grid.setsize,
                        "data-keyboard": this.state.keyboard,
                        title: this.props.previewPosition == 'none' ? emoji.name : undefined,
                        type: "button",
                        class: "flex flex-center flex-middle",
                        tabindex: "-1",
                        onClick: function() {
                            return _this.handleEmojiClick({
                                emoji: emoji
                            });
                        },
                        onMouseEnter: function() {
                            return _this.handleEmojiOver(pos);
                        },
                        onMouseLeave: function() {
                            return _this.handleEmojiOver();
                        },
                        style: {
                            width: this.props.emojiButtonSize,
                            height: this.props.emojiButtonSize,
                            fontSize: this.props.emojiSize,
                            lineHeight: 0
                        },
                        children: [
                            /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                "aria-hidden": "true",
                                class: "background",
                                style: {
                                    borderRadius: this.props.emojiButtonRadius,
                                    backgroundColor: this.props.emojiButtonColors ? this.props.emojiButtonColors[(posinset - 1) % this.props.emojiButtonColors.length] : undefined
                                }
                            }),
                            /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($77ce92f400311234$export$2e2bcd8739ae039, {
                                emoji: emoji,
                                set: this.props.set,
                                size: this.props.emojiSize,
                                skin: skin,
                                spritesheet: true,
                                getSpritesheetURL: this.props.getSpritesheetURL
                            })
                        ]
                    })
                }, key));
            }
        },
        {
            key: "renderSearch",
            value: function renderSearch() {
                var renderSkinTone = this.props.previewPosition == 'none' || this.props.skinTonePosition == 'search';
                var _searchInputRef;
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    children: [
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            class: "spacer"
                        }),
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            class: "flex flex-middle",
                            children: [
                                renderSkinTone && this.dir == 'rtl' && this.renderSkinToneButton(),
                                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                    class: "search relative flex-grow",
                                    children: [
                                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("input", {
                                            type: "search",
                                            ref: (_searchInputRef = this.props.searchInputRef) !== null && _searchInputRef !== void 0 ? _searchInputRef : this.refs.searchInput,
                                            placeholder: $b79b4feb8fc394aa$export$dbe3113d60765c1a.search,
                                            onClick: this.handleSearchClick,
                                            onInput: this.handleSearchInput,
                                            onKeyDown: this.handleSearchKeyDown,
                                            autoComplete: "off"
                                        }),
                                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
                                            class: "icon loupe flex",
                                            children: $e0de45cc3cbe7f1d$export$2e2bcd8739ae039.search.loupe
                                        }),
                                        this.state.searchResults && /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("button", {
                                            title: "Clear",
                                            "aria-label": "Clear",
                                            type: "button",
                                            class: "icon delete flex",
                                            onClick: this.clearSearch,
                                            onMouseDown: this.preventDefault,
                                            children: $e0de45cc3cbe7f1d$export$2e2bcd8739ae039.search.delete
                                        })
                                    ]
                                }),
                                renderSkinTone && this.dir == 'ltr' && this.renderSkinToneButton()
                            ]
                        })
                    ]
                }));
            }
        },
        {
            key: "renderSearchResults",
            value: function renderSearchResults() {
                var _this = this;
                var searchResults = this.state.searchResults;
                if (!searchResults) return null;
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    class: "category",
                    ref: this.refs.search,
                    children: [
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            class: "sticky padding-small align-".concat(this.dir[0]),
                            children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.categories.search
                        }),
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            children: !searchResults.length ? /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                class: "padding-small align-".concat(this.dir[0]),
                                children: this.props.onAddCustomEmoji && /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("a", {
                                    onClick: this.props.onAddCustomEmoji,
                                    children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.add_custom
                                })
                            }) : searchResults.map(function(row, i) {
                                var _this1 = _this;
                                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                    class: "flex",
                                    children: row.map(function(emoji, ii) {
                                        return _this1.renderEmojiButton(emoji, {
                                            pos: [
                                                i,
                                                ii
                                            ],
                                            posinset: i * _this1.props.perLine + ii + 1,
                                            grid: searchResults
                                        });
                                    })
                                }));
                            })
                        })
                    ]
                }));
            }
        },
        {
            key: "renderCategories",
            value: function renderCategories() {
                var _this3 = this;
                var categories = $b79b4feb8fc394aa$export$2d0294657ab35f1b.categories;
                var hidden = !!this.state.searchResults;
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    style: {
                        visibility: hidden ? 'hidden' : undefined,
                        display: hidden ? 'none' : undefined
                    },
                    children: categories.map(function(category) {
                        var _this2 = _this3;
                        var ref4 = _this3.refs.categories.get(category.id), root = ref4.root, rows = ref4.rows;
                        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            "data-id": category.target ? category.target.id : category.id,
                            class: "category",
                            ref: root,
                            children: [
                                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                    class: "sticky padding-small align-".concat(_this3.dir[0]),
                                    children: category.name || $b79b4feb8fc394aa$export$dbe3113d60765c1a.categories[category.id]
                                }),
                                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                    class: "relative",
                                    style: {
                                        height: rows.length * _this3.props.emojiButtonSize
                                    },
                                    children: rows.map(function(row, i) {
                                        var _this = _this2;
                                        var targetRow = row.index - row.index % $1221208eb78d1324$var$Performance.rowsPerRender;
                                        var visible = _this2.state.visibleRows[targetRow];
                                        var ref = 'current' in row ? row : undefined;
                                        if (!visible && !ref) return null;
                                        var start = i * _this2.props.perLine;
                                        var end = start + _this2.props.perLine;
                                        var emojiIds = category.emojis.slice(start, end);
                                        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                            "data-index": row.index,
                                            ref: ref,
                                            class: "flex row",
                                            style: {
                                                top: i * _this2.props.emojiButtonSize
                                            },
                                            children: visible && emojiIds.map(function(emojiId, ii) {
                                                var emoji = $8f9034744078e207$export$2e2bcd8739ae039.get(emojiId);
                                                return _this.renderEmojiButton(emoji, {
                                                    pos: [
                                                        row.index,
                                                        ii
                                                    ],
                                                    posinset: row.posinset + ii,
                                                    grid: _this.grid
                                                });
                                            })
                                        }, row.index));
                                    })
                                })
                            ]
                        }));
                    })
                }));
            }
        },
        {
            key: "renderSkinToneIcon",
            value: function renderSkinToneIcon(skin) {
                if (this.props.skinToneEmoji) return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($77ce92f400311234$export$2e2bcd8739ae039, {
                    id: this.props.skinToneEmoji,
                    set: this.props.set,
                    size: this.props.emojiSize,
                    skin: skin,
                    spritesheet: true,
                    getSpritesheetURL: this.props.getSpritesheetURL
                }));
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
                    class: "skin-tone skin-tone-".concat(skin)
                }));
            }
        },
        {
            key: "renderSkinToneButton",
            value: function renderSkinToneButton() {
                if (this.props.skinTonePosition == 'none') return null;
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    class: "flex flex-auto flex-center flex-middle",
                    style: {
                        position: 'relative',
                        width: this.props.skinToneLabel ? 'auto' : this.props.emojiButtonSize,
                        height: this.props.skinToneLabel ? 'auto' : this.props.emojiButtonSize
                    },
                    children: [
                        this.props.skinToneLabel && /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
                            class: "skin-tone-button-label",
                            children: this.props.skinToneLabel
                        }),
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("button", {
                            type: "button",
                            part: "skin-tone-button",
                            ref: this.refs.skinToneButton,
                            class: "skin-tone-button flex flex-auto flex-center flex-middle",
                            "aria-selected": this.state.showSkins ? '' : undefined,
                            "aria-label": $b79b4feb8fc394aa$export$dbe3113d60765c1a.skins.choose,
                            title: $b79b4feb8fc394aa$export$dbe3113d60765c1a.skins.choose,
                            onClick: this.openSkins,
                            style: {
                                width: this.props.emojiSize,
                                height: this.props.emojiSize
                            },
                            children: this.renderSkinToneIcon(this.state.skin)
                        })
                    ]
                }));
            }
        },
        {
            key: "renderLiveRegion",
            value: function renderLiveRegion() {
                var emoji = this.getEmojiByPos(this.state.pos);
                var contents = emoji ? emoji.name : '';
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    "aria-live": "polite",
                    class: "sr-only",
                    children: contents
                }));
            }
        },
        {
            key: "renderSkins",
            value: function renderSkins() {
                var _this = this;
                var skinToneButton = this.refs.skinToneButton.current;
                var skinToneButtonRect = skinToneButton.getBoundingClientRect();
                var baseRect = this.base.getBoundingClientRect();
                var position = {
                };
                if (this.dir == 'ltr') position.right = baseRect.right - skinToneButtonRect.right - 3;
                else position.left = skinToneButtonRect.left - baseRect.left - 3;
                if (this.props.previewPosition == 'bottom' && this.props.skinTonePosition == 'preview') position.bottom = baseRect.bottom - skinToneButtonRect.top + 6;
                else {
                    position.top = skinToneButtonRect.bottom - baseRect.top + 3;
                    position.bottom = 'auto';
                }
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                    ref: this.refs.menu,
                    role: "radiogroup",
                    dir: this.dir,
                    "aria-label": $b79b4feb8fc394aa$export$dbe3113d60765c1a.skins.choose,
                    class: "menu hidden",
                    "data-position": position.top ? 'top' : 'bottom',
                    style: position,
                    children: $ca7087421909e81d$export$2e2bcd8739ae039(Array(6).keys()).map(function(i) {
                        var _this4 = _this;
                        var skin = i + 1;
                        var checked = _this.state.skin == skin;
                        return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            children: [
                                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("input", {
                                    type: "radio",
                                    name: "skin-tone",
                                    value: skin,
                                    "aria-label": $b79b4feb8fc394aa$export$dbe3113d60765c1a.skins[skin],
                                    ref: checked ? _this.refs.skinToneRadio : null,
                                    defaultChecked: checked,
                                    onChange: function() {
                                        return _this4.handleSkinMouseOver(skin);
                                    },
                                    onKeyDown: function(e) {
                                        if (e.code == 'Enter' || e.code == 'Space' || e.code == 'Tab') {
                                            e.preventDefault();
                                            _this4.handleSkinClick(skin);
                                        }
                                    }
                                }),
                                /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("button", {
                                    "aria-hidden": "true",
                                    tabindex: "-1",
                                    onClick: function() {
                                        return _this4.handleSkinClick(skin);
                                    },
                                    onMouseEnter: function() {
                                        return _this4.handleSkinMouseOver(skin);
                                    },
                                    onMouseLeave: function() {
                                        return _this4.handleSkinMouseOver();
                                    },
                                    class: "option flex flex-grow flex-middle",
                                    children: [
                                        _this.renderSkinToneIcon(skin),
                                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("span", {
                                            class: "margin-small-lr",
                                            children: $b79b4feb8fc394aa$export$dbe3113d60765c1a.skins[skin]
                                        })
                                    ]
                                })
                            ]
                        }));
                    })
                }));
            }
        },
        {
            key: "render",
            value: function render() {
                return(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("section", {
                    id: "root",
                    part: "root",
                    class: "flex flex-column",
                    style: {
                        width: this.props.perLine * this.props.emojiButtonSize + 28
                    },
                    "data-emoji-set": this.props.set,
                    "data-theme": this.state.theme,
                    "data-menu": this.state.showSkins ? '' : undefined,
                    children: [
                        this.props.previewPosition == 'top' && this.renderPreview(),
                        this.props.navPosition == 'top' && this.renderNav(),
                        this.props.searchPosition == 'sticky' && /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            class: "padding-lr",
                            children: this.renderSearch()
                        }),
                        /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                            ref: this.refs.scroll,
                            class: "scroll flex-grow padding-lr",
                            children: /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                style: {
                                    width: this.props.perLine * this.props.emojiButtonSize
                                },
                                children: [
                                    this.props.searchPosition == 'static' && this.renderSearch(),
                                    this.renderSearchResults(),
                                    this.renderCategories(),
                                    /*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b("div", {
                                        class: "spacer"
                                    })
                                ]
                            })
                        }),
                        this.props.navPosition == 'bottom' && this.renderNav(),
                        this.props.previewPosition == 'bottom' && this.renderPreview(),
                        this.state.showSkins && this.renderSkins(),
                        this.renderLiveRegion()
                    ]
                }));
            }
        }
    ]);
    return $1221208eb78d1324$export$2e2bcd8739ae039;
}($d5fc6ac583bc94a1$export$16fa2f45be04daa8);










var $7be3f6ba01507d21$export$2e2bcd8739ae039 = /*#__PURE__*/ function(ShadowElement) {
    "use strict";
    $429f412a5e3c4d49$export$2e2bcd8739ae039($7be3f6ba01507d21$export$2e2bcd8739ae039, ShadowElement);
    var _super = $36345c11dd10297b$export$2e2bcd8739ae039($7be3f6ba01507d21$export$2e2bcd8739ae039);
    function $7be3f6ba01507d21$export$2e2bcd8739ae039(props) {
        $c79c945e654c9102$export$2e2bcd8739ae039(this, $7be3f6ba01507d21$export$2e2bcd8739ae039);
        return _super.call(this, props, {
            styles: (/*@__PURE__*/$parcel$interopDefault($a054c16aa3011bcd$exports))
        });
    }
    $22c4dbb765f86cca$export$2e2bcd8739ae039($7be3f6ba01507d21$export$2e2bcd8739ae039, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this = this;
                return $22bbea2e4f5d5dfd$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).mark(function _callee() {
                    var props;
                    return (/*@__PURE__*/$parcel$interopDefault($f5fc4923ef4118c4$exports)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                props = $b79b4feb8fc394aa$export$75fe5f91d452f94b(this.props, $6191713a0c89d01b$export$2e2bcd8739ae039, this);
                                props.element = this;
                                props.ref = function(component) {
                                    _this.component = component;
                                };
                                _ctx.next = 5;
                                return $b79b4feb8fc394aa$export$2cd8252107eb640b(props);
                            case 5:
                                $d5fc6ac583bc94a1$export$b3890eb0ae9dca99(/*#__PURE__*/ $55ec52987511209e$export$34b9dba7ce09269b($1221208eb78d1324$export$2e2bcd8739ae039, $a5d09c5d3015221e$export$2e2bcd8739ae039({
                                }, props)), this.shadowRoot);
                            case 6:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this);
                }).bind(this))();
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                if (this.component) this.component.unregister();
            }
        }
    ]);
    return $7be3f6ba01507d21$export$2e2bcd8739ae039;
}($327e158bf6bab5e8$export$2e2bcd8739ae039);
$1459522e281add88$export$2e2bcd8739ae039($7be3f6ba01507d21$export$2e2bcd8739ae039, "Props", $6191713a0c89d01b$export$2e2bcd8739ae039);
if (typeof customElements !== 'undefined' && !customElements.get('em-emoji-picker')) customElements.define('em-emoji-picker', $7be3f6ba01507d21$export$2e2bcd8739ae039);


var $a054c16aa3011bcd$exports = {};
$a054c16aa3011bcd$exports = ":host {\n  display: flex;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  height: 435px;\n  min-height: 230px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  --border-radius: 10px;\n  --category-icon-size: 18px;\n  --font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n  --font-size: 15px;\n  --shadow-color: 0deg 0% 0%;\n  --shadow:\n    0.3px 0.5px 2.7px hsl(var(--shadow-color) / 0.14),\n    0.4px 0.8px 1px -3.2px hsl(var(--shadow-color) / 0.14),\n    1px 2px 2.5px -4.5px hsl(var(--shadow-color) / 0.14);\n}\n\n[data-theme=light] {\n  --em-rgb-color: var(--rgb-color, 34, 36, 39);\n  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);\n  --em-rgb-background: var(--rgb-background, 255, 255, 255);\n  --em-rgb-input: var(--rgb-input, 255, 255, 255);\n  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));\n  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));\n}\n\n[data-theme=dark] {\n  --em-rgb-color: var(--rgb-color, 222, 222, 221);\n  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);\n  --em-rgb-background: var(--rgb-background, 21, 22, 23);\n  --em-rgb-input: var(--rgb-input, 0, 0, 0);\n  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));\n  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));\n}\n\n#root {\n  --color-a: rgb(var(--em-rgb-color));\n  --color-b: rgba(var(--em-rgb-color), .65);\n  --color-c: rgba(var(--em-rgb-color), .45);\n  --padding: 12px;\n  --padding-small: calc(var(--padding) / 2);\n  --sidebar-width: 16px;\n  --duration: 225ms;\n  --duration-fast: 125ms;\n  --duration-instant: 50ms;\n  --easing: cubic-bezier(.4, .0, .2, 1);\n  position: relative;\n  width: 100%;\n  text-align: left;\n  border-radius: var(--border-radius);\n  background-color: rgb(var(--em-rgb-background));\n}\n\n@media (prefers-reduced-motion) {\n  #root {\n    --duration: 0;\n    --duration-fast: 0;\n    --duration-instant: 0;\n  }\n}\n\n#root[data-menu] button {\n  cursor: auto;\n}\n\n#root[data-menu] .menu button {\n  cursor: pointer;\n}\n\n:host, #root, input, button {\n  color: rgb(var(--em-rgb-color));\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n*, *:before, *:after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  min-width: 0;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-auto {\n  flex: 0 0 auto;\n}\n\n.flex-center {\n  justify-content: center;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-grow {\n  flex: 1 1 auto;\n}\n\n.flex-middle {\n  align-items: center;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.padding {\n  padding: var(--padding);\n}\n\n.padding-t {\n  padding-top: var(--padding);\n}\n\n.padding-lr {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.padding-r {\n  padding-right: var(--padding);\n}\n\n.padding-small {\n  padding: var(--padding-small);\n}\n\n.padding-small-b {\n  padding-bottom: var(--padding-small);\n}\n\n.padding-small-lr {\n  padding-left: var(--padding-small);\n  padding-right: var(--padding-small);\n}\n\n.margin {\n  margin: var(--padding);\n}\n\n.margin-r {\n  margin-right: var(--padding);\n}\n\n.margin-l {\n  margin-left: var(--padding);\n}\n\n.margin-small-l {\n  margin-left: var(--padding-small);\n}\n\n.margin-small-lr {\n  margin-left: var(--padding-small);\n  margin-right: var(--padding-small);\n}\n\n.align-l {\n  text-align: left;\n}\n\n.align-r {\n  text-align: right;\n}\n\n.color-a {\n  color: var(--color-a);\n}\n\n.color-b {\n  color: var(--color-b);\n}\n\n.color-c {\n  color: var(--color-c);\n}\n\n.ellipsis {\n  white-space: nowrap;\n  max-width: 100%;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sr-only {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\na {\n  cursor: pointer;\n  color: rgb(var(--em-rgb-accent));\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  height: 10px;\n}\n\n.scroll {\n  overflow: auto;\n  overflow-x: hidden;\n  padding-right: 0;\n}\n\n.scroll::-webkit-scrollbar {\n  width: var(--sidebar-width);\n  height: var(--sidebar-width);\n}\n\n.scroll::-webkit-scrollbar-track {\n  border: 0;\n}\n\n.scroll::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n.scroll::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n.scroll::-webkit-scrollbar-thumb {\n  min-height: 20%;\n  min-height: 65px;\n  border: 4px solid rgb(var(--em-rgb-background));\n  border-radius: 8px;\n}\n\n.scroll::-webkit-scrollbar-thumb:hover {\n  background-color: var(--em-color-border-over) !important;\n}\n\n.scroll:hover::-webkit-scrollbar-thumb {\n  background-color: var(--em-color-border);\n}\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  top: -1px;\n  font-weight: 500;\n  background-color: rgba(var(--em-rgb-background), 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.search {\n  z-index: 2;\n  position: relative;\n}\n\n.search input, .search button {\n  font-size: calc(var(--font-size) - 1px);\n}\n\n.search input[type=search] {\n  display: block;\n  border: 0;\n  outline: 0;\n  width: 100%;\n  padding: 10px 2em 10px 2.2em;\n  border-radius: 10px;\n  background-color: var(--em-color-border);\n  transition-duration: var(--duration);\n  transition-property: background-color, box-shadow;\n  transition-timing-function: var(--easing);\n}\n\n.search input[type=search]::-moz-placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search]:-ms-input-placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search]::placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search], .search input[type=search]::-webkit-search-decoration, .search input[type=search]::-webkit-search-cancel-button, .search input[type=search]::-webkit-search-results-button, .search input[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n          appearance: none;\n}\n\n.search input[type=search]:focus {\n  background-color: rgb(var(--em-rgb-input));\n  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, 0.2);\n}\n\n.search .icon {\n  z-index: 1;\n  position: absolute;\n  top: 50%;\n  color: rgba(var(--em-rgb-color), 0.7);\n  transform: translateY(-50%);\n}\n\n.search .loupe {\n  left: 0.7em;\n  pointer-events: none;\n}\n\n.search .delete {\n  right: 0.7em;\n}\n\nsvg {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  color: currentColor;\n  border: 0;\n  background-color: transparent;\n}\n\n#nav {\n  z-index: 2;\n  position: relative;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: var(--sidebar-width);\n}\n\n#nav button {\n  color: var(--color-b);\n  transition: color var(--duration) var(--easing);\n}\n\n#nav button:hover {\n  color: var(--color-a);\n}\n\n#nav svg, #nav img {\n  width: var(--category-icon-size);\n  height: var(--category-icon-size);\n}\n\n#nav .bar {\n  position: absolute;\n  bottom: -12px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: rgb(var(--em-rgb-accent));\n  border-radius: 3px 3px 0 0;\n  transition: transform var(--duration) var(--easing);\n}\n\n#nav button[aria-selected] {\n  color: rgb(var(--em-rgb-accent));\n}\n\n#preview {\n  z-index: 2;\n  position: relative;\n  padding: calc(var(--padding) + 4px) var(--padding);\n  padding-right: var(--sidebar-width);\n}\n\n#nav:before, #preview:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 2px;\n}\n\n#nav[data-position=top]:before, #preview[data-position=top]:before {\n  top: 100%;\n  background: linear-gradient(to bottom, var(--em-color-border), transparent);\n}\n\n#nav[data-position=bottom]:before, #preview[data-position=bottom]:before {\n  bottom: 100%;\n  background: linear-gradient(to top, var(--em-color-border), transparent);\n}\n\n.category button {\n  position: relative;\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n}\n\n.category button > * {\n  position: relative;\n}\n\n.category button .background {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  background-color: var(--em-color-border);\n  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);\n}\n\n.category button:hover .background {\n  transition-duration: var(--duration-instant);\n  transition-delay: 0ms;\n}\n\n.category button[aria-selected] .background {\n  opacity: 1;\n}\n\n.category button[data-keyboard] .background {\n  transition: none;\n}\n\n.row {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.skin-tone-button-label {\n  font-size: 9px;\n  margin-right: 5px;\n  color: #828282;\n}\n\n.skin-tone-button {\n  border-radius: 100%;\n  border: 1px solid transparent;\n}\n\n.skin-tone-button:hover {\n  border-color: var(--em-color-border);\n}\n\n.skin-tone-button:active .skin-tone {\n  transform: scale(0.85) !important;\n}\n\n.skin-tone-button .skin-tone {\n  transition: transform var(--duration) var(--easing);\n}\n\n.skin-tone-button[aria-selected] {\n  border-left-width: 0;\n  border-right-width: 0;\n  border-top-color: rgba(0, 0, 0, 0.05);\n  border-bottom-color: transparent;\n  background-color: var(--em-color-border);\n}\n\n.skin-tone-button[aria-selected] .skin-tone {\n  transform: scale(0.9);\n}\n\n.menu {\n  z-index: 2;\n  position: absolute;\n  white-space: nowrap;\n  padding: 4px;\n  border: 1px solid var(--em-color-border);\n  background-color: rgba(var(--em-rgb-background), 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);\n  transition-property: opacity, transform;\n  transition-duration: var(--duration);\n  transition-timing-function: var(--easing);\n}\n\n.menu.hidden {\n  opacity: 0;\n}\n\n.menu[data-position=bottom] {\n  transform-origin: bottom right;\n}\n\n.menu[data-position=bottom].hidden {\n  transform: scale(0.9) rotate(-3deg) translateY(5%);\n}\n\n.menu[data-position=top] {\n  transform-origin: top right;\n}\n\n.menu[data-position=top].hidden {\n  transform: scale(0.9) rotate(3deg) translateY(-5%);\n}\n\n.menu input[type=radio] {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n.menu input[type=radio]:checked + .option {\n  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));\n}\n\n.option {\n  width: 100%;\n  padding: 4px 6px;\n  border-radius: 6px;\n}\n\n.option:hover {\n  color: #fff;\n  background-color: rgb(var(--em-rgb-accent));\n}\n\n.skin-tone {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\n.skin-tone:after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  mix-blend-mode: overlay;\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent);\n}\n\n.skin-tone-1 {\n  background-color: #ffc93a;\n}\n\n.skin-tone-2 {\n  background-color: #ffdab7;\n}\n\n.skin-tone-3 {\n  background-color: #e7b98f;\n}\n\n.skin-tone-4 {\n  background-color: #c88c61;\n}\n\n.skin-tone-5 {\n  background-color: #a46134;\n}\n\n.skin-tone-6 {\n  background-color: #5d4437;\n}\n\n[data-emoji-set=twitter] .skin-tone:after {\n  border-color: rgba(0, 0, 0, 0.5);\n  box-shadow: none;\n}\n\n[data-emoji-set=twitter] .skin-tone-1 {\n  background-color: #FADE72;\n}\n\n[data-emoji-set=twitter] .skin-tone-2 {\n  background-color: #F3DFD0;\n}\n\n[data-emoji-set=twitter] .skin-tone-3 {\n  background-color: #EED3A8;\n}\n\n[data-emoji-set=twitter] .skin-tone-4 {\n  background-color: #CFAD8D;\n}\n\n[data-emoji-set=twitter] .skin-tone-5 {\n  background-color: #A8805D;\n}\n\n[data-emoji-set=twitter] .skin-tone-6 {\n  background-color: #765542;\n}\n\n[data-emoji-set=google] .skin-tone:after {\n  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.4);\n}\n\n[data-emoji-set=google] .skin-tone-1 {\n  background-color: #F5C748;\n}\n\n[data-emoji-set=google] .skin-tone-2 {\n  background-color: #F1D5AA;\n}\n\n[data-emoji-set=google] .skin-tone-3 {\n  background-color: #D4B48D;\n}\n\n[data-emoji-set=google] .skin-tone-4 {\n  background-color: #AA876B;\n}\n\n[data-emoji-set=google] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=google] .skin-tone-6 {\n  background-color: #61493F;\n}\n\n[data-emoji-set=facebook] .skin-tone:after {\n  border-color: rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;\n}\n\n[data-emoji-set=facebook] .skin-tone-1 {\n  background-color: #F5C748;\n}\n\n[data-emoji-set=facebook] .skin-tone-2 {\n  background-color: #F1D5AA;\n}\n\n[data-emoji-set=facebook] .skin-tone-3 {\n  background-color: #D4B48D;\n}\n\n[data-emoji-set=facebook] .skin-tone-4 {\n  background-color: #AA876B;\n}\n\n[data-emoji-set=facebook] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=facebook] .skin-tone-6 {\n  background-color: #61493F;\n}\n";










//# sourceMappingURL=main.js.map
