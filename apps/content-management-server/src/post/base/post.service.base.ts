/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Post as PrismaPost,
  Category as PrismaCategory,
} from "@prisma/client";

export class PostServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PostCountArgs, "select">): Promise<number> {
    return this.prisma.post.count(args);
  }

  async posts<T extends Prisma.PostFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>
  ): Promise<PrismaPost[]> {
    return this.prisma.post.findMany<Prisma.PostFindManyArgs>(args);
  }
  async post<T extends Prisma.PostFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>
  ): Promise<PrismaPost | null> {
    return this.prisma.post.findUnique(args);
  }
  async createPost<T extends Prisma.PostCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostCreateArgs>
  ): Promise<PrismaPost> {
    return this.prisma.post.create<T>(args);
  }
  async updatePost<T extends Prisma.PostUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>
  ): Promise<PrismaPost> {
    return this.prisma.post.update<T>(args);
  }
  async deletePost<T extends Prisma.PostDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostDeleteArgs>
  ): Promise<PrismaPost> {
    return this.prisma.post.delete(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.post
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}