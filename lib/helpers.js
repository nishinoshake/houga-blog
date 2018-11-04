export const uniq = arr => arr.filter((val, i, self) => self.indexOf(val) === i)
