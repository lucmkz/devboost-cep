import api from './services/api';

const component = document.getElementById('cep-component');

component.innerHTML = `
  <form id="cep-form">
    <div class="form-field">
      <label for="cep">cep:</label>
      <input type="text" id="cep" placeholder="Digite seu cep" required>
    </div>
    <button id="busca">Consultar CEP</button>
  </form>
  <div id="dadosCep"></div>
`;

const inputElement = component.querySelector('#cep');
const buttonElement = component.querySelector('#busca');
const dadosCep = component.querySelector('#dadosCep');

buttonElement.onclick = function findCep(event) {
  event.preventDefault();

  const inputText = inputElement.value;

  api.get(`/v1/cep/${inputText}`).then(response => {
    const { data } = response;

    
    dadosCep.innerHTML = `
      <p>Logradouro: ${data.logradouro}</p>
      <p>Bairro: ${data.bairro}</p>
      <p>Cidade: ${data.cidade}</p>
      <p>Estado: ${data.estado}</p>
      <p>CEP: ${data.cep}</p>
    `
  }).catch(() => {
    dadosCep.innerHTML = `
    <p class="error">O CEP: ${inputText} é inválido!</p>
  `
  });
}


