const express = require("express");
const app = express()
app.listen(3000, () => {});

function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    const next = fib[i - 2] + fib[i - 1];
    fib.push(next);
  }

  return fib;
}
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }
  return sum;
}

app.get("/api/v1/test/:member_count", (req, res) => {
  const member_count = parseInt(req.params.member_count);

  if (Number.isInteger(member_count)) {
    if (member_count < 1 || member_count > 100) {
      return res.status(400).json({ error: "only 1 - 100" });
    }
  } else {
    return res.status(400).json({ error: "only int" });
  }

  const sequence = fibonacci(member_count);
  const total = sum(sequence);

  res.json({
    "member-count": member_count,
    "sequence": sequence,
    "total": total,
  });
});