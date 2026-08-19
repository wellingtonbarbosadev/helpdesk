-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_service" ("active", "createdAt", "description", "id", "name", "price", "updatedAt") SELECT "active", "createdAt", "description", "id", "name", "price", "updatedAt" FROM "service";
DROP TABLE "service";
ALTER TABLE "new_service" RENAME TO "service";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
