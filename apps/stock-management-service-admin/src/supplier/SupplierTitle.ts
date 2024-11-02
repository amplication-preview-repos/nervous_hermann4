import { Supplier as TSupplier } from "../api/supplier/Supplier";

export const SUPPLIER_TITLE_FIELD = "id";

export const SupplierTitle = (record: TSupplier): string => {
  return record.id?.toString() || String(record.id);
};
