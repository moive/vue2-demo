<template>
	<div>
		<div>{{message}}</div>
		<div>{{fullname}}</div>
		<a
		    href="#"
			class="btn btn-danger btn-sm"
		    @click="helloUser"
		>Click for view alert</a>
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
		},
		methods:{
			helloUser(){
				alert(this.fullname);
			}
		}
	}
</script>
