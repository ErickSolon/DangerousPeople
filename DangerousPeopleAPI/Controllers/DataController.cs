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
    public class DataController : ControllerBase
    {
        private readonly DataDbContext _context;

        public DataController(DataDbContext context)
        {
            _context = context;
        }

        [HttpGet("/data")]
        public async Task<IActionResult> FindAll()
        {
            var Data = await _context.Datas.ToListAsync();

            return Ok(Data);
        }

        [HttpGet("/data/{id}")]
        public async Task<IActionResult> FindById(int id)
        {
            var Data = await _context.Datas.Where(x => x.Id == id).ToListAsync();

            if (Data == null)
            {
                return NotFound();
            }

            return Ok(Data);
        }

        [HttpPost("/data")]
        public async Task<IActionResult> Save(Datas data)
        {
            _context.Datas.Add(data);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(FindById), new { id = data.Id }, data);
        }

        [HttpPut("/data/{id}")]
        public async Task<IActionResult> Update(int id, Datas data)
        {
            var Data = await _context.Datas.SingleOrDefaultAsync(data => data.Id == id);

            if (Data == null)
            {
                return NotFound();
            }

            Data.UpdateData(data.NomeCompleto, data.IsMarried);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("/data/{id}")]
        public async Task<IActionResult> DeleteById(int id)
        {
            var Data = await _context.Datas.SingleOrDefaultAsync(data => data.Id == id);

            if (Data == null)
            {
                return NotFound();
            }

            _context.Datas.Remove(Data);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}