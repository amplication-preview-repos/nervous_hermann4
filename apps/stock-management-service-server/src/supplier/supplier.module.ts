import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SupplierModuleBase } from "./base/supplier.module.base";
import { SupplierService } from "./supplier.service";
import { SupplierController } from "./supplier.controller";
import { SupplierResolver } from "./supplier.resolver";

@Module({
  imports: [SupplierModuleBase, forwardRef(() => AuthModule)],
  controllers: [SupplierController],
  providers: [SupplierService, SupplierResolver],
  exports: [SupplierService],
})
export class SupplierModule {}
