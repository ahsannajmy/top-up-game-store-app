export interface TPCategoryPayload {
  categoryName: string;
}

export interface TPCategory {
  id: string;
  createdAt: Date;
  deletedAt: Date;
  updatedAt: Date;
  categoryName: string;
}
