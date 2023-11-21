export interface Score {
    professionalName: string;
    store: string;
    saleDate: number; 
    scoreDate: number; 
    scoreValidity: number; 
    products: ProductDetail[];
    invoice: string;
    status: boolean;
}

export interface ProductDetail {
    product: string;
    quantity: number;
    unitValue: number;
    points: number;
}
