App = {
  contracts: {},
  init: async () => {
    await App.loadWeb3();
    await App.loadAccount();
    await App.loadContract();
    await App.render();
    await App.renderProcesses();
  },
  loadWeb3: async () => {
   console.log('Hola')
    if (window.ethereum) {


      App.web3Provider = window.ethereum;
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else if (web3) {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log(
        "No ethereum browser is installed. Try it installing MetaMask "
      );
    }
  },
  loadAccount: async () => {
    console.log('crear cargar cuenta')
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    App.account = accounts[0];
  },
  loadContract: async () => {
    console.log('cargar contrato')
    try {
      const res = await fetch("https://cdn.jsdelivr.net/gh/EdgardoLopezC/CET115Proyecto2BlockChain/build/contracts/ProcessesContract.json");
      const processesContractJSON = await res.json();
      App.contracts.processesContract = TruffleContract(processesContractJSON);
      App.contracts.processesContract.setProvider(App.web3Provider);

      App.processesContract = await App.contracts.processesContract.deployed();
    } catch (error) {
      console.error(error);
    }
  },
  render: async () => {
    document.getElementById("account").innerText = App.account;
  },
  renderProcesses: async () => {
    const processesCounter = await App.processesContract.processCounter();
    const processCounter = processesCounter.toNumber();

    let html = "";

    for (let i = processCounter; i >= 0; i--) {
      const process = await App.processesContract.processes(i);
      const processId = process[0].toNumber();
      const processTitle = process[1];
      const processProcess = process[2];
      const processDescription = process[3];
      const processCreatedAt = process[4];


      /*
        <input class="form-check-input" data-id="${processId}" type="checkbox" onchange="App.toggleDone(this)"
               ${ taskDone === true && "checked" }
              >
      */
      // Creating a task Card
      let processElement = `<div class="card  rounded-0 mb-2">
        <div class="card-header d-flex justify-content-between align-items-center">
          <span><b>${processTitle}</b></span>
          <div class="form-check form-switch">
             
          </div>
        </div>
        <div class="card-body">
          <span><b>Descripcion:</b> ${processDescription}</span><br>
          <span><b>Tipo de proceso:</b> ${processProcess}</span>
          <p class=""><b>Fecha de registro:</b> ${new Date(
            processCreatedAt * 1000
          ).toLocaleString()}</p>
          </label>
        </div>
      </div>`;
      html += processElement;
    }

    document.querySelector("#tasksList").innerHTML = html;
  },
  createProcess: async (title, process, description) => {
    console.log('crear proceso')
    try {
      const result = await App.processesContract.createProcess(title, process, description, {
        from: App.account,
      });
      console.log('aqui')
      console.log(result.logs[0].args);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  },
};
