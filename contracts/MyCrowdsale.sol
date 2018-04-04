pragma solidity ^0.4.18;

import "./MintedCrowdsale.sol";
import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

/**
 * @title SampleCrowdsale
 * @dev This is an example of a fully fledged crowdsale.

 * After adding multiple features it's good practice to run integration tests
 * to ensure that subcontracts works together as intended.
 */
contract MyCrowdsale is MintedCrowdsale {

  function MyCrowdsale(uint256 _rate, address _wallet, MintableToken _token) public
    Crowdsale(_rate, _wallet, _token)
  {
    //As goal needs to be met for a successful crowdsale
    //the value needs to less or equal than a cap which is limit for accepted funds
//    require(_goal <= _cap);
  }
}
