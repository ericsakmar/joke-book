-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "setUp" TEXT NOT NULL,
    "punchLine" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "upVotes" INTEGER NOT NULL,
    "downVotes" INTEGER NOT NULL
);