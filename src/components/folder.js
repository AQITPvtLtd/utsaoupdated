import fs from "fs";
import path from "path";

export const folder = (folderPath, folderName) => {
  const Path = path.join(process.cwd(), folderPath);
  const fullPath = path.join(Path, folderName);

  // Check if the folder already exists
  if (!fs.existsSync(fullPath)) {
    // Create the folder if it doesn't exist
    fs.mkdirSync(fullPath);
    console.log(`Folder '${folderPath}' created successfully.`);
  } else {
    console.log(`Folder '${folderPath}' already exists.`);
  }
};
