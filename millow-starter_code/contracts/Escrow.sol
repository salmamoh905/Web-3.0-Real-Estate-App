//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external;
}

contract Escrow {
    //store settings and with that we will create state variables and keep track of blockchain addressess
    // i.e Seller, Lender, Inspector, Appraiser, Buyer

    address public lender;
    address public inspector;
    address payable public seller;
    address public appraiser;
    address public nftAddress;
    //setting the variable values = and for that we have to use Constructor
    constructor(address _lender, address _inspector, address _nft, address payable _seller){
        nftAddress = _nft;
        seller = _seller;
        inspector = _inspector;
        lender = _lender;
        //we will set the seller as the deployer of the contract
    }

    
}
