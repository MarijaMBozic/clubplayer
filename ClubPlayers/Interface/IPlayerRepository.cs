using ClubPlayers.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ClubPlayers.Interface
{
    public interface IPlayerRepository
    {
        IEnumerable<Player> GetAll();
        Player GetById(int id);
        IEnumerable<Player> GetByYearOfBirth(int yearOfBirth);
        IEnumerable<Player> GetBySearch(int least, int atMost);
        void Add(Player basketballPlayer);
        void Update(Player basketballPlayer);
        void Delete(Player basketballPlayer);
        void DeleteImage(int id);
        HttpResponseMessage GetFileImage(int id);
    }
}
