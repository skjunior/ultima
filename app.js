//projeto final Sergio Krug Junior
//iniciado na sexta 22/09, finalizado 26/09 
//talentos ti, prof gabriel barros
/**********
ESTRUTURA BASE PARA UM MENU
***********/
const reservas = [];

function criarReserva() {
  const reserva = prompt("Digite os detalhes da reserva:");
  if (reserva) {
    reservas.push(reserva);
    console.log("Reserva criada com sucesso!");
  } else {
    console.log("Operação cancelada.");
  }
}

function visualizarReservas() {
 if (reservas.length === 0) {
    console.log("Não há reservas para visualizar.");
  } else {
    console.log("Reservas:");
    reservas.forEach((reserva, index) => {
      console.log(`${index + 1}. ${reserva}`);
    });
  }
}

function editarReserva() {
  visualizarReservas();
  const indice = parseInt(prompt("Digite o número da reserva que deseja editar:")) - 1;
  if (isNaN(indice) || indice < 0 || indice >= reservas.length) {
    console.log("Índice inválido.");
  } else {
    const novaReserva = prompt("Digite os novos detalhes da reserva:");
    if (novaReserva) {
      reservas[indice] = novaReserva;
      console.log("Reserva editada com sucesso!");
    } else {
      console.log("Operação cancelada.");
    }
  }
}

function deletarReserva() {
  visualizarReservas();
  const indice = parseInt(prompt("Digite o número da reserva que deseja deletar:")) - 1;
  if (isNaN(indice) || indice < 0 || indice >= reservas.length) {
    console.log("Índice inválido.");
  } else {
    const confirmacao = prompt(`Tem certeza de que deseja deletar a reserva "${reservas[indice]}"? (S/N)`).toUpperCase();
    if (confirmacao === "S") {
      reservas.splice(indice, 1);
      console.log("Reserva deletada com sucesso!");
    } else {
      console.log("Operação cancelada.");
    }
  }
}

function exibirMenu() {
  console.log("Menu:");
  console.log("1. Criar Reserva");
  console.log("2. Visualizar Reservas");
  console.log("3. Editar Reserva");
  console.log("4. Deletar Reserva");
  console.log("5. Sair");
  const opcao = prompt("Digite o número da opção desejada:");

  switch (opcao) {
    case "1":
      criarReserva();
      break;
    case "2":
      visualizarReservas();
      break;
    case "3":
      editarReserva();
      break;
    case "4":
      deletarReserva();
      break;
    case "5":
      console.log("Saindo do programa. Até logo!");
      return;
    default:
      console.log("Opção inválida. Tente novamente.");
  }

  exibirMenu();
}

exibirMenu();
exibirMenu();
