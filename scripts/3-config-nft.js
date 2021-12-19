import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xe00B234281963d8589f59c22DB868aa4B0dDDa8C"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Gold Membership Access Pass",
        description: "This NFT grants access to the MetaversityDAO!",
        image: readFileSync("scripts/assets/membership_card_gold.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
