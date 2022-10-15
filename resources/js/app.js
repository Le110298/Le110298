/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import Component from './components/Component.vue';
app.component('Component', Component);
import Reg from './components/str/reg.vue';
app.component('Reg', Reg);
import Reg_serv from './components/str/Reg_serv.vue';
app.component('Reg_serv', Reg_serv);
import Modal_serv from './components/str/model_mod_Ser.vue';
app.component('Modal_serv', Modal_serv);
import Footer from './components/str/footer.vue';
app.component('Footer', Footer);
import GRAFI from './components/str/grafi_don.vue';
app.component('GRAFI', GRAFI);
import Grafi_lin from './components/str/grafic_lin.vue';
app.component('Grafi_lin', Grafi_lin);
import Grafi_pol from './components/str/grafic_polar.vue';
app.component('Grafi_pol', Grafi_pol);
import Grafic from './components/Graficos.vue';
app.component('Grafic', Grafic);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
