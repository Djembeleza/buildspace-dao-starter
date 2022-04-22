import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x6823422b667091739FEEc2D7422C6B350522b620");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Music Ethusiast",
        description: "This NFT will give you access to DjezisaDAO",
        image: readFileSync("scripts/assets/music.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();