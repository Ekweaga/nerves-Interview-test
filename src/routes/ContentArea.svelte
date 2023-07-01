<script>
import Tesla from "../tesla/Tesla.svelte"

import Mazda from "../mazda/Mazda.svelte"
import Empty from "./Empty.svelte"
import {onMount} from "svelte"

import Porshe from "../porsche/Porshe.svelte"


import Benz from "../benz/Benz.svelte"
import{teslaOpen,benzOpen,porscheOpen,mazdaOpen} from "./store.js"

let teslaO;
  

	teslaOpen.subscribe((value) => {
		teslaO = value;
	});

    
let benzO;
  

	benzOpen.subscribe((value) => {
		benzO = value;
	});


let mazdaO;
  

	mazdaOpen.subscribe((value) => {
		mazdaO = value;
	});


    let porscheO;
  

	porscheOpen.subscribe((value) => {
		porscheO = value;
	});



</script>

<div>

<div>
{#if teslaO}
        <Tesla/>
{:else}
    <Empty/>
    {/if}
</div>
<div>
{#if benzO}
        <Benz/>
{:else}
    <Empty/>
    {/if}
</div>
<div>
{#if mazdaO}
        <Mazda/>
{:else}
    <Empty/>
    {/if}
</div>
<div>
{#if porscheO}
        <Porshe/>
{:else}
    <Empty/>
    {/if}
</div>

</div>