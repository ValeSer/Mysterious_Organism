// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum, 
      dna,
      mutate() {
        let baseIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[baseIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[baseIndex] = newBase; 
      },
      compareDNA (pAequor) {
        let j = 0
        for (let i=0; i < pAequor.dna.length; i++) {
          if(this.dna[i] === pAequor.dna[i]) {
            j++
          }
        }  let perc = Math.floor(j / pAequor.dna.length * 100);
          console.log(`Specimen ${this.specimenNum} and ${pAequor.specimenNum} have ${perc}% DNA in common`)
      },
      willLikelySurvive () {
        let j = 0;
        for (let i=0; i < this.dna.length; i++) {
          if(this.dna[i] === 'C' || this.dna[i] === 'G')
            j++;
        } 
        return (j / this.dna.length) >= 0.6;
      } 
    }
  }
  
  const survivorFactory = instances => {
    let survivors = []
    while (survivors.length < instances) { 
       let survivor = pAequorFactory(survivors.length, mockUpStrand());
       if(survivor.willLikelySurvive) {
         survivors.push(survivor);
       }
    }
    return survivors
  }
  console.log(survivorFactory(30));

let survivors = survivorFactory(30);
console.log(survivors);