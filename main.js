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
      }
    }
  }
  
  const mocky1 = pAequorFactory(1, mockUpStrand());
  console.log(mocky1);
  mocky1.mutate();
  console.log('-------');
  
  console.log(mocky1);
  
  
  
  
  