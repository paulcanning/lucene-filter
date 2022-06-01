const tape = require('tape');
const operators = require('./index');
const not = operators['NOT'];

const zero = () => 0,
  one = () => 1,
  two = () => 2,
  three = () => 3,
  four = () => 4,
  five = () => 5;

tape('Verifying positive numbers', async t => {
  t.plan(10);
  t.equal(not(zero, one)(), 0, '0 !! 1 == 0');
  t.equal(not(one, two)(), 0, '1 !! 2 == 1');
  t.equal(not(two, three)(), 0, '2 !! 3 == 2');
  t.equal(not(three, four)(), 0, '3 !! 4 == 3');
  t.equal(not(four, five)(), 0, '4 !! 5 == 4');
  t.equal(not(one, zero)(), 1, '1 !! 1 == 0');
  t.equal(not(two, one)(), 2, '2 !! 2 == 1');
  t.equal(not(three, two)(), 3, '3 !! 3 == 2');
  t.equal(not(four, three)(), 4, '4 !! 4 == 3');
  t.equal(not(five, four)(), 5, '5 !! 5 == 4');
});
