<template>
  <section id="error">
    <h1>Oops, looks like this page doesn't exist</h1>
    <br />
    <router-link to="/" id="button">
      Back to home
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'SubmissionFail'
}
</script>
