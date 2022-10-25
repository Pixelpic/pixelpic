-- CreateEnum
CREATE TYPE "UserRoleType" AS ENUM ('admin', 'manager');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "role" "UserRoleType" NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "HEX" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Palette" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Palette_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frame" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "horizontal" INTEGER NOT NULL,
    "vertical" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Frame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Presale" (
    "id" TEXT NOT NULL,
    "number" SERIAL NOT NULL,
    "created" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "frame" TEXT,
    "image" TEXT,

    CONSTRAINT "Presale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL,
    "number" SERIAL NOT NULL,
    "created" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "frame" TEXT,
    "image" TEXT,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "image" JSONB,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Palette_colors" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Color_name_key" ON "Color"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Color_HEX_key" ON "Color"("HEX");

-- CreateIndex
CREATE UNIQUE INDEX "Frame_name_key" ON "Frame"("name");

-- CreateIndex
CREATE INDEX "Presale_frame_idx" ON "Presale"("frame");

-- CreateIndex
CREATE INDEX "Presale_image_idx" ON "Presale"("image");

-- CreateIndex
CREATE INDEX "Sale_frame_idx" ON "Sale"("frame");

-- CreateIndex
CREATE INDEX "Sale_image_idx" ON "Sale"("image");

-- CreateIndex
CREATE UNIQUE INDEX "_Palette_colors_AB_unique" ON "_Palette_colors"("A", "B");

-- CreateIndex
CREATE INDEX "_Palette_colors_B_index" ON "_Palette_colors"("B");

-- AddForeignKey
ALTER TABLE "Presale" ADD CONSTRAINT "Presale_frame_fkey" FOREIGN KEY ("frame") REFERENCES "Frame"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presale" ADD CONSTRAINT "Presale_image_fkey" FOREIGN KEY ("image") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_frame_fkey" FOREIGN KEY ("frame") REFERENCES "Frame"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_image_fkey" FOREIGN KEY ("image") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Palette_colors" ADD CONSTRAINT "_Palette_colors_A_fkey" FOREIGN KEY ("A") REFERENCES "Color"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Palette_colors" ADD CONSTRAINT "_Palette_colors_B_fkey" FOREIGN KEY ("B") REFERENCES "Palette"("id") ON DELETE CASCADE ON UPDATE CASCADE;
