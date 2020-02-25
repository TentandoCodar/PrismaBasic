# Migration `20200225012605-init`

This migration has been generated at 2/25/2020, 1:26:05 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Post" (
    "author" integer   ,
    "content" text   ,
    "id" SERIAL,
    "title" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Profile" (
    "bio" text   ,
    "id" SERIAL,
    "user" integer  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."User" (
    "email" text  NOT NULL DEFAULT '',
    "id" SERIAL,
    "name" text   ,
    "password" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")

ALTER TABLE "public"."Post" ADD FOREIGN KEY ("author")REFERENCES "public"."User"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Profile" ADD FOREIGN KEY ("user")REFERENCES "public"."User"("id") ON DELETE RESTRICT  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200225003004-init..20200225012605-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
     provider = "postgresql"
-    url = "***"
+    url = "postgresql://postgres:1234@localhost:5432/Prisma"
 }
 model Post {
     id Int @id @default(autoincrement())
@@ -19,7 +19,8 @@
 model User {
     id Int @id @default(autoincrement())
     email String @unique
     name String?
+    password String
     posts Post[]
     profiles Profile[]
 }
```


