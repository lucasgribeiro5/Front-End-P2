<template>
    <div class="container2">
        <div class="card1">
            <div class="form-header1">
                <div class="title1">
                    <h1>Cadastre-se</h1>
                </div>
            </div>
            <br>
            <form v-if="selectedOption === '1'" :class="transitioning ? 'fade-out' : 'fade-in'"
                @submit.prevent="handleSubmit(onSubmit)">
                <div class="input-form1">
                    <br />
                    <input type="text" placeholder="Nome Completo" v-model="formData.fullName" required />
                    <br />
                </div>

                <div class="input-form1">
                    <br />
                    <input type="text" id="mail" placeholder="Email" v-model="formData.email" required />
                    <br />
                </div>

                <div class="input-form1">
                    <br />
                    <input type="tel" placeholder="Celular" v-model="phoneNumber" @input="handlePhoneNumberChange"
                        maxlength="11" required />
                    <br />
                </div>

                <div class="input-form1">
                    <br />
                    <input type="text" placeholder="CPF" v-model="cpf" @input="handleCpfChange" maxlength="11"
                        required />
                    <br />
                </div>

                <div class="input-form1" style="position: relative">
                    <br />
                    <input :type="showPassword ? 'text' : 'password'" placeholder="Senha" maxlength="25"
                        v-model="formData.password" required />
                    <button type="button" class="togglepassword" @click="handleShowPassword"
                        style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%)">
                        {{ showPassword ? 'Ocultar' : 'Mostrar' }}
                    </button>
                    <br />
                </div>

                <div class="input-form1" style="position: relative">
                    <br />
                    <input :type="showConfirmPassword ? 'text' : 'password'" placeholder="Confirme a senha"
                        maxlength="25" v-model="formData.confirmPassword" required />
                    <button type="button" class="togglepassword" @click="handleShowConfirmPassword"
                        style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%)">
                        {{ showConfirmPassword ? 'Ocultar' : 'Mostrar' }}
                    </button>
                    <br />
                </div>

                <button class="button2" type="submit">
                    Cadastrar-se
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedOption = ref('1');
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const phoneNumber = ref('');
const cpf = ref('');
const ra = ref('');
const transitioning = ref(false);

const formData = ref({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    curso: '',
});

const handleOptionChange = (option) => {
    if (selectedOption.value !== option) {
        transitioning.value = true;
        setTimeout(() => {
            selectedOption.value = option;
            transitioning.value = false;
        }, 400);
    }
};

const handleShowPassword = () => {
    showPassword.value = !showPassword.value;
};

const handleShowConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value;
};

const formatPhoneNumber = (input) => {
    const cleanedInput = input.replace(/\D/g, '');
    const formattedNumber = cleanedInput.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    return formattedNumber;
};

const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    const formattedNumber = formatPhoneNumber(input);
    phoneNumber.value = formattedNumber;
};

const formatCPF = (input) => {
    const cleanedInput = input.replace(/\D/g, '');
    const formattedCPF = cleanedInput.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return formattedCPF;
};

const handleCpfChange = (e) => {
    const input = e.target.value;
    const formattedCPF = formatCPF(input);
    cpf.value = formattedCPF;
};

const handleRaChange = (e) => {
    const input = e.target.value;
    const formattedRa = input.slice(0, 7);
    ra.value = formattedRa;
};

const onSubmit = () => {
    console.log(formData.value);
};
</script>

<style scoped>
.container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(../assets/images/fundo1.1.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.card1 {
    width: 380px;
    height: 610px;
    max-width: 500px;
    max-height: 735px;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 50px auto;
}

.title1 h1 {
    margin-top: 3px;
    margin-right: 32%;
    color: black;
    font-size: 2em;
    font-weight: 500;
}

.form-header1 h1::after {
    content: '';
    display: block;
    width: 5rem;
    height: 0.3rem;
    background-color: #18b3cb;
    margin: 0 auto;
    margin-left: 3px;
    position: absolute;
    border-radius: 12px;
}

.radio {
    margin-top: 30px;
    text-align: center;
}

.input-form input {
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    border: none;
    background-color: #f3f2f2;
    outline: none;
    border-radius: 12px;
    height: 49px;
    width: 100%;
    padding: 12px;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.input-box1 select {
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 2px;
    font-size: 16px;
    color: #333;
    width: 170px;
    margin-left: 3px;
}

.button1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 48px;
    background: #18b3cb;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    gap: 15px;
    color: #fff;
    line-height: 22px;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
    margin-top: 40px;
    margin-left: 19.5%;
}

.button1:hover {
    transform: scale(1.1);
    background-color: #0897f0;
}

.button1:not(hover) {
    transform: scale(1);
    color: #fff;
}

.button2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 48px;
    background: #18b3cb;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    gap: 15px;
    color: #fff;
    line-height: 22px;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
    margin-top: 22px;
    margin-left: 19.5%;
}

.button2:hover {
    transform: scale(1.1);
    background-color: #0897f0;
}

.button2:not(hover) {
    transform: scale(1);
    color: #fff;
}

.togglepassword {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #18b3cb;
    position: absolute;
    margin-top: 12px;
    margin-right: 11px;
}

.bt1 {
    border: 2px solid white;
    background-color: transparent;
    padding-inline: 15px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px;
    outline: none;
}

.bt1:hover {
    background-color: #0897f0;
    color: white;
    transition: 0.5s;
}

.bt1:focus {
    background-color: #0382d1;
    color: white;
    border: 2px solid #3498db;
}

.bt2 {
    border: 2px solid white;
    background-color: transparent;
    padding-inline: 15px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px;
    outline: none;
}

.bt2:hover {
    background-color: #0897f0;
    color: white;
    transition: 0.5s;
}

.bt2:focus {
    background-color: #0382d1;
    color: white;
    border: 2px solid #3498db;
}

.selected {
    background-color: #0382d1;
    color: #fff;
}

.form {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.form.hidden {
    opacity: 0;
    pointer-events: none;
}

.form.visible {
    opacity: 1;
    pointer-events: auto;
}

.input-form1 input {
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    border: none;
    background-color: #f3f2f2;
    outline: none;
    border-radius: 12px;
    height: 49px;
    width: 100%;
    padding: 12px;
}

.hidden {
    display: none;
    transition: 0.3s;
}

.visible {
    display: block;
    transition: 0.3s;
    opacity: 1;
}

.fade-in {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
}

.fade-out {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}
</style>