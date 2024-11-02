import { SupplierWhereInput } from "./SupplierWhereInput";
import { SupplierOrderByInput } from "./SupplierOrderByInput";

export type SupplierFindManyArgs = {
  where?: SupplierWhereInput;
  orderBy?: Array<SupplierOrderByInput>;
  skip?: number;
  take?: number;
};
