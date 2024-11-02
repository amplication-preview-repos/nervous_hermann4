import { PurchaseOrderWhereInput } from "./PurchaseOrderWhereInput";
import { PurchaseOrderOrderByInput } from "./PurchaseOrderOrderByInput";

export type PurchaseOrderFindManyArgs = {
  where?: PurchaseOrderWhereInput;
  orderBy?: Array<PurchaseOrderOrderByInput>;
  skip?: number;
  take?: number;
};
