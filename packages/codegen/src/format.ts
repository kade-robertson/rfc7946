import { Biome, Distribution } from "@biomejs/js-api";
import type { PartialConfiguration } from "@biomejs/wasm-nodejs";
import config from "../../../biome.json";

let BiomeInstance: Biome;

export const formatDocument = async (document: string, path: string) => {
  if (!BiomeInstance) {
    BiomeInstance = await Biome.create({ distribution: Distribution.NODE });
    BiomeInstance.applyConfiguration(config as PartialConfiguration);
  }
  return BiomeInstance.formatContent(document, { filePath: path });
};
