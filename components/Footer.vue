<template>
  <footer class="main-footer">
    <h6 id="copyright">
      &copy; Navid Kabir {{ new Date().getFullYear().toString() }} All respective rights belong to their owners.
    </h6>
    <!-- Copyright Text -->
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.main-footer {
  position: fixed;
  bottom: 50px;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  font-weight: bold;
  text-transform: full-width;
}
</style>
