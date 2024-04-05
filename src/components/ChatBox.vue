<script setup lang="ts">
import {ref, toRaw} from "vue";
import axios from "axios";

const chatInput = ref('Hey')
const messages = ref([{ role: 'agent', content: 'Hello, I am Hal. How can I help you?' }]);
const currentOutputMessageContent = ref('')


async function submitChat(){
  messages.value.push({role:'user',content:toRaw(chatInput.value)})

  await axios.post("http://127.0.0.1:11434/api/generate",
      {
        "model":"mistral",
        "prompt":toRaw(chatInput.value),
        "stream":false
      }
  )
      .then((response)=>{
        console.log(response)
        console.log(response.data.response)
        currentOutputMessageContent.value = response.data.response

      })
}

</script>

<template>
  <div id="chatBox">
    <div id="chatContainer">
      <div id="chatArea" ref="chatArea">
        <div v-for="message in messages" :key="message.content">
          {{ message.content }}
        </div>
        <div v-if="currentOutputMessageContent">
          {{ currentOutputMessageContent }}
        </div>
      </div>
    </div>
    <div id="inputArea">
      <input id="chatInput" v-model="chatInput" @keyup.enter="submitChat" />
      <button @click="submitChat" id="submitButton">Submit</button>
    </div>
  </div>
</template>

<style scoped>
#chatBox {
  display: flex;
  height: 100%;
  flex-direction: column;
}

#chatContainer {
  position: relative;
  width: 100%;
  height: calc(100% - 100px);
}

#chatArea {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
}
</style>