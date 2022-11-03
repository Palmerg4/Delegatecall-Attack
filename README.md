# dellegatecall() attack

Using dellegatecall() to change state on a prey contract. In this example, a malicious contract is able to change the owner to itself by typecasting an address as a uint. 

# Prevention

This can be prevented by using stateless library contracts, meaning the contracts to which you delegate the call should not maintain state and only be used for execution of logic.

```shell
npm install
npx hardhat test
```
