using ClubPlayers.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ClubPlayers.Interface
{
    public interface IClubRepository
    {
        IEnumerable<Club> GetAll();
        Club GetById(int id);
        IEnumerable<Club> GetExtremi();
        HttpResponseMessage GetClubImage(int id);
    }
}
