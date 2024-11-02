import { PurchaseOrder as TPurchaseOrder } from "../api/purchaseOrder/PurchaseOrder";

export const PURCHASEORDER_TITLE_FIELD = "id";

export const PurchaseOrderTitle = (record: TPurchaseOrder): string => {
  return record.id?.toString() || String(record.id);
};
