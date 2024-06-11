<template>
  <div class="page-container">
    <header class="header">
      <div class="container">
        <div class="display-flex justify-content-space-between align-items-center pt-16 pb-16">
          <a class="logo" href="/">
            <img src="../assets/images/logoattt2.png" alt="Logo" class="Logo1"/>
          </a>
          <div class="opcoes display-flex align-items-center gap-32">
            <div class="display-flex align-items-center gap-8">
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
              <span v-if="isAuthenticated">{{ userName }}</span>
              <router-link v-if="!isAuthenticated" to="/login" style="text-decoration: none;" class="category-link">Entrar/Cadastrar</router-link>
            </div>
            <div class="carrinho display-flex align-items-center gap-8">
              <router-link to="/carrinho" style="text-decoration: none;" class="category-link"> Carrinho </router-link>
            </div>
            <div class="carrinho display-flex align-items-center gap-8">
              <router-link to="/FormularioContato" style="text-decoration: none;" class="category-link"> Fale Conosco </router-link>
            </div>
            <div class="carrinho display-flex align-items-center gap-8">
              <router-link to="/Mensagens" style="text-decoration: none;" class="category-link"> Mensagens </router-link>
            </div>
            <div class="carrinho display-flex align-items-center gap-8" v-if="isAuthenticated">
              <button @click="logout">Sair</button>
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

    <div class="main-content">
      <div class="produtos-carrinho pt-64 pb-32">
        <div class="container">
          <h3>Carrinho de Compras</h3>
          <div class="lista-produtos-carrinho mt-32">
            <div class="produto-carrinho display-flex justify-content-space-between align-items-center gap-16 pb-24">
              <div class="detalhes display-flex align-items-center gap-16">
                <figure>
                  <img
                    src="../assets/Produtos/Iphone 15.jpg"
                    alt="Celulares"
                    width="120px"
                    height="120px"
                    style="margin-right: 17px;"
                  />
                </figure>
                <article>
                  <p class="nome-produto">Iphone 15 Pro Max 1TB</p>
                  <p class="categoria">Eletronicos - Celulares</p>
                  <p class="preco">R$ 11.759,66</p>
                </article>
              </div>
              <button>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Remover do carrinho
              </button>
            </div>

            <div class="produto-carrinho display-flex justify-content-space-between align-items-center gap-16 pb-24">
              <div class="detalhes display-flex align-items-center gap-16">
                <figure>
                  <img
                    src="../assets/Produtos/Capinha.jpg"
                    alt="Capa + pelicula"
                    width="120px"
                    height="140px"
                    style="margin-right: 17px;"
                  />
                </figure>
                <article>
                  <p class="nome-produto">Kit Capa Magsafe e Pelicula para Iphone 15 Pro Max</p>
                  <p class="categoria">Utilidades</p>
                  <p class="preco">R$ 150,00</p>
                </article>
              </div>
              <button>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Remover do carrinho
              </button>
            </div>

            <p class="total">Total: R$ 11.909,66</p>
          </div>
        </div>
      </div>
    </div>

    <div class="newsletter pt-32 pb-32">
      <div class="container">
        <div class="display-flex justify-content-space-between align-items-center">
          <div class="titulo">
            <p>CADASTRE-SE PARA RECEBER</p>
            <p>as promoções mais recentes e novidades</p>
          </div>
          <div class="form display-flex align-items-center gap-8">
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu email" />
            <button>Cadastrar-se</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

.produtos-carrinho .container,
.newsletter .container {
  display: flex;
  flex-direction: column;
}

.display-flex {
  display: flex;
}
</style>
