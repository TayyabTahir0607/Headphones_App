using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UserLogin.Migrations
{
    /// <inheritdoc />
    public partial class seedingData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Headphones",
                columns: table => new
                {
                    Id = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Image = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Price = table.Column<int>(type: "int", nullable: false),
                    Category = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Headphones", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Email = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Password = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DateCreated = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "CartItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    HeadphoneId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CartItems_Headphones_HeadphoneId",
                        column: x => x.HeadphoneId,
                        principalTable: "Headphones",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CartItems_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Headphones",
                columns: new[] { "Id", "Category", "Description", "Image", "Price", "Title" },
                values: new object[,]
                {
                    { "1", "ladies", "Dive into immersive audio with rich bass and sharp highs for the perfect listening experience.", "Headphone-1.webp", 59, "BassPro X1 Wireless Headphones" },
                    { "10", "ladies", "Perfect for workouts and runs with water-resistant durability.", "Headphone-10.webp", 47, "RunSound Active" },
                    { "11", "ladies", "Hear music the way it was meant to be with high-fidelity sound tuning.", "Headphone-11.webp", 69, "HiFi Aura 360" },
                    { "2", "ladies", "Lightweight design with cushioned ear cups for extended wear without fatigue.", "Headphone-2.webp", 39, "AeroSound Lite" },
                    { "3", "ladies", "Block out the world and focus on what matters with advanced noise cancellation.", "Headphone-3.webp", 79, "SilenceCore 700" },
                    { "4", "ladies", "Enjoy tangle-free listening with seamless Bluetooth connectivity.", "Headphone-4.webp", 49, "WaveConnect Pro" },
                    { "5", "ladies", "Feel every beat with powerful low-end response that brings music to life.", "Headphone-5.webp", 65, "ThunderBeat Max" },
                    { "6", "ladies", "Compact, foldable design makes these headphones travel-ready and space-saving.", "Headphone-6.png", 42, "FoldX Compact" },
                    { "7", "ladies", "Stay unplugged longer with up to 24 hours of continuous playback.", "Headphone-7.webp", 55, "EchoPlay 24H" },
                    { "8", "ladies", "Easy tap-and-swipe gestures let you control playback and calls with ease.", "Headphone-8.webp", 53, "TouchTune Air" },
                    { "9", "ladies", "Built-in mic with noise reduction for flawless voice clarity on the go.", "Headphone-9.webp", 44, "CallClear Vibe" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_HeadphoneId",
                table: "CartItems",
                column: "HeadphoneId");

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_UserId",
                table: "CartItems",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CartItems");

            migrationBuilder.DropTable(
                name: "Headphones");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
