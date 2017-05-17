<template>
    <div id="app">
        <header>
          <h1 class="ui-header">{{ hello }}</h1>
          <h2 class="ui-header">{{ hello }}</h2>
        </header>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hello: "Hello Electron"
            }
        }
    }
</script>
