const ProcessesContract = artifacts.require("ProcessesContract");

contract("ProcessesContract", (accounts) => {
  before(async () => {
    this.processesContract = await ProcessesContract.deployed();
  });

  it("migrate deployed successfully", async () => {
    const address = await this.processesContract.address;

    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });

  it("get process list", async () => {
    const processesCounter = await this.processesContract.processCounter();
    const process = await this.processesContract.processes(processesCounter);

    assert.equal(process.id.toNumber(), processesCounter.toNumber());
    assert.equal(process.title, "Mi primer proceso");
    assert.equal(process.description, "Soy el primer proceso");
    assert.equal(process.process, "Proceso");
    assert.equal(processesCounter, 1);
  });

  it("process created successfully", async () => {
    const result = await this.processesContract.createProcess("some process two", "process", "description process 2");
    const taskEvent = result.logs[0].args;
    const tasksCounter = await this.processesContract.processCounter();

    assert.equal(tasksCounter, 2);
    assert.equal(taskEvent.id.toNumber(), 2);
    assert.equal(taskEvent.title, "some process two");
    assert.equal(taskEvent.description, "description process 2");
    assert.equal(taskEvent.process, "process");
  });

});
