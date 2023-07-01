<script>
 import {teslaModel,teslaOpen} from "../routes/store.js"
 import { Card,Input,Button } from "flowbite-svelte";
 import TeslaModal from "./TeslaModal.svelte"
 import {  Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'


  let teslaContent;
    let teslapopup = false
    let input;
let filterList;
let selectValue;

	teslaModel.subscribe((value) => {
		filterList = value;
	});

    function search(a) {
          teslaModel.update(currentList =>{
               filterList = currentList.filter((item)=>item.title.toLowerCase().includes(a.toLowerCase()))
               return filterList;
            }
            )
            console.log("searcj")
    }

    function change(a) {
          teslaModel.update(currentList =>{
               filterList = currentList.filter((item)=>item.title.toLowerCase().includes(a.toLowerCase()))
               return filterList;
            }
            )
            console.log("searcj")
    }

    function open() {
		teslapopup = true;
	}
</script>
 <div class="flex items-center justify-center gap-2">  <Input id="search-navbar" class="pl-10 p-3 -mb-[20px]" placeholder="Search..." on:keyup={search(input)} bind:value={input} /><Button color="light"  on:click={open} class="bg-blue-700 mt-[20px] w-[280px] h-[50px] text-white p-3" >Add more cards</Button></div><br>
 <div class="flex items-center justify-center mb-[40px]">
 <select class="w-[300px] p-2" bind:value={selectValue} on:change={change(selectValue)}>
 <option>teslaA</option>
  <option>teslaB</option>
   <option>teslaC</option>
    <option>teslaD</option>
 </select>
 </div>
   <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    {#each  filterList as item, index(item.title)}
 <Card href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {item.desc} .
  </p>
</Card>{/each}
</div>
<TeslaModal {teslapopup}/>