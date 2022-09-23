const n = 6;
let stars = '';

for (let index = 0; index < n; index++) {
  stars = '';
  for (let jindex = index; jindex < n; jindex++) {
    stars = '*' + stars;
  }
  console.log(stars);
}
