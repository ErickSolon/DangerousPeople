using backend.Models;
using backend.Controllers;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using backend.Data;

namespace backend.Controllers
{
    [Route("/api/backend")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly DataDbContext _context;

        public PeopleController(DataDbContext context)
        {
            _context = context;
        }

        [HttpGet("/people")]
        public async Task<IActionResult> FindAll()
        {
            var InfosAboutPeople = await _context.Datas.Join(
                _context.MoreInfos,
                datas => datas.Id,
                moreInfos => moreInfos.Id,
                (datas, moreInfos) => new
                {
                    datas,
                    moreInfos
                }).ToListAsync();

            if(InfosAboutPeople == null || InfosAboutPeople.Count < 0)
            {
                return NotFound("Nenhum usuário adicionado!");
            }

            return Ok(InfosAboutPeople);
        }

        [HttpGet("/people/{id}")]
        public async Task<IActionResult> FindById(long id) {
            var InfosAboutPeopleById = await _context.MoreInfos.GroupJoin(
                _context.Datas,
                moreInfos => moreInfos.Id,
                datas => datas.Id,
                (moreInfos, datas) => new
                {
                    moreInfos,
                    datas
                })
                .SelectMany(x => x.datas.DefaultIfEmpty(),
                (moreInfos, datas) => new
                {
                    moreInfos.moreInfos,
                    datas
                })
                .Where(x => x.moreInfos.Id == id || x.datas.Id == id)
                .ToListAsync();

            if (InfosAboutPeopleById == null) {
                return NotFound("Dado não encontrado!");
            }

            return Ok(InfosAboutPeopleById);
        }
    }
}