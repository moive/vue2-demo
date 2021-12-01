<template>
	<div>
		<div>{{message}}</div>
		<div>{{fullname}}</div>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'test',
		data: ()=>({
			message:'welcome...!',
			name: 'Moises',
			lastname: 'Velasquez'
		}),
		computed:{
			fullname(){
				return  `${this.name} ${this.lastname}`;
			}
		}
	}
</script>
