<script>
 import { Button, Modal,Input } from 'flowbite-svelte'
 import {openModal,cards,successModal} from "./store.js"

 	let open;
    let titleInput = ""
    let descInput = ""
	successModal.subscribe((value) => {
		open = value;
	});

    function add(){
            cards.update(currentList =>{
                currentList.push({title:titleInput,desc:descInput})
                return currentList;
            }
            )
    }

 function close() {
		successModal.update((n) => false);
	}
 </script>


 

 <Modal title="" bind:open={open} autoclose>
  <h1 class="flex items-center justify-center text-center md:text-2xl text-green-600 font-bold ">New Card Have been added</h1><br>
  <svelte:fragment slot='footer'>

  <div class="flex items-center justify-center">
  <Button color="alternative" class="bg-green-800 text-white" on:click={close}>Ok</Button>
  </div>
   
    
  </svelte:fragment>
</Modal>

