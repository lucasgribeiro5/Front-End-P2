<template>
  <div class="container1">
    <div class="card1">
      <header class="header1">
        <img src="../assets/images/logonovo2.png" alt="" height="100" style="background-color: transparent;" />
      </header>
      <div class="bemvindo">
        Bem-Vindo ao WebShop!
      </div>
      <form @submit.prevent="handleLogin">
        <div class="inputcontainer">
          <span style="position: relative; width: 100%;">
            <input type="text" id="email" name="email" placeholder="Identificação de Usuário" style="padding-left: 38px;" />
            <label
              for="email"
              style="position: absolute; top: 55.4%; left: 7px; transform: translateY(-50%); pointer-events: none; color: #555; transition: 0.3s; font-size: 1em;"
            >
              <span class="material-symbols-outlined" style="margin-right: 5px;">
                mail
              </span>
            </label>
          </span>
        </div>

        <div class="inputcontainer">
          <span style="position: relative; width: 100%;">
            <input
              :type="showPassword ? 'text' : 'password'"
              name="Senha"
              id="password"
              placeholder="Senha"
              v-model="password"
              @input="handleChangePassword"
              maxlength="25"
              style="padding-left: 38px;"
            />
            <label
              for="password"
              style="position: absolute; top: 54%; left: 5px; transform: translateY(-50%); pointer-events: none; color: #555; transition: 0.3s; font-size: password ? '0.8em' : '1em';"
            >
              <span class="material-symbols-outlined" style="margin-right: 5px;">
                lock
              </span>
            </label>
          </span>
          <button
            type="button"
            class="toggle-password"
            @click="togglePasswordVisibility"
          >
            {{ showPassword ? "Ocultar" : "Mostrar" }}
          </button>
        </div>

        <button type="submit" class="button">
          Entrar
        </button>

        <div class="Cadastro">
          <div class="aa">
            <router-link to="/Cadastro" class="cc">Cadastre-se</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      password: ''
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    handleChangePassword(event) {
      const inputPassword = event.target.value;
      if (inputPassword.length <= 25) {
        this.password = inputPassword;
      }
    },
    handleLogin() {
      alert(`Password: ${this.password}`);
      
    }
  }
};
</script>

<style scoped>

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Adicione isso para evitar overflow */
}

.container1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; /* Alterado para 100vh para garantir que ocupe a altura total da viewport */
  background-image: url(../assets/images/fundo1.1.png);
  background-size: cover; /* Garante que a imagem de fundo cubra toda a área */
  background-repeat: no-repeat;
}

.card1 {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: white;
}

.header1 {
  margin-bottom: 20px;
  background-color: transparent;
}

.bemvindo {
  color: #0072BC;
  font-size: 21px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 15px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.inputcontainer {
  position: relative;
  width: 100%;
  margin-bottom: 10px;
}

.inputcontainer input {
  width: 100%;
  height: 49px;
  padding: 12px 12px 12px 38px;
  border-radius: 12px;
  background-color: #f3f2f2;
  border: none;
  outline: none;
}

.inputcontainer label {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #555;
  transition: 0.3s;
  pointer-events: none;
}

.toggle-password {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #0674B8;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
}

.button {
  width: 320px;
  height: 48px;
  background-color: #0674B8;
  color: #fff;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.button:hover {
  transform: scale(1.1);
  background-color: #0897f0;
}

.Cadastro {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.Cadastro .aa {
  color: #0674B8;
  margin-right: 15px;
}

.Cadastro .cc {
  color: #0674B8;
}


</style>
