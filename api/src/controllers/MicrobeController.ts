import type { Request, Response } from 'express';
import { MicrobeService } from '../services/MicrobeService.js';
import type { MicrobeCategory } from '../../../shared/types.js';

const validCategories: MicrobeCategory[] = ['bacteria', 'fungi', 'virus', 'archaea'];

export class MicrobeController {
  static getAll(req: Request, res: Response) {
    try {
      const { category, search, limit, offset } = req.query;
      const params: {
        category?: MicrobeCategory;
        search?: string;
        limit?: number;
        offset?: number;
      } = {};

      if (category && typeof category === 'string' && validCategories.includes(category as MicrobeCategory)) {
        params.category = category as MicrobeCategory;
      }
      if (search && typeof search === 'string') {
        params.search = search;
      }
      if (limit && !isNaN(Number(limit))) {
        params.limit = Number(limit);
      }
      if (offset && !isNaN(Number(offset))) {
        params.offset = Number(offset);
      }

      const data = MicrobeService.getAll(params);
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  }

  static getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, error: '无效的ID' });
      }

      const data = MicrobeService.getById(id);
      if (!data) {
        return res.status(404).json({ success: false, error: '微生物不存在' });
      }

      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  }

  static getByCategory(req: Request, res: Response) {
    try {
      const category = req.params.category as MicrobeCategory;
      if (!validCategories.includes(category)) {
        return res.status(400).json({ success: false, error: '无效的分类' });
      }

      const data = MicrobeService.getByCategory(category);
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  }

  static getStats(_req: Request, res: Response) {
    try {
      const data = MicrobeService.getStats();
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  }

  static getRelated(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, error: '无效的ID' });
      }

      const microbe = MicrobeService.getById(id);
      if (!microbe) {
        return res.status(404).json({ success: false, error: '微生物不存在' });
      }

      const limit = req.query.limit ? Number(req.query.limit) : 4;
      const data = MicrobeService.getRelated(microbe, limit);
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  }
}
