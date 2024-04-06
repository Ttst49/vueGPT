import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import Avatar from "primevue/avatar";
import Dropdown from "primevue/dropdown";
import ProgressBar from "primevue/progressbar";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

import "primevue/resources/themes/aura-light-green/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";


const app = createApp(App);

app.use(PrimeVue);
app.component("Button", Button);
app.component("Textarea", Textarea);
app.component("Avatar", Avatar);
app.component("Dropdown", Dropdown);
app.component("ProgressBar", ProgressBar);
app.component("Dialog", Dialog);
app.component("InputText", InputText);
app.use(VueAxios, axios)
app.mount('#app')
