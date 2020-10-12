using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ClubPlayers.Models
{
    public class Player
    {
        public int Id { get; set; }
        [Required]
        [StringLength(40, ErrorMessage = "Required text value with a maximum of 40 characters!!!")]
        public string Fullname { get; set; }

        [Required]
        [Range(1976, 1999, ErrorMessage = "Mandatory integer value greater than 1975 and less than 2000!!!")]
        public int YearOfBirth { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Required integer value greater than 0!!!")]
        public int NumOfMatchesForTheClub { get; set; }

        [Required]
        [Range(0.01, 29.99, ErrorMessage = "Required decimal value greater than 0 and less than 30!!!")]
        public decimal AveragePoints { get; set; }
        public string ImagePath { get; set; }
        public int ClubId { get; set; }
        public Club Club { get; set; }
    }
}