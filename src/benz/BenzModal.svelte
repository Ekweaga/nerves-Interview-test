<script>
 import { Button, Modal,Input } from 'flowbite-svelte'
 import {benzModel,teslaOpen} from "../routes/store.js"
 export let benzpopup

 	let open;
    let titleInput = ""
    let descInput = ""
    let error = "Fields are empty"
    let noError = ""


    function add(){

      
            benzModel.update(currentList =>{
                currentList.push({title:titleInput,desc:descInput})
                return currentList;
            }
            );
            
    }

 function close() {
		benzpopup = false;
	}
 </script>
 


 

 <Modal title="New cards" bind:open={benzpopup} autoclose>
  <h1 class="text-base leading-relaxed text-gray-500 dark:text-gray-400 font-bold">
    Enter new Cards.
  </h1>
  <div>  <Input id="search-navbar" class="pl-10" placeholder="Title..." bind:value={titleInput}/></div><br>
  <div>  <Input id="search-navbar" class="pl-10" placeholder="Description.." bind:value={descInput} /></div><br>

  <div class="text-red-800">
  {#if titleInput == "" || descInput == ""}
        {error}
        {:else}
        {notError}
        {/if}
  </div>
  <svelte:fragment slot='footer'>

  <div class="flex items-center justify-center gap-2">
  <Button color="red" class="bg-red-800 text-white" on:click={close}>Close</Button>
  <Button color="green" class="bg-green-800 text-white" on:click={add}>Add</Button>
  </div>
   
    
  </svelte:fragment>
</Modal>

