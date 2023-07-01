<script>
import { Drawer, Button, CloseButton } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';
   import { Card } from "flowbite-svelte";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger,  Input } from 'flowbite-svelte'

    import {openModal,cards,teslaOpen,benzOpen,mazdaOpen,porscheOpen} from "./store.js"


    let sidebarContent;
    let filterList;
    let input;

	cards.subscribe((value) => {
		filterList = value;
	});

 function open() {
		openModal.update((n) => true);
	}

    function search(a) {
          cards.update(currentList =>{
               filterList = currentList.filter((item)=>item.title.toLowerCase().includes(a.toLowerCase()))
               return filterList;
            }
            )
            console.log("searcj")
    }

   let hidden1 = true; 
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };

</script>

<div class="flex items-center">

<div class="text-center  absolute top-0 right-0 cursor-pointer p-4">
<div  on:click={() => (hidden1 = false)} class="flex flex-col gap-[5px]">
<span class="h-[2px] w-[20px] bg-black "></span>
<span class="h-[2px] w-[20px] bg-black"></span>
<span class="h-[2px] w-[20px] bg-black"></span>
</div>

</div>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id='sidebar1'>
<div class='flex items-center'>
  
  <div class="block">
  <a href="/contact">View more cards</a>

  
  </div>
			
  
  <CloseButton on:click={() => (hidden1 = true)} class='mb-4 dark:text-white'/>
    </div>
    <div>  <Input id="search-navbar" class="pl-10" placeholder="Search..." on:keyup={search(input)} bind:value={input} /></div><br>
    <div class="flex flex-col gap-3">
    {#each  filterList as item, index(item.title)}
    
 <Card on:click={item.active}>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {item.desc} .
  </p>
</Card>{/each}
</div>

  <div class="grid grid-cols-2 gap-4">
    <Button color="light"  on:click={open} class="bg-blue-700 mt-[20px] w-[280px] h-[50px] text-white" >Add more cards</Button>
   
  </div>
</Drawer>

</div>

     
          
  
