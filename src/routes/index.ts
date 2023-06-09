import { Router, Request, Response } from "express";
import { Home, Dogs, Cats, Fishes } from "../controllers/pageController";
import { SearchController } from "../controllers/searchController";

const router = Router();

router.get('/', Home);
router.get('/dogs', Dogs);
router.get('/cats', Cats);
router.get('/fishes', Fishes);
router.get('/search', SearchController);


export default router;