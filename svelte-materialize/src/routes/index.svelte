<script>
	import StakingWindow from './StakingWindow.svelte';
	import { onMount } from 'svelte';
	import { version } from 'materialize-css';
	onMount(async () => {
		var elems = document.querySelectorAll('.sidenav');
		var instances = M.Sidenav.init(elems, {});

		// Modal control
		// M.Modal.init(document.querySelectorAll('.modal'), {});

		// Sidenav menu
		M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
		M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
	});
</script>

<!-- NAVBAR -->

<ul id="dropdown1" class="dropdown-content">
	<li class="grey darken-3">
		<a class="grey-text text-lighten-3 menu-text" href="#!">Payments</a>
	</li>
	<li class="grey darken-4">
		<a class="grey-text text-lighten-3 menu-text" href="#!">Accounts</a>
	</li>

	<li class="grey darken-3">
		<a class="grey-text text-lighten-3 menu-text" href="#!">Products</a>
	</li>
</ul>

<ul class="sidenav" id="mobile-demo">
	<li>
		<a class="sidenav-close" href="#!" style="color: rgba(0, 0, 0, 0.54)"
			><i class="material-icons left mr" style="margin-right: 0px">keyboard_arrow_left</i>Close</a
		>
	</li>

	<li><a href="#!">Home</a></li>
	<li><a href="#!">Dashboard</a></li>
	<li class="no-padding">
		<ul class="collapsible collapsible-accordion">
			<li>
				<a class="collapsible-header"
					>Set Up<i class="material-icons" style="margin-right: 0">arrow_drop_down</i></a
				>
				<div class="collapsible-body">
					<ul>
						<li><a href="#!">First</a></li>
						<li><a href="#!">Second</a></li>
						<li><a href="#!">Third</a></li>
						<li><a href="#!">Fourth</a></li>
					</ul>
				</div>
			</li>
		</ul>
	</li>
	<li><div class="divider" /></li>
	<li><a class="subheader">Staking</a></li>
	<li class="red darken-2">
		<a href="mobile.html" class="grey-text text-lighten-4">Wallet not Connected</a>
	</li>
	<li class="green darken-2">
		<a href="mobile.html" class="grey-text text-lighten-3 hide">0x87d Connected</a>
	</li>
	<li><a href="#!">Second Sidebar Link</a></li>
</ul>

<!--     <ul class="right hide-on-med-and-down">
	<li><a href="#!">First Sidebar Link</a></li>
	<li><a href="#!">Second Sidebar Link</a></li>
	<li>
	  <a class="dropdown-trigger" href="#!" data-target="dropdown1"
		>Dropdown<i class="material-icons right">arrow_drop_down</i></a
	  >
	</li>
	<ul id="dropdown1" class="dropdown-content">
	  <li><a href="#!">First</a></li>
	  <li><a href="#!">Second</a></li>
	  <li><a href="#!">Third</a></li>
	  <li><a href="#!">Fourth</a></li>
	</ul>
  </ul> -->

<nav class="nav-extended grey darken-3">
	<a href="#" data-target="mobile-demo" class="sidenav-trigger left hide-on-extra-large-only"
		><i class="material-icons">menu</i></a
	>
	<div class="nav-wrapper container">
		<a href="#!" class="brand-logo left hide-on-small-only">Materhorn Finance</a>
		<a href="#!" class="brand-logo center hide-on-med-and-up">Materhorn Finance</a>
		<ul class="right hide-on-small-only">
			<li>
				<a
					class="
			  btn
			  grey
			  lighten-2
			  grey-text
			  text-darken-3
			  modal-trigger
			  tooltipped
			"
					id="stake-button"
					data-tooltip="Please, connect your wallet"
					href="#modal1"><i class="material-icons left">monetization_on</i>Stake</a
				>
			</li>
			<li>
				<a class="btn red darken-2 grey-text text-lighten-3">Connect</a>
			</li>
		</ul>
		<ul class="right hide-on-med-and-down">
			<li class="">
				<a class="grey-text text-lighten-3 menu-text" href="sass.html">Home</a>
			</li>
			<li class="grey darken-4">
				<a class="grey-text text-lighten-3 menu-text" href="badges.html">Test</a>
			</li>
			<li>
				<a class="dropdown-trigger menu-text" href="#!" data-target="dropdown1"
					>Set Up<i class="material-icons right">arrow_drop_down</i></a
				>
			</li>
		</ul>
	</div>
</nav>

<!-- LOGIN MODAL -->
<StakingWindow />
