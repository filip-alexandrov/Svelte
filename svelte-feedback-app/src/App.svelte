<script>
	import  FeedbackList  from "./components/FeedbackList.svelte";
	import  FeedbackStats  from "./components/FeedbackStats.svelte";
	import  FeedbackForm  from "./components/FeedbackForm.svelte";
	
	/* let feedback = [] */

// Reactive values
/* $: count = feedback.length
$: average = feedback.reduce((a, {rating})=> a + rating, 0) / feedback.length */


/* const addFeedback = (e) =>{
	const newFeedback = e.detail
	feedback = [newFeedback, ...feedback]
} */


// catch itemId through e.detail; e == event parameter
/* const deleteFeedback = (e) => {
	const itemId = e.detail
	 
	// Remove itemId from list 
	feedback = feedback.filter((item) => item.id != itemId)
} */

</script>

<main class="container">
	<!-- <FeedbackForm on:add-feedback={addFeedback}/> -->
	<FeedbackForm />
	<!-- <FeedbackStats {count} {average} /> -->
	<FeedbackStats/>

	<!-- pass props; {feedback} === feedback = {feedback}  -->
	<!-- Catch event after forwarding from FeedbackList -->
	<!-- <FeedbackList on:delete-feedback={deleteFeedback}/> -->

	<FeedbackList/>
</main>
