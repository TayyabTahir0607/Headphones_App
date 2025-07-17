using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserLogin.Data;
using UserLogin.Models;

namespace UserLogin.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class HeadphonesController:ControllerBase
	{
		private readonly ApplicationDbContext _db;
       public HeadphonesController(ApplicationDbContext db)
		{
			_db = db;
		}

        [HttpGet("sendingHeadphones")]
	    public async Task<ActionResult< IEnumerable<Headphones>>> sendingHeadphones()
		{
           if (!await _db.Headphones.AnyAsync())
            {
				return NoContent();
            }

			List<Headphones> allHeadphones= await _db.Headphones.ToListAsync();
			return Ok(allHeadphones);
        }
        [HttpDelete("emptyCart")]
        public async Task<IActionResult> EmptyCart([FromQuery] string userId)
        {
            var user = await _db.Users
                .Include(u => u.CartItems)
                .ThenInclude(ci => ci.Headphone)
                .FirstOrDefaultAsync(u => u.Id == userId);

            if (user == null)
            {
                return NotFound("User not found.");
            }

            if (user.CartItems == null || !user.CartItems.Any())
            {
                return Ok("Cart is already empty.");
            }

            _db.CartItems.RemoveRange(user.CartItems);

            await _db.SaveChangesAsync();

            return Ok("Cart emptied successfully.");
        }
    }
}

