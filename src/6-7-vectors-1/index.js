/*                      /|
                      /  |
                    /    |
      Hypotenous  /      | opposite
                /_ _ _ a |
                 adjacent

                   /
                 /
               /
             /
           /
Vector represents a magnitude and direction. it has a tail and head

For a Direction vector
direction = angle
magnitude = length

For a Velocity vector
direction = angle
magnitude = speed

x = mCos(a)
y = mSin(a)

Vector can be added, subtracted, multiplied.
*/

import "./styles.css";
import vector from "./vector";

let v1 = vector.create(10, 5);
console.log("Length ", v1.getLength());

let v2 = v1.multiply(2);
console.log("Length ", v2.getLength());
