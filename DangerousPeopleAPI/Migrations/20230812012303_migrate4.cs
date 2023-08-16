using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class migrate4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Datas_MoreInfo_MoreInfosId",
                table: "Datas");

            migrationBuilder.DropIndex(
                name: "IX_Datas_MoreInfosId",
                table: "Datas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MoreInfo",
                table: "MoreInfo");

            migrationBuilder.DropColumn(
                name: "MoreInfosId",
                table: "Datas");

            migrationBuilder.RenameTable(
                name: "MoreInfo",
                newName: "MoreInfos");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MoreInfos",
                table: "MoreInfos",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_MoreInfos",
                table: "MoreInfos");

            migrationBuilder.RenameTable(
                name: "MoreInfos",
                newName: "MoreInfo");

            migrationBuilder.AddColumn<long>(
                name: "MoreInfosId",
                table: "Datas",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddPrimaryKey(
                name: "PK_MoreInfo",
                table: "MoreInfo",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Datas_MoreInfosId",
                table: "Datas",
                column: "MoreInfosId");

            migrationBuilder.AddForeignKey(
                name: "FK_Datas_MoreInfo_MoreInfosId",
                table: "Datas",
                column: "MoreInfosId",
                principalTable: "MoreInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
