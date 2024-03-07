# MultiDimensionalVector

## MultiDimensionalVector Class

### properties

- x
```ts
x: number;
```

- y
```ts
y: number;
```

- z
```ts
z?: number | undefined;
```

### methods

- static constructor
```ts
constructor(x: number, y: number);

constructor(x: number, y: number, z: number);

constructor(vector: [number, number]);

constructor(vector: [number, number, number]);

constructor(vector: Vector2);

constructor(vector: Vector3);

constructor(dimensionSize: number);
```
