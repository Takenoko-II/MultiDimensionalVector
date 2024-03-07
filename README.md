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

#### static constructor
```ts
constructor(x: number, y: number);

constructor(x: number, y: number, z: number);

constructor(vector: [number, number]);

constructor(vector: [number, number, number]);

constructor(vector: Vector2);

constructor(vector: Vector3);

constructor(dimensionSize: number);
```

#### static from
constructorと全く同じです
```ts
from(略): MultiDimensionalVector;
```

#### static isVector
Vector2かVector3の値が渡されるとtrueを返します
```ts
isVector(value: any): boolean;
```

#### static isVector2
Vector2の値が渡されるとtrueを返します
```ts
isVector(value: any): boolean;
```

#### static isVector3
Vector3の値が渡されるとtrueを返します
```ts
isVector(value: any): boolean;
```

#### static getDirectionFromRotation
渡されたVector2を回転とみなし、その向きの三次元単位ベクトルを返します
```ts
getDirectionFromRotation(rotation: Vector2): MultiDimensionalVector;
```

#### static onCircumference
三次元空間上の円を作り、円周上の座標を取得します
```ts
onCircumference(わすれた): MultiDimensionalVector;
```
