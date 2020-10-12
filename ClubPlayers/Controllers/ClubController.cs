using ClubPlayers.Interface;
using ClubPlayers.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ClubPlayers.Controllers
{
    public class ClubController : ApiController
    {
        IClubRepository _repository { get; set; }

        public ClubController(IClubRepository repository)
        {
            _repository = repository;
        }
        public IEnumerable<Club> GetAll()
        {
            return _repository.GetAll();
        }

        public IHttpActionResult GetById(int id)
        {
            var club = _repository.GetById(id);
            if (club == null)
            {
                return NotFound();
            }
            return Ok(club);
        }
        [Route("api/extremes")]
        public IEnumerable<Club> GetExtremi()
        {
            return _repository.GetExtremi();
        }

        [Route("api/clubPhoto")]
        public HttpResponseMessage GetClubImage(int id)
        {
            return _repository.GetClubImage(id);
        }
    }
}

