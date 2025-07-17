using System;
using System.ComponentModel.DataAnnotations;

namespace UserLogin.Models
{
    public class User
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
        public ICollection<CartItems> CartItems { get; set; }
    }   
}

