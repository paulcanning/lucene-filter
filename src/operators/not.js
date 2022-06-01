module.exports = (l, r) => (data) => {
  let rl = l(data);
  let rr = r(data);

  // console.log(data, rl, rr, rla, rra);

  if (rl > rr) {
    return rl;
  }

  return 0;
};
