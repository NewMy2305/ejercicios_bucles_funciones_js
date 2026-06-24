const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  let poder = [];
  for (let i = 0; i < mutants.length; i++){
    if(mutants[i].power === power){
      poder.push(mutants[i].name);
    } 
  }


  if(poder.length > 0){
    console.log("Mutantes encontrados", poder);
  } else {
    console.log("No se ha encontro ningun mutante con ese poder")
  }
  return poder;
}

findMutantByPower(mutants, "steel skin");