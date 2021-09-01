<template>
  <div class="about">
    <Nav />
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="card mt-5">
          <div class="card-header">Registro</div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <!---->
              <div class="form-group col">
                <label for="inputState">Tipo deUsuario</label>
                <select id="inputState" class="form-control" >
                  <option ></option>
                </select>
              </div>
              <!---->
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Check me out</label
                >
              </div>
              <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "about",
  components: {
    Nav,
  },
  data() {
    return {
    } 
  },
};
</script>
