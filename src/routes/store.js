import { writable } from 'svelte/store';


export const openModal = writable(false);
export const cards = writable([
    {title:"Benz",desc:" Here are the biggest enterprise technology .",active:()=>{benzOpen.update((n) => true); teslaOpen.update((n) => false); mazdaOpen.update((n) => false);porscheOpen.update((n) => false);}},
    {title:"Mazda",desc:" Here are the biggest enterprise technology .",active:()=>{mazdaOpen.update((n) => true); teslaOpen.update((n) => false); benzOpen.update((n) => false);porscheOpen.update((n) => false);}},
    {title:"Tesla",desc:" Here are the biggest enterprise technology .",active:()=>{teslaOpen.update((n) => true); benzOpen.update((n) => false); mazdaOpen.update((n) => false);porscheOpen.update((n) => false);}},
    {title:"Porsche",desc:" Here are the biggest enterprise technology .",active:()=>{porscheOpen.update((n) => true); teslaOpen.update((n) => false); mazdaOpen.update((n) => false);benzOpen.update((n) => false);console.log("tesla")}}]);
export const contentArea = writable([{}])
export const successModal = writable(false)
export const benzOpen = writable(false)
export const teslaOpen = writable(false)
export const porscheOpen = writable(false)
export const mazdaOpen = writable(false)
export const benzModel = writable([
    {title:"BenzA",desc:" Here are the biggest enterprise technology ."},
    {title:"BenzB",desc:" Here are the biggest enterprise technology ."},
    {title:"benzC",desc:" Here are the biggest enterprise technology ."},
    {title:"BenzD",desc:" Here are the biggest enterprise technology ."}]);




export const teslaModel = writable([{title:"TeslaA",desc:" Here are the biggest enterprise technology ."},{title:"TeslaB",desc:" Here are the biggest enterprise technology ."},{title:"TeslaC",desc:" Here are the biggest enterprise technology ."},{title:"TeslaD",desc:" Here are the biggest enterprise technology ."}]);
export const porscheModel = writable([{title:"PorscheA",desc:" Here are the biggest enterprise technology ."},{title:"PorscheB",desc:" Here are the biggest enterprise technology ."},{title:"PorscheC",desc:" Here are the biggest enterprise technology ."},{title:"PorscheD",desc:" Here are the biggest enterprise technology ."}]);
export const mazdaModel = writable([{title:"MazdaA",desc:" Here are the biggest enterprise technology ."},{title:"MazdaB",desc:" Here are the biggest enterprise technology ."},{title:"MazdaC",desc:" Here are the biggest enterprise technology ."},{title:"MazdaD",desc:" Here are the biggest enterprise technology ."}]);

export const elonContent = writable([
    {
        title:"ElonA",desc:" Here are the biggest enterprise technology ."
    },

    {
        id:1,title:"ElonB",desc:" Here are the biggest enterprise technology ."
    },
    {
        id:2,title:"ElonC",desc:" Here are the biggest enterprise technology ."
    },
    {
        id:3,title:"ElonD",desc:" Here are the biggest enterprise technology ."
    },
    {
        id:4,title:"ElonE",desc:" Here are the biggest enterprise technology ."
    }
])