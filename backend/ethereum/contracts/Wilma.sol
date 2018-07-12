pragma solidity ^0.4.24;

contract Wilma{
    address public owner;
   
    struct Data{
        string info;
    }
    mapping (address => bool) recipients;

    modifier restricted(){
        require(msg.sender == owner) _;
    }

    constructor(address _firstRecipient)public{
        owner = msg.sender;
        recipients[_firstRecipient] = true;
    }

    event newUserAdded(address recipient, bool status);

    function editRecipients(address _recipient, bool _status)external restricted{
        recipients[_recipient] = _status;
        emit newUserAdded(_recipient, _status);
    }


}