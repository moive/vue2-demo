<template>
	<div class="row mt-5">
		<div class="col-md-4">
			<div class="card">
				<svg
				    class="bd-placeholder-img card-img-top"
				    width="100%"
				    height="180"
				    xmlns="http://www.w3.org/2000/svg"
				    role="img"
				    aria-label="Placeholder: Image cap"
				    preserveAspectRatio="xMidYMid slice"
				    focusable="false"
				>
					<title>Placeholder</title>
					<rect
					    width="100%"
					    height="100%"
					    fill="#868e96"></rect>
					<text
					    x="50%"
					    y="50%"
					    fill="#dee2e6"
					    dy=".3em"
						dominant-baseline="middle"
						text-anchor="middle"
					>{{textTop}}</text>
				</svg>
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
