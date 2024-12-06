import { Command } from "commander";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import healthCheck from "./health-check.js";
import lib from "./lib.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageJsonPath = path.join(__dirname, "../package.json");

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

const program = new Command();

program
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version);

program.parse();

lib.log("Started...");

healthCheck();

