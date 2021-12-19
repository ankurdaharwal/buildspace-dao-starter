import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x105Bd9126d55300F8FEa070D71d61740C4165b70");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "Metaversity Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "CITY",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
