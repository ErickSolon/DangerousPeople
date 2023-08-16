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
    public class MoreInfoController : ControllerBase
    {
        private readonly DataDbContext _context;

        public MoreInfoController(DataDbContext context)
        {
            _context = context;
        }

        [HttpGet("/moreinfo")]
        public async Task<IActionResult> FindAll()
        {
            var MoreInfo = await _context.MoreInfos.ToListAsync();

            return Ok(MoreInfo);
        }

        [HttpGet("/moreinfo/{id}")]
        public async Task<IActionResult> FindById(int id)
        {
            var moreInfo = await _context.MoreInfos.Where(info => info.Id == id).ToListAsync();

            if (moreInfo == null)
            {
                return NotFound();
            }

            return Ok(moreInfo);
        }

        [HttpPost("/moreinfo")]
        public async Task<IActionResult> Save(MoreInfo moreInfo)
        {
            _context.MoreInfos.Add(moreInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(FindById), new { id = moreInfo.Id }, moreInfo);
        }

        [HttpPut("/moreinfo/{id}")]
        public async Task<IActionResult> Update(int id, MoreInfo moreInfo)
        {
            var MoreInfoUpdate = await _context.MoreInfos.SingleOrDefaultAsync(info => info.Id == id);

            if (MoreInfoUpdate == null)
            {
                return NotFound();
            }

            MoreInfoUpdate.UpdateMoreInfo(moreInfo.CPF, moreInfo.FullAddress, moreInfo.Identity, moreInfo.IsCriminal);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("/moreinfo/{id}")]
        public async Task<IActionResult> DeleteById(int id)
        {
            var MoreInfo = await _context.MoreInfos.SingleOrDefaultAsync(data => data.Id == id);

            if (MoreInfo == null)
            {
                return NotFound();
            }

            _context.MoreInfos.Remove(MoreInfo);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}