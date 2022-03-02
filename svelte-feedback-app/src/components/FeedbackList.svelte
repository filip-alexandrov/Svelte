<script>
    import { onMount, onDestroy } from "svelte";
    import {FeedbackStore} from '../stores'
    import FeedbackItem from "./FeedbackItem.svelte";
    import { fade, scale } from "svelte/transition";

    // Catch prop; if not passed => empty array
    // Get values from store

    /* let feedback = []; 
    const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)

    onMount(()=>{
        console.log('Called when component is mounted')
    })
    onDestroy(()=> {
        unsubscribe()
    }) */
    
</script>

<!-- Index in parentecies; unsubscribe automatically -->
{#each $FeedbackStore as fb (fb.id)}
    <!-- Animations -->
    <div in:scale out:fade="{{duration: 500}}">
        <!-- No access to feedback list, but will be forwarded to parent (App) when without equals sign -->
       <!-- <FeedbackItem item={fb} on:delete-feedback /> -->
       <FeedbackItem item={fb} />
    </div>
   
{/each}