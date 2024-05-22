<template>
  <div class="categorias pt-5 pb-5">
    <div class="container">
      <h3>Categorias <a href="#" class="ver-mais">Ver mais</a></h3>
      <div class="row justify-content-center">
        <div class="col-md-2 mb-4" v-for="categoria in categorias" :key="categoria.nome">
          <div class="category-item text-center">
            <a :href="categoria.link" class="categoria-link-no-underline">
              <div class="category-image-container">
                <img :src="categoria.imagem" class="category-image" :alt="categoria.nome" />
              </div>
              <span class="category-name">{{ categoria.nome }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorias: [
        { nome: 'Celulares', link: '/', imagem: 'https://leoscherer.com.br/wp-content/uploads/2023/10/iPhone-15-Pro-Max-Titanio-Preto-1.png' },
        { nome: 'Informatica', link: '/', imagem: 'https://leoscherer.com.br/wp-content/uploads/2023/02/iPad-Pro-11-Polegadas-Space-Gray.png' },
        { nome: 'Eletronicos', link: '/', imagem: 'https://infostore.catalogoempresasenegocios.com.br/_core/_uploads/178/2023/02/1902210223aj0kk19aha.png' },
        { nome: 'Eletrodomesticos', link: '/', imagem: 'https://mktparcelex.vtexassets.com/arquivos/ids/246238/image-82f644703f05495ba19ccff8f5308600.jpg?v=638294553314500000' },
        { nome: 'Eletroportateis', link: '/', imagem: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/aflore/media/uploads/produtos/foto/be4f3fadb4ab7file.png' }
      ]
    };
  }
};
</script>

<style scoped>
.categorias {
  margin-bottom: -30px;
}

.category-item {
  transition: transform 0.3s ease;
}

.category-item:hover {
  transform: scale(1.1);
}

.category-image-container {
  height: 200px;
  overflow: hidden;
}

.category-image {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.category-name {
  display: block;
  font-weight: bold;
  color: #000;
}

.categoria-link-no-underline {
  text-decoration: none;
  color: inherit;
}

.categoria-link-no-underline:hover .category-name {
  color: #007bff;
}
</style>
