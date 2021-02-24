//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rna = "";
  dna.split("").forEach((n) => (rna += DNA[n]));
  return rna;
};

const DNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};
