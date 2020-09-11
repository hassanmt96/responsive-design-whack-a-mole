window.addEventListener('DOMContentLoaded', () => {
    popUpRandomMole()
  
    const moleHeads = document.querySelectorAll('.wgs__mole-head');

    for (let moleHead of moleHeads) {
        moleHead.addEventListener("click", () => {
        
            moleHead.classList.add('wgs__mole-head--hidden');
        })
    }
});

let popUpRandomMole = () => {

    const moleHeads = document.querySelectorAll('.wgs__mole-head');


    const index = Math.floor(Math.random() * moleHeads.length);

    const unhidden = moleHeads[index];

    unhidden.classList.remove('wgs__mole-head--hidden');

    setTimeout(() => hideMole(unhidden), 3000)
}

const hideMole = (mole) => {
   
    mole.classList.add('wgs__mole-head--hidden');
   
    
    setTimeout(popUpRandomMole, 1000)
}