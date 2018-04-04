pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

/**
 * @title SampleCrowdsaleToken
 * @dev Very simple ERC20 Token that can be minted.
 * It is meant to be used in a crowdsale contract.
 */
contract ZeitgeistToken is MintableToken {

  string public constant name = "Zeitgeist"; // solium-disable-line uppercase
  string public constant symbol = "ZGT"; // solium-disable-line uppercase
  uint8 public constant decimals = 18; // solium-disable-line uppercase

}
