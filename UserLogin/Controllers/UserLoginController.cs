using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserLogin.Data;
using UserLogin.Models;
using UserLogin.Models.dto;
using UserLogin.services;

namespace UserLogin.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserLoginController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public UserLoginController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet("LoadCart")]
        public async Task<ActionResult<IEnumerable<object>>> LoadCart([FromQuery] string userId)
        {
           
            var user = await _db.Users
                .Include(u => u.CartItems)
                .ThenInclude(ci => ci.Headphone)
                .FirstOrDefaultAsync(u => u.Id == userId);

            if (user == null)
            {
                return Ok(new List<object>());
            }

            var cartItems = user.CartItems
                .Select(ci => new
                {
                    HeadphoneId = ci.Headphone.Id,
                    Quantity = ci.Quantity
                })
                .ToList();

            return Ok(cartItems);
        }
        [HttpPost("settingUsersCart")]
        public async Task<IActionResult> AddToCart([FromBody] AddToCartDTO dto)
        {
         
            var user = await _db.Users
                .Include(u => u.CartItems)
                .FirstOrDefaultAsync(u => u.Id == dto.UserId);

            var headphone = await _db.Headphones.FirstOrDefaultAsync(h => h.Id == dto.HeadphoneId);

            if (user == null || headphone == null)
                return NotFound("User or Headphone not found");

            CartItems newItem = new CartItems
            {
                UserId = user.Id,
                HeadphoneId=headphone.Id,
                Quantity=dto.Quantity
            };

            var existingCartItem = user.CartItems.FirstOrDefault(item => item.HeadphoneId == headphone.Id);

            if (existingCartItem != null)
            {
                existingCartItem.Quantity += dto.Quantity;
            }
            else
            {

                _db.CartItems.Add(newItem);
            }

            await _db.SaveChangesAsync();


            return Ok("Headphone added to user successfully.");

        }

        [HttpPost("GetUserByEmail")]
        public async Task< ActionResult<UserLoginDTO>>GetUserByEmail([FromBody]UserLoginDTO frontUser)
        {
            if (frontUser is null)
            {
                return BadRequest();
            }
            var foundUser = await _db.Users.FirstOrDefaultAsync(u => u.Email == frontUser.Email);
            if(foundUser is null)
            {
                return BadRequest();
            }
            if (foundUser.Password != frontUser.Password)
            {
                return BadRequest();
            }
            return Ok(foundUser);
        }

	
        [HttpPost("AddingNewUser")]
        public async Task< IActionResult> AddingNewUser([FromBody] UserSignupDTO signupUser)
        {
            if (await _db.Users.FirstOrDefaultAsync(u => u.Email == signupUser.Email) != null)
            {
                return BadRequest();
            }
            User model = new User
            {
                Id=Guid.NewGuid().ToString(),
                Name = signupUser.Name,
                Email = signupUser.Email,
                Password = signupUser.Password,
                DateCreated = DateTime.Now,
                DateUpdated = DateTime.Now
            };
			
            await	_db.Users.AddAsync(model);
            _db.SaveChanges();
            return Ok();
        }
       
    }

}



//Dependency Injection
// async await (async programming)
//repository pattern
//automapper
//CORS
//
// return Ok(_userService.sendingHeadphones());
// AddScoped, AddSingleton, AddTransient