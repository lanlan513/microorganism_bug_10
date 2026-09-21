import microbesData from '../data/microbesData.json' with { type: 'json' };
import type { Microbe, MicrobeCategory, Stats } from '../../../shared/types.js';

const microbes = microbesData as Microbe[];

export class MicrobeService {
  static getAll(params?: {
    category?: MicrobeCategory;
    search?: string;
    limit?: number;
    offset?: number;
  }): Microbe[] {
    let result = [...microbes];

    if (params?.category) {
      result = result.filter((m) => m.category === params.category);
    }

    if (params?.search) {
      const keyword = params.search.toLowerCase();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(keyword) ||
          m.scientificName.toLowerCase().includes(keyword) ||
          m.description.toLowerCase().includes(keyword) ||
          m.habitat.toLowerCase().includes(keyword)
      );
    }

    if (params?.offset !== undefined) {
      result = result.slice(params.offset);
    }
    if (params?.limit !== undefined) {
      result = result.slice(0, params.limit);
    }

    return result;
  }

  static getById(id: number): Microbe | undefined {
    return microbes.find((m) => m.id === id);
  }

  static getByCategory(category: MicrobeCategory): Microbe[] {
    return microbes.filter((m) => m.category === category);
  }

  static getStats(): Stats {
    return {
      total: microbes.length,
      bacteria: microbes.filter((m) => m.category === 'bacteria').length,
      fungi: microbes.filter((m) => m.category === 'fungi').length,
      virus: microbes.filter((m) => m.category === 'virus').length,
      archaea: microbes.filter((m) => m.category === 'archaea').length,
    };
  }

  static getRelated(microbe: Microbe, limit: number = 4): Microbe[] {
    return microbes
      .filter((m) => m.category === microbe.category && m.id !== microbe.id)
      .slice(0, limit);
  }
}
