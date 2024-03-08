import { MultiDimensionalVector } from "./MultiDimensionalVector.js";

import { CuboidArea } from "./CuboidArea";

// 多次元ベクトルの作成

new MultiDimensionalVector(0, 3, -2.4); // { x: 0, y: 3, z: -2.4 }

new MultiDimensionalVector([1, 2, 3]); // { x: 1, y: 2, z: 3 }

new MultiDimensionalVector({ x: 4, y: 0 }); // { x: 4, y: 0 }

new MultiDimensionalVector(2); // { x: 0, y: 0 }

MultiDimensionalVector.from(-1, -6); // { x: -1, y: -6 }

MultiDimensionalVector.const("up") // { x: 0, y: 1, z: 0 }



// 多次元ベクトルの判定

MultiDimensionalVector.isVector({ x: 1, y: 2 }); // true

MultiDimensionalVector.isVector2({ x: 0, y: 0, z: 0 }); // false

MultiDimensionalVector.isVector3({ x: 0, y: -3, z: 11 }); // true



// 多次元ベクトルから取得

const vec = new MultiDimensionalVector(1, 2, -4);

vec.getLength(); // sqrt(21)

vec.getRotation(); // この三次元ベクトルの回転(向き)が返る

vec.getLocalAxes(); // ローカル座標が { x: {...}, y: {...}, z: {...} } の形式で返る

vec.clone(); // vecとまったく同じ数値が入ったベクトル

vec.dimensionSize.get(); // 3



// 多次元ベクトルの比較

vec.dimensionSize.match({ x: 2, y: 0 }); // false

vec.is({ x: 1, y: 2, z: -4 }); // true



// 多次元ベクトルの編集

vec.x = 0; // { x: 0, y: 2, z: -4 }

vec.z = "hoge"; // { x: 0, y: 2, z: "hoge" }

delete vec.y; // Error プロパティの削除はできないようになっている

vec.isValid(); // zにstringが入っているのでfalse



// 多次元ベクトルの計算

const one = MultiDimensionalVector.const("one");

one.add({ x: -1, y: -1, z: 0 }); // { x: 0, y: 0, z: 1 } oneは上書きしない

one.subtract([1, 1, 1]); // { x: 0, y: 0, z: 0 }

one.multiply(3); // { x: 3, y: 3, z: 3 }

one.divide([2, 2, 4]) // { x: 0.5, y: 0.5, z: 0.25 }

one.divide(0); // { x: Infinity, y: Infinity, z: Infinity }

one.multiply(2).pow(3); // { x: 8, y: 8, z: 8 }

one.getDistanceTo({ x: 3, y: 2, z: 1 }); // sqrt(6) 2つの距離

one.getDirectionTo({ x: 0, y: 0, z: 1 }); // normalize({ x: -1, y: -1, z: 0 }) 自身から引数のベクトルへの方向

MultiDimensionalVector.const("forward").getAngleBetween(MultiDimensionalVector.const("right")); // 90

one.dot({ x: 2, y: 2, z: 2 }); // 6 2つの内積

one.cross({ x: 4, y: 1, z: 2 }); // 2つの外積

const dec = MultiDimensionalVector.from(1.6, -2.2);

dec.floor(); // { x: 1, y: -3 }

dec.ceil(); // { x: 2, y: -2 }

dec.round(); // { x: 2, y: -3 }

dec.abs(); // { x: 1.6, y: 2.2 }

dec.fill(10); // { x: 10, y: 10 }

dec.inverted(); // { x: -1.6, y: 2.2 }

dec.normalized(); // 長さを1に変更(正規化)した新しいベクトル dへの上書きはしない

dec.projection(one); // decからoneへの射影

dec.rejection(one); // oneからdecへの反射影

dec.lerp({ x: 0, y: 0, z: 0 }, 0.5); // { x: 0.8, y: -1.1 } 線形補間

dec.slerp({ x: 4, y: 1, z: 3 }); // 球面線形補間

dec.map(component => component + 2); // { x: 3.6, y: 0.2 }

dec.calc([-3, 0], Math.max); // { x: 1.6, y: 0 }

dec.reduce((previous, current) => previous + current); // -0.4

dec.toArray(); // [1.6, -2.2]

dec.toString("<$c, $c, $c>"); // "<1.6, -2.2>"

MultiDimensionalVector.getDirectionFromRotation({ x: 0, y: 0 }); // { x: 0, y: 0, z: 1 }

MultiDimensionalVector.onCircumference({ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }, 0); // 円周上の座標



// 直方体範囲の作成

const a = new CuboidArea({ x: -2, y: -2, z: -2 }, { x: 4, y: 0, z: 1 });

const b = new CuboidArea({ x: 0, y: 0, z: 0 }, 3);

a.min; // { x: -2, y: -2, z: -2 }

a.max; // { x: 4, y: 0, z: 1 }

b.volume; // 6 * 6 * 6

b.isCube; // true

a.length.z; // 3

a.center; // { x: 1, y: -1, z: -0.5 }

a.isInside({ x: 1, y: 0, z: 1 }); // true

b.move({ x: 5, y: 0, z: 0 }); // x+に5m移動 bは上書きしない

a.outline(); // 外枠の座標の配列を取得

a.align(); // 座標の表示に合うように整形 aは上書きしない

a.getInsideEntities().forEach(entity => entity.remove()); // aの中のentity消す

for (const block of b.getInsideBlocks()) {
    block.setType("minecraft:air"); // bの中空気にする
}
