-- CreateTable
CREATE TABLE "Joke" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "setUp" TEXT NOT NULL,
    "punchLine" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "upVotes" INTEGER NOT NULL,
    "downVotes" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);
