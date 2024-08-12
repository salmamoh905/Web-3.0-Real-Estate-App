const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Escrow', () => {
    let buyer, seller, inspector, lender;
    let realEstate, escrow;
    it('Saves the addressess', async()=>{

        //setup accounts
        [buyer, seller, inspector, lender] = await ethers.getSigners()
       

        //deploying the smart contract
       const RealEstate = await ethers.getContractFactory('RealEstate')
       realEstate = await RealEstate.deploy()

       //MINT
       let transaction = await realEstate.connect(seller).mint('"https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS"')
       await transaction.wait()

       const Escrow = await ethers.getContractFactory('Escrow')
       escrow = await Escrow.deploy(realEstate.address, seller.address, lender.address, inspector.address)
        // console.log(escrow)

        let result = await escrow.nftAddres()
        expect(result).to.be.equal(realEstate.address)

         result = await escrow.seller()
        expect(result ).to.be.equal(seller.address)
    })

})
