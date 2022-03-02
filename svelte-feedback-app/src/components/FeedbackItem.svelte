<script>
    import { createEventDispatcher } from 'svelte';
    import { FeedbackStore } from "../stores";
    import Card from './Card.svelte'
    export let item  

    /* const dispatch = createEventDispatcher()

    // Custom event delete-feedback, data is itemId; to be catched one level up => FeedbackList
    const handleDelete = (itemId) => {
        dispatch('delete-feedback', itemId)
    } */

    const handleDelete = (itemId) =>{
        FeedbackStore.update((currentFeedback) => {
            return currentFeedback.filter(item => item.id != itemId)
        })
    }
</script>

<Card>
    <!-- Pass to card to display -->
    <div class="num-display">
        {item.rating}
    </div>

    <!-- Pass function with argument -->
    <button class="close" on:click={()=> handleDelete(item.id)}>X</button>
    <p class="text-display">
        {item.text}
    </p>
</Card>

<style>
    .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
