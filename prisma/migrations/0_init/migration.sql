-- CreateTable
CREATE TABLE "Rooms1f" (
    "id" INTEGER NOT NULL,
    "roomType" TEXT NOT NULL,
    "cleaningType" TEXT NOT NULL,
    "stayCleaningType" TEXT NOT NULL,
    "isKeyBack" BOOLEAN NOT NULL,
    "isCleaningComplete" BOOLEAN NOT NULL,
    "isWaitingCheck" BOOLEAN NOT NULL,
    "nowBeds" INTEGER NOT NULL,
    "newBeds" INTEGER NOT NULL,
    "adult" INTEGER NOT NULL,
    "inf" INTEGER NOT NULL,
    "kidInf" INTEGER NOT NULL,
    "memo" TEXT
);

-- CreateTable
CREATE TABLE "Rooms2f" (
    "id" INTEGER NOT NULL,
    "roomType" TEXT NOT NULL,
    "cleaningType" TEXT NOT NULL,
    "stayCleaningType" TEXT NOT NULL,
    "isKeyBack" BOOLEAN NOT NULL,
    "isCleaningComplete" BOOLEAN NOT NULL,
    "isWaitingCheck" BOOLEAN NOT NULL,
    "nowBeds" INTEGER NOT NULL,
    "newBeds" INTEGER NOT NULL,
    "adult" INTEGER NOT NULL,
    "inf" INTEGER NOT NULL,
    "kidInf" INTEGER NOT NULL,
    "memo" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Rooms1f_id_key" ON "Rooms1f"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Rooms2f_id_key" ON "Rooms2f"("id");

