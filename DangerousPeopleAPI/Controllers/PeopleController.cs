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
            var infosAboutPeople = await (
                from data in _context.Datas
                join moreInfo in _context.MoreInfos on data.Id equals moreInfo.Id
                select new
                {
                    Data = data,
                    MoreInfo = moreInfo
                }
            ).ToListAsync();

            return Ok(infosAboutPeople);
        }

        [HttpGet("/people/{id}")]
        public async Task<IActionResult> FindById(long id) {
            var infosAboutPeopleById = await (
                from data in _context.Datas
                join moreInfo in _context.MoreInfos on data.Id equals moreInfo.Id
                where data.Id == id
                select new
                {
                    Data = data,
                    MoreInfo = moreInfo
                }
            ).ToListAsync();

            if (infosAboutPeopleById.FirstOrDefault() == null) {
                return NotFound();
            }

            return Ok(infosAboutPeopleById);
        }
    }
}