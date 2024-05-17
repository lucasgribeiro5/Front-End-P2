<template>
  <div>
    <Header></Header>
    <section class="introduce w-100 d-flex justify-content-start align-items-center">
      <div class="container">
        <div>
           <h1 class="titulo-personalizado">Fale conosco</h1>
           <p class="col-sm-6 h5" :style="{ color: 'rgba(84, 84, 84, 0.427)'}">
              Tem alguma dúvida, sugestão ou apenas quer bater um papo? Estamos aqui para te ajudar! Fale conosco e vamos resolver tudo juntos.
           </p>
          <a class="btn btn-success px-4" href="#duv">Saiba mais</a>
        </div>
      </div>
    </section>

    <div class="container">
      <h2 class="fs-3 verdes my-4">Formulário de contato</h2>
      <hr class="hidden-line">
      <form id="form" @submit.prevent="submitForm">
        <div class="container">
          <div class="row gap-2">
            <input class="col-6 py-2 border border-2 rounded" type="text" v-model="name" placeholder="Nome" required>
            <input class="col py-2 border border-2 rounded" type="text" v-model="email" placeholder="E-mail" required>
          </div>
          <div class="row mt-2">
            <input class="col-12 py-2 border border-2 rounded" type="text" v-model="subject" placeholder="Assunto" required>
          </div>
          <div class="row mt-2">
            <input class="col-12 py-2 border border-2 rounded" type="text" v-model="message" placeholder="Mensagem" required>
          </div>
          <p id="result"></p>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn btn-success px-5 my-2" type="submit">Enviar</button>
        </div>
      </form>
    </div>

    <div class="container">
      <h2 class="fs-3 verdes">Dúvidas Frequentes</h2>
      <hr class="hidden-line">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              Como faço para rastrear meu pedido?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Você pode rastrear seu pedido acessando a seção "Meus Pedidos" em sua conta. Clique no pedido que deseja rastrear para ver o status atual e obter o número de rastreamento. Você também receberá um e-mail com informações de rastreamento assim que o pedido for despachado.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Qual é o prazo de entrega dos produtos?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              O prazo de entrega varia conforme a localização do destinatário e o método de envio escolhido. Em geral, entregas padrão levam de 5 a 10 dias úteis, enquanto entregas expressas podem chegar em 2 a 5 dias úteis. Detalhes específicos serão fornecidos no momento da compra.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Quais são as opções de pagamento disponíveis?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Aceitamos diversas formas de pagamento, incluindo cartões de crédito (Visa, MasterCard, American Express), cartões de débito, boletos bancários, e carteiras digitais como PayPal e Google Pay. Confira todas as opções na página de finalização da compra.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Como faço para cancelar ou modificar um pedido?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Para cancelar ou modificar um pedido, entre em contato com o nosso atendimento ao cliente o mais rápido possível. Se o pedido ainda não tiver sido processado, podemos fazer as alterações solicitadas. Uma vez que o pedido tenha sido despachado, não será possível modificá-lo ou cancelá-lo.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
  <Rodape></Rodape>
</template>

<script setup>
import Header from "../components/Header.vue";
import Diferenciais from "../components/Diferenciais.vue";
import Categoria from "../components/Categoria.vue";
import Produtos from "../components/Produtos.vue";
import Rodape from "../components/Rodape.vue";
</script>