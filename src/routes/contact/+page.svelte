<script>
import { Card,Input,Button } from "flowbite-svelte";
import {elonContent} from "../store.js"
import ContactModal from "./ContactModal.svelte"


let sidebarContent;
    let filterList;
    let input;
    let selectValue;
    let elonpopup;

	elonContent.subscribe((value) => {
		filterList = value;
	});

  function search(a) {
          elonContent.update(currentList =>{
               filterList = currentList.filter((item)=>item.title.toLowerCase().includes(a.toLowerCase()))
               return filterList;
            }
            )
            console.log("searcj")
    }

      function change(a) {
          elonContent.update(currentList =>{
               filterList = currentList.filter((item)=>item.title.toLowerCase().includes(a.toLowerCase()))
               return filterList;
            }
            )
    }

     function open() {
		elonpopup = true;
	}
</script>

<svelte:head>
	<title>Car models</title>
	<meta name="description" content="Contact this app" />
</svelte:head>

<div class="text-column">
	<h1>Car Models</h1>


	
</div>

<div class="flex items-center justify-center gap-2">  <Input id="search-navbar" class="pl-10 p-3 -mb-[20px]" placeholder="Search..." on:keyup={search(input)} bind:value={input} /> <Button color="light"  on:click={open} class="bg-blue-700 mt-[20px] w-[280px] h-[50px] text-white p-3" >Add more cards</Button> </div><br>
   
   <div class="flex items-center justify-center mb-[40px]">
 <select class="w-[300px] p-2" bind:value={selectValue} on:change={change(selectValue)}>
 <option>elonA</option>
  <option>elonB</option>
   <option>elonC</option>
    <option>elonD</option>
 </select></div>
   
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    {#each filterList  as item, index(item.title)}
    
 <Card>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {item.desc} .
  </p>
  
</Card>{/each}
</div>
<ContactModal {elonpopup}/>
