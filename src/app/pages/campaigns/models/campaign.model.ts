import { Branch } from "../../branches/models/branch.model";
import { Category } from "../../categories/models/category.model";
import { Product } from "../../products/models/products.model";
import { World } from "../../worlds/models/world.model";

export interface Campaign {
    name: string;
    timePeriod: number;
    products: Product[];
    categories: Category[];
    worlds: World[];
    region: string;
    branches: Branch[];
    status: boolean;
}
