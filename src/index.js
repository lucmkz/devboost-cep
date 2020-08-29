import api from './services/api';

const component = document.getElementById('cep-component');

component.innerHTML = `
<h3> Consulta CEP</h3>
  <form id="cep-form">
    <div class="form-field">
    <div id="header">
      <input type="text" id="cep" placeholder="Digite seu cep" required>
      <button id="busca">Buscar</button>
    </div>
  </div>
  </form>
  <div class="dadosCep hidden"></div>
`;

const inputElement = component.querySelector('#cep');
const buttonElement = component.querySelector('#busca');
const dadosCep = component.querySelector('.dadosCep');

buttonElement.onclick = function findCep(event) {
  event.preventDefault();

  const inputText = inputElement.value;
  dadosCep.classList.remove('hidden')

  api.get(`/v1/cep/${inputText}`).then(response => {
    const { data } = response;
    
    dadosCep.innerHTML = `
      <p class="first">Logradouro: ${data.logradouro}</p>
      <p>Bairro: ${data.bairro}</p>
      <p>Cidade: ${data.cidade}</p>
      <p>Estado: ${data.estado}</p>
      <p>CEP: ${data.cep}</p>
    `
  }).catch(() => {
    dadosCep.innerHTML = `
    <p class="error first">O CEP: ${inputText} é inválido!</p>
  `
  });
}


