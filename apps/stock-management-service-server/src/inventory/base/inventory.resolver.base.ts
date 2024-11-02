/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Inventory } from "./Inventory";
import { InventoryCountArgs } from "./InventoryCountArgs";
import { InventoryFindManyArgs } from "./InventoryFindManyArgs";
import { InventoryFindUniqueArgs } from "./InventoryFindUniqueArgs";
import { DeleteInventoryArgs } from "./DeleteInventoryArgs";
import { InventoryService } from "../inventory.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Inventory)
export class InventoryResolverBase {
  constructor(
    protected readonly service: InventoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "read",
    possession: "any",
  })
  async _inventoriesMeta(
    @graphql.Args() args: InventoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Inventory])
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "read",
    possession: "any",
  })
  async inventories(
    @graphql.Args() args: InventoryFindManyArgs
  ): Promise<Inventory[]> {
    return this.service.inventories(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Inventory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "read",
    possession: "own",
  })
  async inventory(
    @graphql.Args() args: InventoryFindUniqueArgs
  ): Promise<Inventory | null> {
    const result = await this.service.inventory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Inventory)
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "delete",
    possession: "any",
  })
  async deleteInventory(
    @graphql.Args() args: DeleteInventoryArgs
  ): Promise<Inventory | null> {
    try {
      return await this.service.deleteInventory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
