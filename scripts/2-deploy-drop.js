import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x105Bd9126d55300F8FEa070D71d61740C4165b70");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "MetaversityDAO Membership",
      // A description for the collection.
      description:
        "A DAO to help Metaverse Cities to live together in harmony and collaborate.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/metaversity.jpeg"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata()
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})();
