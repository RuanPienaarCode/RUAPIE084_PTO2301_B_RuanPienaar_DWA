DWA_04.3 Knowledge Check_DWA4

---

### 1. Select three rules from the Airbnb Style Guide that you find useful and explain why.

7.6 

7.6 Never use arguments, opt to use rest syntax ... instead. eslint: prefer-rest-params
Why? ... is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like arguments.

```
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}


// good
function concatenateAll(...args) {
  return args.join('');
}
```

7.7 Use default parameter syntax rather than mutating function arguments.

```
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}


// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}


// good
function handleThings(opts = {}) {
  // ...
}
```

7.14 Prefer the use of the spread operator ... to call variadic functions. eslint: prefer-spread
Why? It’s cleaner, you don’t need to supply a context, and you can not easily compose new with apply.

```
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);


// good
const x = [1, 2, 3, 4, 5];
console.log(...x);


// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));


// good
new Date(...[2016, 8, 5]);

```

---

### 2. Select three rules from the Airbnb Style Guide that you find confusing and explain why.

7.9 Always put default parameters last.

```
// bad
function handleThings(opts = {}, name) {
  // ...
}


// good
function handleThings(name, opts = {}) {
  // ...
}
```


3.2 Use computed property names when creating objects with dynamic property names.

Why? They allow you to define all the properties of an object in one place.

```
function getKey(k) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```
3.4 Use property value shorthand. eslint: object-shorthand jscs: requireEnhancedObjectLiterals

Why? It is shorter to write and descriptive.
```
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
```