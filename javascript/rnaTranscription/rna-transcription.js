//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  var result = "";
  Array.from(dna).forEach(nucleotide => {
    result += mapDnaToRnaNucleotide(nucleotide);
  });
  return result
};

const mapDnaToRnaNucleotide = (nucleotide) => {
  switch (nucleotide) {
    case "G":
      return "C";
    case "C":
      return "G";
    case "T":
      return "A";
    case "A":
      return "U";
  }
};

// - `G` -> `C`
// - `C` -> `G`
// - `T` -> `A`
// - `A` -> `U`
