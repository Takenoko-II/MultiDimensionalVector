# MultiDimensionalVector

## MultiDimensionalVector Class

### properties

#### x
x成分
```ts
x: number;
```

#### y
y成分
```ts
y: number;
```

#### z
z成分
```ts
z?: number;
```

#### dimensionSize
次元の大きさに関する情報
```ts
readonly dimensionSize: VectorDimensionSize;
```

### methods

#### static constructor
多次元ベクトルのインスタンスを作成します
- x x成分
- y y成分
- z z成分
- vector ベクトルを表す配列もしくはオブジェクト
- dimensionSize 次元の大きさとなる整数
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
- value 任意の値
```ts
isVector(value: any): boolean;
```

#### static isVector2
Vector2の値が渡されるとtrueを返します
- value 任意の値
```ts
isVector(value: any): boolean;
```

#### static isVector3
Vector3の値が渡されるとtrueを返します
- value 任意の値
```ts
isVector(value: any): boolean;
```

#### static getDirectionFromRotation
渡されたVector2を回転とみなし、その向きの三次元単位ベクトルを返します
- rotation 回転
```ts
getDirectionFromRotation(rotation: Vector2): MultiDimensionalVector;
```

#### static onCircumference
三次元空間上の円を作り、円周上の座標を取得します
- center 円の中心
- axis 円の中心を通り、円に垂直な単位ベクトル
- angle 円の中心から円周上の座標への角度
- radius 円の半径、デフォルト値は1
```ts
onCircumference(center: Vector3, axis: Vector3, angle: number, radius?: number): MultiDimensionalVector;
```

#### static const
定数ベクトルを取得します
- name 各定数ベクトルと紐づけられた名称
```ts
const<T extends keyof ConstantVectorMap>(name: T): ConstantVectorMap[T];
```

#### is
2つのベクトルが等しければtrueを返します
- vector 比較するベクトル
```ts
is(vector: Vector2 | Vector3): boolean;
```

#### isValid
成分にNaNでない数値型以外が含まれているとfalseを返します
```ts
isValid(): boolean;
```

#### getLength
ベクトルの長さを取得します
```ts
getLength(): number;
```

#### setLength
長さを変更した新しいベクトルを返します
デフォルト値は1
- length ベクトルの長さ
```ts
setLength(length?: number): MultiDimensionalVector;
```

#### normalized
正規化(単位ベクトル化)した新しいベクトルを返します
```ts
normalized(): MultiDimensionalVector;
```

#### inverted
向きを逆にした新しいベクトルを返します
```ts
inverted(): MultiDimensionalVector;
```

#### getAngleBetween
別のベクトルと自身がなす角の大きさを返します
```ts
getAngleBetween(other: Vector2 | Vector3): number;
```

#### getDirectionTo
特定の座標への方向となる単位ベクトルを返します
- vector 座標
```ts
getDirectionTo(vector: Vector2 | Vector3): MultiDimensionalVector;
```

#### getDistanceTo
特定の座標との距離を返します
- vector 座標
```ts
getDistanceTo(vector: Vector2 | Vector3): MultiDimensionalVector;
```

#### getRotation
自身の回転を返します
```ts
getRotation(): MultiDimensionalVector;
```

#### add
別のベクトルとの足し算を行い、結果となる新しいベクトルを返します
- addend 足すベクトル
```ts
add(addend: number | [number, number] | [number, number, number] | Vector2 | Vector3): MultiDimensionalVector;
```
