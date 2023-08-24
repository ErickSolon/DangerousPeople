using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using backend.Models;
namespace backend.Data;

public partial class DataDbContext : DbContext
{
    public DbSet<Datas> Datas { get; set; }
    public DbSet<MoreInfo> MoreInfos { get; set; }

    public DataDbContext()
    {
    }

    public DataDbContext(DbContextOptions<DataDbContext> options)
        : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;user id=root;Password=root;database=DataDB", Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.4.28-mariadb"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_general_ci")
            .HasCharSet("utf8mb4");

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
