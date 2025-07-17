using System;
using System.ComponentModel.DataAnnotations;

namespace UserLogin.Models
{
	public class CartItems
	{
		 public int Id { get; set; }
		public User User { get; set; }
		public string UserId { get; set; }
		public int Quantity { get; set; }
		public Headphones Headphone { get; set; }
		public string HeadphoneId { get; set; }
	}
}

