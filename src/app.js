import Vue from 'vue';
import Demo from './components/Demo';

const app = new Vue ({
	el: '#app',
	components: {
		Demo
	}
});

global.app = app;
