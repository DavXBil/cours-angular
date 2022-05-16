export interface Pizza {
        id: string;
        name: string;
        category: Category;
        ingredients: string[];
        price: number;
        image: ImagePath;
      }
      
      export enum Category {
        TOMATO = "Tomate" as any,
        CREAM = "Crème" as any,
        SWEET = "Sucrée" as any,
        SPECIAL = "Spéciale" as any,
      }
      
      export enum ImagePath {
        TOMATO = "assets/categories/tomato.png" as any,
        CREAM = "assets/categories/cream.png" as any,
        SWEET = "assets/categories/sweet.png" as any,
        SPECIAL = "assets/categories/special.png" as any,
      }