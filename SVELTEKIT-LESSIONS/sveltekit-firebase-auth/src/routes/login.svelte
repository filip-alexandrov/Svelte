<script>
	import { auth, googleProvider } from '../firebase';
	import { signInWithPopup } from 'firebase/auth';
	import { userStore, isLoggedIn } from '../stores';
	import { goto } from '$app/navigation';
	import { setPersistence, browserSessionPersistence, onAuthStateChanged } from 'firebase/auth';

	const login = async () => {
		try {
			const res = await setPersistence(auth, browserSessionPersistence)
				.then(() => {
					// Existing and future Auth states are now persisted in the current
					// session only. Closing the window would clear any existing state even
					// if a user forgets to sign out.
					// ...
					// New sign-in will be persisted with session persistence.
					return signInWithPopup(auth, googleProvider);
				})
				.catch((error) => {
					// Handle Errors here.
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode, errorMessage);
				});
			$userStore = res.user;
			$isLoggedIn = true;
			goto('/profile');
		} catch (err) {
			console.error(err);
		}
	};

	const alreadyLoggedIn = () => {
		console.log('in auth');
		let user = auth.currentUser;
		onAuthStateChanged(auth, (user) => {
			if (user) {
				$userStore = user;
				$isLoggedIn = true;
				console.log('In auth state change: ', user);
				goto('/profile');
			} else {
				console.log('no user');
				login();
			}
		});
	};

	function helper() {
		console.log('helper');
	}
</script>

<h1>Login</h1>
<button on:click={alreadyLoggedIn}>Login using Google</button>
