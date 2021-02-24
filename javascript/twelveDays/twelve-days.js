//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (verse1, verse2) => {
  if (verse2) {
    return handleMultiple(verse1, verse2);
  }
  return handleOneVerse(verse1);
};

const handleOneVerse = (verse) => {
  if (verse > 1) {
    let verses = `On the ${DAYS[verse].num} day of Christmas my true love gave to me: ${DAYS[verse].gift}`;
    for (let i = verse - 1; i >= 1; i--) {
      if (i === 1) {
        verses += " and";
      }
      verses += ` ${DAYS[i].gift}`;
    }
    return verses + "\n";
  }
  return `On the ${DAYS[verse].num} day of Christmas my true love gave to me: ${DAYS[verse].gift}\n`;
};

const handleMultiple = (v1, v2) => {
  let verses = "";
  for (let i = v1; i <= v2; i++) {
    if (i > 1) {
      verses += `On the ${DAYS[i].num} day of Christmas my true love gave to me: ${DAYS[i].gift}`;
      for (let j = i - 1; j >= 1; j--) {
        j === 1 ? (verses += " and") : verses;
        verses += ` ${DAYS[j].gift}`;
      }
      i === v2 ? (verses += "\n") : (verses += "\n\n");
    } else {
      verses += `On the ${DAYS[i].num} day of Christmas my true love gave to me: ${DAYS[i].gift}\n\n`;
    }
  }
  return verses;
};

const DAYS = {
  1: { num: "first", gift: "a Partridge in a Pear Tree." },
  2: { num: "second", gift: "two Turtle Doves," },
  3: { num: "third", gift: "three French Hens," },
  4: { num: "fourth", gift: "four Calling Birds," },
  5: { num: "fifth", gift: "five Gold Rings," },
  6: { num: "sixth", gift: "six Geese-a-Laying," },
  7: { num: "seventh", gift: "seven Swans-a-Swimming," },
  8: { num: "eighth", gift: "eight Maids-a-Milking," },
  9: { num: "ninth", gift: "nine Ladies Dancing," },
  10: { num: "tenth", gift: "ten Lords-a-Leaping," },
  11: { num: "eleventh", gift: "eleven Pipers Piping," },
  12: { num: "twelfth", gift: "twelve Drummers Drumming," },
};
