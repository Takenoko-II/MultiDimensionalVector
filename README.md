# MultiDimensionalVector

minecraftのScriptAPIにおいて三次元の計算のために使用することを想定された以下2つのクラス
- 多次元ベクトル
- 三次元直方体範囲

## MultiDimensionalVector Class

### properties

- [x](#x)
- [y](#y)
- [z](#z)
- [dimensionSize](#dimensionsize)

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

- [static constructor](#static-constructor)
- [static from](#static-from)
- [static isVector](#static-isvector)
- [static isVector2](#static-isvector2)
- [static isVector3](#static-isvector3)
- [static getDirectionFromRotation](#static-getdirectionfromrotation)
- [static onCircumference](#static-oncircumference)
- [static const](#static-const)
- [is](#is)
- [isValid](#isvalid)
- [getLength](#getlength)
- [setLength](#setlength)
- [normalized](#normalized)
- [inverted](#inverted)
- [getAngleBetween](#getanglebetween)
- [getDirectionTo](#getdirectionto)
- [getDistanceTo](#getdistanceto)
- [getRotation](#getrotation)
- [add](#add)
- [subtract](#subtract)
- [multiply](#multiply)
- [divide](#divide)
- [pow](#pow)
- [floor](#floor)
- [ceil](#ceil)
- [round](#round)
- [abs](#abs)
- [fill](#fill)
- [dot](#dot)
- [cross](#cross)
- [projection](#projection)
- [rejection](#rejection)
- [lerp](#lerp)
- [slerp](#slerp)
- [clone](#clone)
- [getLocalAxes](#getlocalaxes)
- [toArray](#toarray)
- [map](#map)
- [calc](#calc)
- [reduce](#reduce)
- [toString](#tostring)

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
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### static isVector
Vector2かVector3の値が渡されるとtrueを返します
- value 任意の値
```ts
isVector(value: any): boolean;
```
returns boolean

#### static isVector2
Vector2の値が渡されるとtrueを返します
- value 任意の値
```ts
isVector(value: any): boolean;
```
returns boolean

#### static isVector3
Vector3の値が渡されるとtrueを返します
- value 任意の値
```ts
isVector(value: any): boolean;
```
returns boolean

#### static getDirectionFromRotation
渡されたVector2を回転とみなし、その向きの三次元単位ベクトルを返します
- rotation 回転
```ts
getDirectionFromRotation(rotation: Vector2): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### static onCircumference
三次元空間上の円を作り、円周上の座標を取得します
- center 円の中心
- axis 円の中心を通り、円に垂直な単位ベクトル
- angle 円の中心から円周上の座標への角度
- radius 円の半径、デフォルト値は1
```ts
onCircumference(center: Vector3, axis: Vector3, angle: number, radius?: number): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### static const
定数ベクトルを取得します
- name 各定数ベクトルと紐づけられた名称
```ts
const<T extends keyof ConstantSpatialVectorMap>(name: T): ConstantSpatialVectorMap[T];
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### is
2つのベクトルが等しければtrueを返します
- vector 比較するベクトル
```ts
is(vector: Vector2 | Vector3): boolean;
```
returns boolean

#### isValid
成分にNaNでない数値型以外が含まれているとfalseを返します
```ts
isValid(): boolean;
```
returns boolean

#### getLength
ベクトルの長さを取得します
```ts
getLength(): number;
```
returns number

#### setLength
長さを変更した新しいベクトルを返します
デフォルト値は1
- length ベクトルの長さ
```ts
setLength(length?: number): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### normalized
正規化(単位ベクトル化)した新しいベクトルを返します
```ts
normalized(): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### inverted
向きを逆にした新しいベクトルを返します
```ts
inverted(): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### getAngleBetween
別のベクトルと自身がなす角の大きさを返します
```ts
getAngleBetween(other: Vector2 | Vector3): number;
```
returns number

#### getDirectionTo
特定の座標への方向となる単位ベクトルを返します
- vector 座標
```ts
getDirectionTo(vector: Vector2 | Vector3): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### getDistanceTo
特定の座標との距離を返します
- vector 座標
```ts
getDistanceTo(vector: Vector2 | Vector3): number;
```
returns number

#### getRotation
自身の回転を返します
```ts
getRotation(): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### add
別のベクトルとの足し算を行い、結果となる新しいベクトルを返します
- addend 足すベクトル
```ts
add(addend: number | [number, number] | [number, number, number] | Vector2 | Vector3): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### subtract
別のベクトルとの引き算を行い、結果となる新しいベクトルを返します
- subtrahend 引くベクトル
```ts
subtract(subtrahend: number | Vector2 | Vector3 | [number, number] | [number, number, number]): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### multiply
別のベクトル・数との掛け算を行い、結果となる新しいベクトルを返します
- multiplier 乗数
```ts
multiply(multiplier: number | Vector2 | Vector3 | [number, number] | [number, number, number]): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### divide
別のベクトル・数との割り算を行い、結果となる新しいベクトルを返します
- divisor 除数
```ts
divide(divisor: number | Vector2 | Vector3 | [number, number] | [number, number, number]): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### pow
別のベクトル・数を指数として冪乗計算を行い、結果となる新しいベクトルを返します
- exponent 指数
```ts
pow(exponent: number | Vector2 | Vector3 | [number, number] | [number, number, number]): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### floor
各成分の小数点以下を切り捨てした新しいベクトルを返します
```ts
floor(): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### ceil
各成分の小数点以下を切り上げした新しいベクトルを返します
```ts
ceil(): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### round
各成分の小数点以下を四捨五入した新しいベクトルを返します
```ts
round(): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### abs
各成分をその絶対値にした新しいベクトルを返します
```ts
abs(): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### fill
各成分を指定の値にした新しいベクトルを返します
- value 任意の値
```ts
fill(value: number): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### dot
別のベクトルとの内積を求めます
- other ベクトル
```ts
dot(other: Vector2 | Vector3): number;
```
returns number

#### cross
別のベクトルとの外積を求めます
- other ベクトル
```ts
cross(other: Vector3): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### projection
このベクトルの別のベクトルへの射影ベクトルを求めます
- other ベクトル
```ts
projection(other: Vector2 | Vector3): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### rejection
このベクトルの別のベクトルからの反射影ベクトルを求めます
- other ベクトル
```ts
rejection(other: Vector2 | Vector3): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### lerp
endを終了位置とし、tを割合とした線形補間を返します
- end 終了位置
- t 割合
```ts
lerp(end: Vector2 | Vector3, t: number): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### slerp
endを終了位置とし、sを割合とした球面線形補間を返します
- end 終了位置
- s 割合
```ts
slerp(end: Vector2 | Vector3, s: number): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### clone
自身と成分の各値が同じベクトルを返します
```ts
clone(): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### getLocalAxes
自身をローカル座標のz成分とし、ローカル座標の各成分となる座標を取得します
```ts
getLocalAxes(): LocalAxes;
```
returns [LocalAxes](#localaxes-interface)

#### toArray
成分の各値を格納した配列を返します
```ts
toArray(): [number, number] | [number, number, number];
```
returns [number, number] | [number, number, number]

#### map
与えられた関数をベクトルの各成分に対して呼び出し、その結果から新しいベクトルを作成します
- callbackFn 各成分に対して実行する関数
```ts
map(callbackFn: (component: number, key: "x" | "y" | "z") => number): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### calc
与えられた関数を二つのベクトルの各成分に対して呼び出し、その結果から新しいベクトルを作成します
- components コールバックに分解されて渡される値
- callbackFn 各成分に対して実行する関数
```ts
calc(components: number | Vector2 | Vector3 | [number, number] | [number, number, number], callbackFn: (a: number, b: number) => number): MultiDimensionalVector;
```
returns [MultiDimensionalVector](#multidimensionalvector-class)

#### reduce
配列化したベクトルのreduce関数に与えられた関数を渡します
- callbackFn コールバック関数
```ts
reduce(callbackFn: (previousValue: number, currentValue: number, currentIndex: number, array: [number, number] | [number, number, number]) => number): number;
```
returns number

#### toString
ベクトルを文字列化します
- format 形式
```ts
toString(format?: string): string;
```
returns string

## VectorDimensionSize Interface

### methods

- [get](#get)
- [match](#match)

#### get
次元の大きさを取得します
```ts
get(): number;
```

#### match
別のベクトルと次元が一致していた場合trueを返します
- other ベクトル
```ts
match(other: Vector2 | Vector3): boolean;
```

## LocalAxes Interface

### properties

- [x](#x-1)
- [y](#y-1)
- [z](#z-1)

#### x
ローカル座標のx成分ベクトル
```ts
x: MultiDimensionalVector;
```

#### y
ローカル座標のy成分ベクトル
```ts
y: MultiDimensionalVector;
```

#### z
ローカル座標のz成分ベクトル
```ts
z: MultiDimensionalVector;
```

## ConstantSpatialVectorMap

### properties

- [up](#up)
- [down](#down)
- [forward](#forward)
- [back](#back)
- [right](#right)
- [left](#left)
- [zero](#zero)
- [one](#one)

#### up
(0, 1, 0)
```ts
readonly up: MultiDimensionalVector;
```

#### down
(0, -1, 0)
```ts
readonly down: MultiDimensionalVector;
```

#### forward
(0, 0, 1)
```ts
readonly forward: MultiDimensionalVector;
```

#### back
(0, 0, -1)
```ts
readonly back: MultiDimensionalVector;
```

#### right
(1, 0, 0)
```ts
readonly right: MultiDimensionalVector;
```

#### left
(-1, 0, 0)
```ts
readonly left: MultiDimensionalVector;
```

#### zero
(0, 0, 0)
```ts
readonly zero: MultiDimensionalVector;
```

#### one
(1, 1, 1)
```ts
readonly one: MultiDimensionalVector;
```

## CuboidArea Class

### properties

#### min
範囲内の最小の座標
```
readonly min: MultiDimensionalVector;
```

#### max
範囲内の最大の座標
```
readonly max: MultiDimensionalVector;
```

#### length
範囲をなす直方体の三辺それぞれの長さ
```
readonly length: CuboidAreaLength;
```

#### volume
体積
```ts
readonly volume: number;
```

#### center
範囲の中心となる座標
```ts
readonly center: MultiDimensionalVector;
```

#### isCube
立方体か否か
```ts
readonly isCube: boolean;
```

### methods

#### static constructor
直方体の範囲を作成します
- vectorA 範囲の角
- vectorB 範囲の角
- center 範囲の中心
- length 範囲の中心から6方向へ伸ばす長さ
```ts
constructor(vectorA: Vector3, vectorB: Vector3);

constructor(center: Vector3, length: number);
```

#### move
範囲を大きさを維持したまま移動させます
 - direction 移動する方向と量
```ts
move(direction: Vector3): CuboidArea;
```

#### isInside
 座標が範囲内にあるかどうかを返します
 - vector ベクトル
```ts
isInside(vector: Vector3): boolean;
```

#### align
 範囲の小数点以下を切り捨て・切り上げ、「座標の表示」に合った結果を返すように整形します
```ts
align(): CuboidArea;
```

#### outline
 範囲の外枠を取得します
 - step ベクトル同士の間隔
```ts
outline(step?: number): MultiDimensionalVector[];
```

#### getInsideEntities
 範囲内のエンティティをすべて取得します
 - dimension 参照するディメンション
 - options エンティティの条件
```ts
getInsideEntities(dimension?: Dimension, options?: EntityQueryOptions): Entity[];
```

#### getInsideBlocks
 範囲内のブロックをすべて取得します
 - dimension 参照するディメンション
```ts
getInsideBlocks(dimension?: Dimension): Block[];
```

## CuboidAreaLength Interface

### properties

#### x
x軸方向の辺の長さ
```ts
readonly x: number;
```

#### y
y軸方向の辺の長さ
```ts
readonly y: number;
```

#### z
z軸方向の辺の長さ
```ts
readonly z: number;
```
