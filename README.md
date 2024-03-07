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

#### subtract
別のベクトルとの引き算を行い、結果となる新しいベクトルを返します
- subtrahend 引くベクトル
```ts
subtract(subtrahend: number | Vector2 | Vector3 | [number, number] | [number, number, number]): MultiDimensionalVector;
```

#### multiply
別のベクトル・数との掛け算を行い、結果となる新しいベクトルを返します
- multiplier 乗数
```ts
multiply(multiplier: number | Vector2 | Vector3 | [number, number] | [number, number, number]): MultiDimensionalVector;
```

#### divide
別のベクトル・数との割り算を行い、結果となる新しいベクトルを返します
- divisor 除数
```ts
divide(divisor: number | Vector2 | Vector3 | [number, number] | [number, number, number]): MultiDimensionalVector;
```

#### pow
別のベクトル・数を指数として冪乗計算を行い、結果となる新しいベクトルを返します
- exponent 指数
```ts
pow(exponent: number | Vector2 | Vector3 | [number, number] | [number, number, number]): MultiDimensionalVector;
```

#### floor
各成分の小数点以下を切り捨てした新しいベクトルを返します
```ts
floor(): MultiDimensionalVector;
```

#### ceil
各成分の小数点以下を切り上げした新しいベクトルを返します
```ts
ceil(): MultiDimensionalVector;
```

### round
各成分の小数点以下を四捨五入した新しいベクトルを返します
```ts
round(): MultiDimensionalVector;
```

#### abs
各成分をその絶対値にしたベクトルを返します。
```ts
abs(): MultiDimensionalVector;
```

#### fill
各成分を指定の値にしたベクトルを返します。
- value 任意の値
```ts
fill(value: number): MultiDimensionalVector;
```

#### dot
別のベクトルとの内積を求めます。
- other ベクトル
```ts
dot(other: Vector2 | Vector3): number;
```
    /**
     * 別のベクトルとの外積を求めます。
     * @param other ベクトル
     */
    cross(other: Vector3): MultiDimensionalVector;

    /**
     * このベクトルの別のベクトルへの射影ベクトルを求めます。
     * @param other ベクトル
     */
    projection(other: Vector2 | Vector3): MultiDimensionalVector;

    /**
     * このベクトルの別のベクトルからの反射影ベクトルを求めます。
     * @param other ベクトル
     */
    rejection(other: Vector2 | Vector3): MultiDimensionalVector;

    /**
     * endを終了位置とし、tを割合とした線形補間を返します。
     * @param end 終了位置
     * @param t 割合
     */
    lerp(end: Vector2 | Vector3, t: number): MultiDimensionalVector;

    /**
     * endを終了位置とし、sを割合とした球面線形補間を返します。
     * @param end 終了位置
     * @param s 割合
     */
    slerp(end: Vector2 | Vector3, s: number): MultiDimensionalVector;

    /**
     * 自身と成分の各値が同じベクトルを返します。
     */
    clone(): MultiDimensionalVector;

    /**
     * 自身をローカル座標のz成分とし、ローカル座標の各成分となる座標を取得します。
     */
    getLocalAxes(): LocalAxes;

    /**
     * 成分の各値を格納した配列を返します。
     */
    toArray(): [number, number] | [number, number, number];

    /**
     * 与えられた関数をベクトルの各成分に対して呼び出し、その結果から新しいベクトルを作成します。
     * @param callbackFn 各成分に対して実行する関数
     */
    map(callbackFn: (component: number, key: "x" | "y" | "z") => number): MultiDimensionalVector;

    /**
     * 与えられた関数をベクトルの各成分に対して呼び出し、その結果から新しいベクトルを作成します。
     * @param components コールバックに分解されて渡される値
     * @param callbackFn 各成分に対して実行する関数
     */
    calc(components: number | Vector2 | Vector3 | [number, number] | [number, number, number], callbackFn: (a: number, b: number) => number): MultiDimensionalVector;

    /**
     * 配列化したベクトルのreduce関数に与えられた関数を渡します。
     * @param callbackFn コールバック関数
     */
    reduce(callbackFn: (previousValue: number, currentValue: number, currentIndex: number, array: [number, number] | [number, number, number]) => number): number;

    /**
     * ベクトルを文字列化します。
     * @param format 形式
     */
    toString(format?: string): string;
