using System;
using System.ComponentModel.DataAnnotations;

namespace UserLogin.Models
{
	public class Headphones
	{
		[Key]
		public string Id { get; set; }
		public string Image { get; set; }
		public string Title { get; set; }
		public int Price { get; set; }
		public string Category { get; set; }
		public string Description { get; set; }
        public ICollection<CartItems> CartItems { get; set; }
    }
}

