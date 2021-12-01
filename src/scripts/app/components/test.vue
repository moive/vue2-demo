<template>
	<div class="row mt-5">
		<div class="col-md-4">
			<div class="card">
				<card-img-top v-model="textTop"/>
				<div class="card-body">
					<card-body-main @valDescription="eventReceive" />
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="Vue" id="vue" v-model="skills">
							<label class="form-check-label" for="vue">
								Vue
							</label>
						</div>
					</li>
					<li class="list-group-item">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="Reactjs" id="reactjs" v-model="skills">
							<label class="form-check-label" for="reactjs">
								Reactjs
							</label>
						</div>
					</li>
					<li class="list-group-item">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="Angular" id="angular" v-model="skills">
							<label class="form-check-label" for="angular">
								Angular
							</label>
						</div>
					</li>
				</ul>
				<p class="mx-3">Frameworks selection: {{ skills }}</p>
				<div class="card-body">
					<a
					    href="#"
						@click.prevent="helloUser()"
					    class="card-link"
					>Show alert</a>
					<a href="#" class="card-link">Another link</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'test',
		data: ()=>({
			textTop:'',
			skills:[],
		}),
		
		methods:{
			helloUser(){
				alert(this.fullname);
			},
			eventReceive(val){
				this.textTop = val;
			}
		}
	}
</script>
