// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = (name) => {
  cats.push(name);
};
const destructivelyPrependCat = (name) => {
  cats.unshift(name);
};
const destructivelyRemoveLastCat = () => {
  cats.pop();
};
const destructivelyRemoveFirstCat = () => {
  cats.shift();
};
const appendCat = (name) => {
  return [...cats, name];
  //   const newArr = cats.slice()
  //   newArr.push(name)
  //   return newArr
};
const prependCat = (name) => {
  return [name, ...cats];
  // return cats.slice.unshift(name)
};

const removeLastCat = () => {
  const newArr = [...cats];
  newArr.pop();
  return newArr;
};
const removeFirstCat = () => {
  const newArr = [...cats];
  newArr.shift();
  return newArr;
};
