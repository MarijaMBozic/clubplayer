using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ClubPlayers.Models
{
    public class Club
    {
        public int Id { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Required text value with a maximum of 50 characters!!!")]
        public string Name { get; set; }

        [Required]
        [StringLength(3, MinimumLength = 3, ErrorMessage = "Required text value with exactly 3 characters!!!")]
        public string League { get; set; }

        [Required]
        [Range(1945, 2000, ErrorMessage = "Mandatory integer value from the interval [1945, 2000]!!!")]
        public int YearClubWasFounded { get; set; }

        [Required]
        [Range(0, 19, ErrorMessage = "Required integer value greater than or equal to 0 and less than 20!!!")]
        public int NumOfWonTropheis { get; set; }

        [Required]
        public string ImagePath { get; set; }
    }
}