using Microsoft.EntityFrameworkCore;
using UserLogin.Models;
using UserLogin.Models.dto;
using static System.Net.Mime.MediaTypeNames;

namespace UserLogin.Data
{
	public class ApplicationDbContext:DbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options)
		{

		}
       
        public DbSet<User> Users { get; set; }
        public DbSet<Headphones> Headphones { get; set; }
        public DbSet<CartItems> CartItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           

           
            modelBuilder.Entity<Headphones>().HasKey(p => p.Id);
            modelBuilder.Entity<Headphones>().HasData(
                new Headphones()
                  {
            Id= "1",
      Image= "Headphone-1.webp",
      Title= "BassPro X1 Wireless Headphones",
      Price= 59,
      Category= "ladies",
      Description= "Dive into immersive audio with rich bass and sharp highs for the perfect listening experience."
    },
                new Headphones(){
            Id= "2",
                    Image= "Headphone-2.webp",
                    Title= "AeroSound Lite",
                    Price= 39,
                    Category= "ladies",
                    Description="Lightweight design with cushioned ear cups for extended wear without fatigue."
    },
                new Headphones()
    {
            Id= "3",
      Image= "Headphone-3.webp",
      Title= "SilenceCore 700",
      Price= 79,
      Category= "ladies",
      Description= "Block out the world and focus on what matters with advanced noise cancellation."
    },
                new Headphones()
    {
            Id= "4",
      Image= "Headphone-4.webp",
      Title= "WaveConnect Pro",
      Price= 49,
      Category= "ladies",
      Description= "Enjoy tangle-free listening with seamless Bluetooth connectivity."
    },
                new Headphones()
    {
            Id= "5",
      Image= "Headphone-5.webp",
      Title = "ThunderBeat Max",
      Price= 65,
      Category= "ladies",
      Description= "Feel every beat with powerful low-end response that brings music to life."
    },
                new Headphones()
    {
            Id= "6",
      Image= "Headphone-6.png",
      Title= "FoldX Compact",
      Price= 42,
      Category= "ladies",
      Description= "Compact, foldable design makes these headphones travel-ready and space-saving."
    },
                new Headphones()
    {
            Id= "7",
      Image= "Headphone-7.webp",
      Title= "EchoPlay 24H",
      Price= 55,
      Category= "ladies",
      Description= "Stay unplugged longer with up to 24 hours of continuous playback."
    },
                new Headphones()
    {
            Id= "8",
      Image= "Headphone-8.webp",
      Title= "TouchTune Air",
      Price= 53,
      Category= "ladies",
      Description= "Easy tap-and-swipe gestures let you control playback and calls with ease."
    },
                new Headphones()
    {
            Id= "9",
      Image= "Headphone-9.webp",
      Title= "CallClear Vibe",
      Price= 44,
      Category= "ladies",
      Description= "Built-in mic with noise reduction for flawless voice clarity on the go."
    },
                new Headphones()
    {
            Id= "10",
      Image= "Headphone-10.webp",
      Title= "RunSound Active",
      Price= 47,
      Category= "ladies",
      Description= "Perfect for workouts and runs with water-resistant durability."
    },
                new Headphones()
    {
            Id= "11",
      Image= "Headphone-11.webp",
      Title= "HiFi Aura 360",
      Price= 69,
      Category= "ladies",
      Description= "Hear music the way it was meant to be with high-fidelity sound tuning."
    }
         
    
                );
        }
      
    }
}

