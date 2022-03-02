<script>
	import { onMount } from 'svelte';
	onMount(async () => {
		// Modal control
		// M.Modal.init(document.querySelectorAll('.modal'), {});
		M.Modal.init(modal, {});
	});
	let modal = '';
</script>

<div id="modal1" class="modal" bind:this={modal}>
	<div class="modal-content">
		<br />
		<div class="row">
			<form class="col s12">
				<h4>Stake/Unstake MATER</h4>

				<p class="text-darken-1 grey-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus, sapiente
					possimus earum nostrum itaque assumenda quaerat maxime inventore reiciendis aut ducimus
					aliquam quasi quos. Modi sint eos quos reprehenderit.
				</p>
				<div class="switch">
					<label class="flow-text">
						<span class="grey-text text-darken-4">Stake</span>
						<input type="checkbox" />
						<span class="lever grey" />
						Unstake
					</label>
				</div>
				<div class="input-field col s6">
					<i class="material-icons prefix">swap_vertical_circle</i>
					<input id="icon_prefix" type="text" class="invalid" />
					<label for="icon_prefix">Amount</label>
				</div>
				<div class="input-field col s3">
					<select class="icons">
						<option value="" disabled selected>Cryptocurrency</option>
						<option value="" data-icon="btc.png">
							<span>BTC</span>
						</option>
						<option value="" data-icon="eth.png">ETH</option>
						<option value="" data-icon="matic.png">MATIC</option>
					</select>
					<label>Select asset to stake</label>
				</div>
				<div class="file-field input-field col s3">
					<button class="btn grey darken-3 waves-effect waves-ripple" type="submit" name="action">
						<i class="material-icons left">all_inclusive</i>
						MAX
					</button>
				</div>

				<div class="row">
					<div class="col s12">
						<h6>APY during the first 2 Weeks</h6>
						<p>
							To ensure the security of our protocol, there is 2 Weeks 0% vesting period, which you
							wont receive any interest on your staked asset. After the 2 Week period is over, you
							will be automatically quallified for receiving interest and the interest will be
							automatically reinvested. You can withdraw the invested amount at any time, but be
							aware that such action will result in restarting the 2 Week 0% vesting period.
						</p>
					</div>
				</div>

				<button
					type="submit"
					id="checkCredentials"
					class="
			  modal-close
			  waves-effect waves-grey
			  btn-flat
			  right
			  disabled
			"
				>
					Insufficient funds
				</button>
			</form>
		</div>
	</div>
</div>
