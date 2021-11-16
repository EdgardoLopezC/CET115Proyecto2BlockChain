// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract ProcessesContract {
    uint256 public processCounter = 0;

    struct Process { //Task, struct es un tipo de Dato
        uint256 id;
        string title;
        string process;
        string description;
        //bool done;
        uint256 createdAt;
    }

    //TaskCreated
    event ProcessCreated( 
        uint256 id,
        string title,
        string process,
        string description,
        uint256 createdAt
    );
    //bool done,

    //event TaskToggledDone(uint256 id, bool done);


    //mapping(uint256 => Task) public tasks;
    mapping(uint256 => Process) public processes; //conjnunto de datos que contienen par y valor

    
    constructor() {
        createProcess("Mi primer proceso", "Proceso","Soy el primer proceso");
    }
    

    function createProcess(string memory _title, string memory _process ,string memory _description)
        public 
    {   // public permite ver esta funcion fuera de la blockchain
        processCounter++;
        processes[processCounter] = Process(
            processCounter,
            _title,
            _process,
            _description,
            block.timestamp
        );
        emit ProcessCreated(
            processCounter,
            _title,
            _process,
            _description,
            block.timestamp
        );
    }

    /*function toggleDone(uint256 _id) public {
        Task memory _task = tasks[_id];
        _task.done = !_task.done;
        tasks[_id] = _task;
        emit TaskToggledDone(_id, _task.done);
    }*/
}
