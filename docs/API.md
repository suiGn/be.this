# Understanding File Structure in .me libraries

```text
your-library-name/  (root)
│
├── src/            (source code)
│   ├── index.js
│   ├── moduleA.js
│   └── moduleB.js
│
├── dist/           (built artifacts)
│   ├── your-library-name.js
│   └── your-library-name.min.js
│
├── docs/           (documentation)
│   └── API.md
│
├── tests/          (tests)
│   ├── moduleA.test.js
│   └── moduleB.test.js
│
├── package.json    (npm package descriptor)
├── README.md       (project readme)
└── main.js         (optional main script, if not using src/index.js)
```

