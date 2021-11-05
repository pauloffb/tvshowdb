<script>
	import { goto } from '$app/navigation';

	const goBack = () => {
		window.history.back();
	};
</script>

<slot></slot>