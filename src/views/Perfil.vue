<template>
  <div class="container">
    <div class="row">
      <form>
        <div class="form-row">
          <div class="form-group">
            <label for="inputAddress">Nombre completo</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Documento Identidad</label>
            <input type="text" class="form-control" id="inputEmail4" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail">Fecha Nacieminto</label>
            <input type="text" class="form-control" id="inputEmail" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail2">Nivel Ingles</label>
            <input type="text" class="form-control" id="inputEmail2" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword3">Telefono</label>
            <input type="number" class="form-control" id="inputPassword3" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress1">Correo Electronico</label>
          <input
            type="email"
            class="form-control"
            id="inputAddress1"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Ciudad</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Estado</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Pais</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Guradar</button>
      </form>
    </div>
  </div>
</template>
