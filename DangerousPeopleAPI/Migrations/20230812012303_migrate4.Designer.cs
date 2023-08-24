﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend.Data;

#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(DataDbContext))]
    [Migration("20230812012303_migrate4")]
    partial class migrate4
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseCollation("utf8mb4_unicode_ci")
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            MySqlModelBuilderExtensions.HasCharSet(modelBuilder, "utf8mb4");

            modelBuilder.Entity("backend.Models.Datas", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<bool>("IsMarried")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("NomeCompleto")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Datas");
                });

            modelBuilder.Entity("backend.Models.MoreInfo", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<string>("CPF")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("FullAddress")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Identity")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<bool>("IsCriminal")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("Id");

                    b.ToTable("MoreInfos");
                });
#pragma warning restore 612, 618
        }
    }
}
