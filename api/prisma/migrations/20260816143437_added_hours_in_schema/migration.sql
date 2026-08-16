-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_technician_availability" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "technicianId" TEXT NOT NULL,
    "hours" JSONB NOT NULL DEFAULT [],
    CONSTRAINT "technician_availability_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_technician_availability" ("id", "technicianId") SELECT "id", "technicianId" FROM "technician_availability";
DROP TABLE "technician_availability";
ALTER TABLE "new_technician_availability" RENAME TO "technician_availability";
CREATE UNIQUE INDEX "technician_availability_technicianId_key" ON "technician_availability"("technicianId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
