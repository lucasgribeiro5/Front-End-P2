<template>
  <header class="header">
    <div class="container">
      <div
        class="display-flex justify-content-space-between align-items-center pt-16 pb-16"
      >
        <a class="logo" href="/">
          <img src="../assets/images/logoattt2.png" alt="Logo1" class="Logo"/>
        </a>
        <div class="opcoes display-flex align-items-center gap-32">
          <div v-if="isAuthenticated" class="display-flex align-items-center gap-8">
            <p>Bem-vindo, {{ userName }}</p>
            <button @click="logout">Sair</button>
          </div>
          <div v-else class="display-flex align-items-center gap-8">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M256,0C114.841,0,0,114.841,0,256s114.841,256,256,256s256-114.841,256-256S397.159,0,256,0z M346.895,456.06c-27.716,12.642-58.497,19.695-90.895,19.695c-32.398,0-63.18-7.053-90.895-19.695v-88.595c0-24.969,20.313-45.281,45.281-45.281h91.228c24.968,0,45.281,20.313,45.281,45.281V456.06z M383.14,435.149v-67.684c0-44.953-36.572-81.526-81.526-81.526h-4.533c32.021-15.369,54.184-48.113,54.184-85.94c0-52.53-42.736-95.265-95.266-95.265c-52.53,0-95.266,42.736-95.266,95.265c0,37.828,22.164,70.571,54.184,85.94h-4.533c-44.953,0-81.526,36.572-81.526,81.526v67.684C72.847,395.282,36.245,329.834,36.245,256c0-121.173,98.582-219.755,219.755-219.755S475.755,134.827,475.755,256C475.755,329.834,439.153,395.282,383.14,435.149z M256,259.019c-32.544,0-59.021-26.477-59.021-59.021c0-32.544,26.477-59.02,59.021-59.02s59.021,26.477,59.021,59.02C315.021,232.544,288.544,259.019,256,259.019z"
                  />
                </g>
              </g>
            </svg>
            <a href="/login" style="text-decoration: none;" class="category-link">Entrar/Cadastrar</a>
          </div>
          <div class="carrinho display-flex align-items-center gap-8">
            <svg
              version="1.1"
              height="34"
              width="34"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 511.997 511.997"
              style="enable-background: new 0 0 511.997 511.997"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M405.387,362.612c-35.202,0-63.84,28.639-63.84,63.84s28.639,63.84,63.84,63.84s63.84-28.639,63.84-63.84S440.588,362.612,405.387,362.612z M405.387,451.988c-14.083,0-25.536-11.453-25.536-25.536s11.453-25.536,25.536-25.536c14.083,0,25.536,11.453,25.536,25.536S419.47,451.988,405.387,451.988z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M507.927,115.875c-3.626-4.641-9.187-7.348-15.079-7.348H118.22l-17.237-72.12c-2.062-8.618-9.768-14.702-18.629-14.702H19.152C8.574,21.704,0,30.278,0,40.856s8.574,19.152,19.152,19.152h48.085l62.244,260.443c2.062,8.625,9.768,14.702,18.629,14.702h298.135c8.804,0,16.477-6.001,18.59-14.543l46.604-188.329C512.849,126.562,511.553,120.516,507.927,115.875z M431.261,296.85H163.227l-35.853-150.019h341.003L431.261,296.85z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M173.646,362.612c-35.202,0-63.84,28.639-63.84,63.84s28.639,63.84,63.84,63.84s63.84-28.639,63.84-63.84S208.847,362.612,173.646,362.612z M173.646,451.988c-14.083,0-25.536-11.453-25.536-25.536s11.453-25.536,25.536-25.536s25.536,11.453,25.536,25.536S187.729,451.988,173.646,451.988z"
                  />
                </g>
              </g>
            </svg>
            <router-link to="/carrinho" style="text-decoration: none;" class="category-link"> Carrinho </router-link>
          </div>
          <div class="carrinho display-flex align-items-center gap-8">
            <router-link to="/FormularioContato" style="text-decoration: none;" class="category-link"> Fale Conosco </router-link>
          </div>
          <div class="carrinho display-flex align-items-center gap-8">
            <router-link to="/Mensagens" style="text-decoration: none;" class="category-link"> Mensagens </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>

  <nav>
    <div class="container display-flex align-items-center justify-content-space-between pt-16 pb-16">
      <a href="/" class="category-link">Celulares</a>
      <a href="/" class="category-link">Informática</a>
      <a href="/" class="category-link">Eletrônicos</a>
      <a href="/" class="category-link">Eletrodomésticos</a>
      <a href="/" class="category-link">Eletroportáteis</a>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
    userName() {
      return this.$store.state.userName;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login'); 
    }
  }
};
</script>

<style scoped></style>
