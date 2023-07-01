<script>
 import {benzModel} from "../routes/store.js"
 import { Card,Input,Button } from "flowbite-svelte";
 import BenzModal from "./BenzModal.svelte"


  let benzContent;
    let filterList;
    let input;
      let benzpopup = false
      let selectValue;

	benzModel.subscribe((value) => {
		filterList = value;
	});

  function search(a) {
          benzModel.update(currentList =>{
               filterList = currentList.filter((item)=>item.title.toLowerCase().includes(a.toLowerCase()))
               return filterList;
            }
            )
            console.log("searcj")
    }

      function change(a) {
          benzModel.update(currentList =>{
               filterList = currentList.filter((item)=>item.title.toLowerCase().includes(a.toLowerCase()))
               return filterList;
            }
            )
            console.log("searcj")
    }

     function open() {
		benzpopup = true;
	}
</script>

<div class="flex items-center justify-center gap-2">  <Input id="search-navbar" class="pl-10 p-3 -mb-[20px]" placeholder="Search..." on:keyup={search(input)} bind:value={input} /> <Button color="light"  on:click={open} class="bg-blue-700 mt-[20px] w-[280px] h-[50px] text-white p-3" >Add more cards</Button></div><br>

<div class="flex items-center justify-center mb-[40px]">
 <select class="w-[300px] p-2" bind:value={selectValue} on:change={change(selectValue)}>
 <option>benzA</option>
  <option>benzB</option>
   <option>benzC</option>
    <option>benzD</option>
 </select></div>

   <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    {#each  filterList as item, index(item.title)}
 <Card href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {item.desc} .
  </p>
</Card>{/each}
</div>
<BenzModal {benzpopup}/>